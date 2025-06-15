// URL of your PDF
const pdfUrl = 'Admit%20Card%20Ssc.pdf';

// PDF.js config
const pdfjsLib = window['pdfjs-dist/build/pdf'];
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://mozilla.github.io/pdf.js/build/pdf.worker.js';

// Load PDF
pdfjsLib.getDocument(pdfUrl).promise.then(pdf => {
  const container = document.getElementById('flipbook');
  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    pdf.getPage(pageNum).then(page => {
      const scale = 1.5;
      const viewport = page.getViewport({ scale: scale });

      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      page.render({
        canvasContext: context,
        viewport: viewport
      });

      container.appendChild(canvas);
    });
  }
});
