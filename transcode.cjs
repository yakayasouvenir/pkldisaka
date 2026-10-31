const ffmpeg = require('ffmpeg-static');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Transcoding kenangkartu.mp4 to universal H.264 (yuv420p + aac + faststart)...');

const srcKenang = 'vidio/kenangkartu.mp4';
const tempKenang = 'public/vidio/kenangkartu_h264.mp4';
const destKenang = 'public/vidio/kenangkartu.mp4';

// Transcode kenangkartu to H.264 yuv420p with faststart
const cmdKenang = `"${ffmpeg}" -y -i "${srcKenang}" -c:v libx264 -pix_fmt yuv420p -preset medium -crf 23 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:a aac -b:a 128k -movflags +faststart "${tempKenang}"`;
console.log('Running cmd:', cmdKenang);
execSync(cmdKenang, { stdio: 'inherit' });

if (fs.existsSync(tempKenang)) {
  const origSize = fs.statSync(srcKenang).size;
  const newSize = fs.statSync(tempKenang).size;
  console.log(`kenangkartu transcoded: ${Math.round(origSize/1024)} KiB -> ${Math.round(newSize/1024)} KiB`);
  
  // Replace destination with the new H.264 video
  fs.copyFileSync(tempKenang, destKenang);
  fs.unlinkSync(tempKenang);
}

// Check vidioprinting.mp4: if > 15MB, compress to 720p 30fps for smooth web playback
const srcPrinting = 'vidio/vidioprinting.mp4';
const tempPrinting = 'public/vidio/vidioprinting_opt.mp4';
const destPrinting = 'public/vidio/vidioprinting.mp4';

console.log('Optimizing vidioprinting.mp4 (48MB -> lightweight 720p 30fps)...');
const cmdPrinting = `"${ffmpeg}" -y -i "${srcPrinting}" -c:v libx264 -pix_fmt yuv420p -r 30 -preset medium -crf 24 -vf "scale='min(720,iw)':-2" -c:a aac -b:a 128k -movflags +faststart "${tempPrinting}"`;
execSync(cmdPrinting, { stdio: 'inherit' });

if (fs.existsSync(tempPrinting)) {
  const origSize = fs.statSync(srcPrinting).size;
  const newSize = fs.statSync(tempPrinting).size;
  console.log(`vidioprinting optimized: ${Math.round(origSize/1024)} KiB -> ${Math.round(newSize/1024)} KiB`);
  fs.copyFileSync(tempPrinting, destPrinting);
  fs.unlinkSync(tempPrinting);
}

console.log('Transcoding finished successfully!');

