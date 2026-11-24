const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');
const pdfjsLib = require('pdfjs-dist/legacy/build/pdf.js');

const pdfPath = path.join(__dirname, '../public/Template_Laporan_PKL_Universal.pdf');
const outDir = path.join(__dirname, '../public/images/laporan-pages');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function renderPDFToImages() {
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const loadingTask = pdfjsLib.getDocument({ data });
  const pdfDocument = await loadingTask.promise;
  console.log(`Total Pages: ${pdfDocument.numPages}`);

  const pageImages = [];

  for (let i = 1; i <= pdfDocument.numPages; i++) {
    const page = await pdfDocument.getPage(i);
    // scale 1.75 for crisp high-dpi reading
    const viewport = page.getViewport({ scale: 1.75 });
    const canvas = createCanvas(viewport.width, viewport.height);
    const context = canvas.getContext('2d');

    await page.render({
      canvasContext: context,
      viewport: viewport
    }).promise;

    const fileName = `page_${i}.jpg`;
    const outPath = path.join(outDir, fileName);
    const buffer = canvas.toBuffer('image/jpeg', { quality: 0.9 });
    fs.writeFileSync(outPath, buffer);
    pageImages.push(`/images/laporan-pages/${fileName}`);
    console.log(`Rendered page ${i}/${pdfDocument.numPages}`);
  }

  fs.writeFileSync(path.join(__dirname, 'pdf_pages.json'), JSON.stringify(pageImages, null, 2), 'utf8');
  console.log('Finished rendering all pages to high-res images!');
}

renderPDFToImages().catch(err => {
  console.error('Error rendering PDF:', err);
});
