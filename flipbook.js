// flipbook.js

// 👉 Make sure your PDF is in same folder and EXACT name:
const pdfUrl = "Admit Card SSC.pdf";

// ✅ Load PDF in iframe:
document.getElementById("pdf-viewer").src = pdfUrl;

// ✅ Debug log
console.log("Flipbook.js loaded, showing PDF:", pdfUrl);
