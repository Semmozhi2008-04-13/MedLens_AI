import easyocr

reader = easyocr.Reader(['en'])

def extract_text(image_path):

    results = reader.readtext(image_path)

    extracted_text = " ".join([text[1] for text in results])

    return extracted_text