// ===============================
// ELEMENTS
// ===============================

const imageInput = document.getElementById("imageInput");
const fileName = document.getElementById("fileName");

const scanBtn = document.getElementById("scanBtn");

const loadingSection = document.getElementById("loadingSection");

const dashboard = document.getElementById("dashboard");

const medicineName = document.getElementById("medicineName");
const medicineUsage = document.getElementById("medicineUsage");
const medicineWarning = document.getElementById("medicineWarning");
const medicineConfidence = document.getElementById("medicineConfidence");

const confidenceFill = document.getElementById("confidenceFill");

// ===============================
// FILE SELECT
// ===============================

imageInput.addEventListener("change", () => {

  if (imageInput.files.length > 0) {

    fileName.textContent = imageInput.files[0].name;

  } else {

    fileName.textContent = "No image selected";

  }

});

// ===============================
// SCAN BUTTON
// ===============================

scanBtn.addEventListener("click", async () => {

  // Hide previous dashboard
  dashboard.classList.add("hidden");

  // Check image selected
  if (imageInput.files.length === 0) {

    alert("Please upload a medicine image first.");

    return;

  }

  // Show loading
  loadingSection.classList.remove("hidden");

  // ======================================
  // TEMPORARY MOCK DATA
  // ======================================
  // Later replace this with backend API
  // ======================================

  setTimeout(() => {

    // Hide loading
    loadingSection.classList.add("hidden");

    // Fake AI result
    const fakeResult = {

      medicine: "Dolo 650",

      usage: "Used for fever and pain relief",

      warning: "Avoid overdose and follow prescribed dosage",

      confidence: "92%"

    };

    // Display result
    displayResult(fakeResult);

  }, 2500);

});

// ===============================
// DISPLAY RESULT
// ===============================

function displayResult(data) {

  medicineName.textContent = data.medicine;

  medicineUsage.textContent = data.usage;

  medicineWarning.textContent = data.warning;

  medicineConfidence.textContent = data.confidence;

  // Animate confidence bar
  confidenceFill.style.width = data.confidence;

  // Show dashboard
  dashboard.classList.remove("hidden");

  // Smooth scroll to result
  dashboard.scrollIntoView({
    behavior: "smooth"
  });

}

// ===============================
// FUTURE BACKEND INTEGRATION
// ===============================
/*

REPLACE THE MOCK DATA SECTION WITH:

const formData = new FormData();

formData.append("file", imageInput.files[0]);

try {

  const response = await fetch("http://127.0.0.1:8000/upload", {

    method: "POST",

    body: formData

  });

  const data = await response.json();

  loadingSection.classList.add("hidden");

  displayResult(data);

} catch (error) {

  loadingSection.classList.add("hidden");

  alert("Server error. Please try again.");

}

*/

// ===============================
// OPTIONAL SMALL ANIMATIONS
// ===============================

const cards = document.querySelectorAll(
  ".feature-card, .workflow-card, .impact-card, .dashboard-card"
);

cards.forEach((card) => {

  card.addEventListener("mouseenter", () => {

    card.style.transform = "translateY(-10px)";

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform = "translateY(0px)";

  });

});