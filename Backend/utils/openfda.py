import requests

def search_medicine(medicine_name):

    try:

        url = f"https://api.fda.gov/drug/label.json?search=openfda.brand_name:{medicine_name}&limit=1"

        response = requests.get(url)

        data = response.json()

        if "results" not in data:

            return {

                "medicine": medicine_name,

                "usage": "No information found",

                "warning": "Consult pharmacist",

                "confidence": "50%"

            }

        result = data["results"][0]

        purpose = result.get(
            "purpose",
            ["No usage available"]
        )[0]

        warnings = result.get(
            "warnings",
            ["No warnings available"]
        )[0]

        return {

            "medicine": medicine_name,

            "usage": purpose,

            "warning": warnings[:250],

            "confidence": "92%"

        }

    except Exception as e:

        return {

            "medicine": medicine_name,

            "usage": "API Error",

            "warning": str(e),

            "confidence": "0%"

        }