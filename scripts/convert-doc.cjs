const fs = require('fs');
const mammoth = require('mammoth');
const path = require('path');

// Ensure image directory exists in public
const imgOutDir = path.join(__dirname, '../public/images/dokumen-pkl');
if (!fs.existsSync(imgOutDir)) {
  fs.mkdirSync(imgOutDir, { recursive: true });
}

let imageIndex = 0;
const options = {
  convertImage: mammoth.images.imgElement(function(image) {
    imageIndex++;
    return image.read("base64").then(function(imageBuffer) {
      const ext = image.contentType.split('/')[1] || 'png';
      const fileName = `doc_img_${imageIndex}.${ext}`;
      const filePath = path.join(imgOutDir, fileName);
      fs.writeFileSync(filePath, Buffer.from(imageBuffer, 'base64'));
      return {
        src: `/images/dokumen-pkl/${fileName}`
      };
    });
  })
};

mammoth.convertToHtml({ path: path.join(__dirname, '../Template_Laporan_PKL_Universal.docx') }, options)
  .then(function(result) {
    const html = result.value;
    const messages = result.messages;
    console.log('Images converted:', imageIndex);
    console.log('HTML length:', html.length);
    fs.writeFileSync(path.join(__dirname, 'converted_doc.html'), html, 'utf8');
    console.log('Converted HTML saved successfully!');
  })
  .catch(function(err) {
    console.error('Error converting docx:', err);
  });
