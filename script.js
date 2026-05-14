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

  // Hide old dashboard

  dashboard.classList.add("hidden");

  // Check file selected

  if (imageInput.files.length === 0) {

    alert("Please upload a medicine image first.");

    return;

  }

  // Show loading

  loadingSection.classList.remove("hidden");

  // ======================================
  // BACKEND INTEGRATION
  // ======================================

  const formData = new FormData();

  formData.append("file", imageInput.files[0]);

  try {

    const response = await fetch(

      "http://127.0.0.1:8000/upload",

      {

        method: "POST",

        body: formData

      }

    );

    const data = await response.json();

    // Hide loading

    loadingSection.classList.add("hidden");

    // Handle backend errors

    if (data.error) {

      alert(data.error);

      return;

    }

    // Display backend result

    displayResult(data);

  } catch (error) {

    console.error(error);

    loadingSection.classList.add("hidden");

    alert("Backend connection failed.");

  }

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

  // Smooth scroll

  dashboard.scrollIntoView({

    behavior: "smooth"

  });

}

// ===============================
// OPTIONAL CARD ANIMATIONS
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