const fs = require('fs');
const path = require('path');

const distIndex = path.resolve(__dirname, '..', 'dist', 'index.html');
const dist404 = path.resolve(__dirname, '..', 'dist', '404.html');

if (!fs.existsSync(distIndex)) {
  console.error('dist/index.html not found — run `npm run build` first.');
  process.exit(1);
}

fs.copyFileSync(distIndex, dist404);
console.log('Copied dist/index.html -> dist/404.html');
