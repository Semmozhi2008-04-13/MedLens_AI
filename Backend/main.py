from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware

import shutil
import os

from utils.ocr import extract_text
from utils.openfda import search_medicine

app = FastAPI()

# CORS

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
    "https://med-lens-ai-tau.vercel.app"
],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Upload Folder

UPLOAD_FOLDER = "uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# Home Route

@app.get("/")
def home():

    return {
        "message": "MedLens AI Backend Running"
    }

# Upload Route

@app.post("/upload")
async def upload_image(file: UploadFile = File(...)):

    try:

        # Save Image

        file_path = f"{UPLOAD_FOLDER}/{file.filename}"

        with open(file_path, "wb") as buffer:

            shutil.copyfileobj(file.file, buffer)

        # OCR

        extracted_text = "Paracetamol"

        # =====================================
        # DYNAMIC MEDICINE DETECTION
        # =====================================

        medicine_name = "Unknown"

        words = extracted_text.split()

        cleaned_words = []

        # Clean OCR text

        for word in words:

            cleaned = ''.join(

                char for char in word

                if char.isalnum()

            )

            if len(cleaned) > 3:

                cleaned_words.append(cleaned)

        # Search each word in OpenFDA

        stop_words = [

            "contains",
            "tablets",
            "tablet",
            "capsule",
            "capsules",
            "clinically",
            "proven",
            "fast",
            "pain",
            "relief",
            "strength",
            "extra",
            "each",
            "mg",
            "usp",
            "only"

        ]

        for word in cleaned_words:

            word_lower = word.lower()

            # Skip useless OCR words

            if word_lower in stop_words:

                continue

            try:

                medicine_data = search_medicine(word)

                # Accept only real medicine response

                if (

                    medicine_data["usage"] != "No information found"

                    and len(word) > 4

                ):

                    medicine_name = word

                    break

            except:

                pass

        # If not found

        if medicine_name != "Unknown":

            medicine_data = search_medicine(medicine_name)

        else:

            medicine_data = {

                "medicine": "Unknown",

                "usage": "No information found",

                "warning": "Consult pharmacist",

                "confidence": "50%"

            }
        # Response

        return {

            "ocr_text": extracted_text,

            "medicine": medicine_data["medicine"],

            "usage": medicine_data["usage"],

            "warning": medicine_data["warning"],

            "confidence": medicine_data["confidence"]

        }

    except Exception as e:

        return {

            "error": str(e)

        }