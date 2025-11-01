const fs = require('fs');
const path = require('path');

function copyFile(fileName, newFile) {
  const src = path.resolve(fileName);
  const dest = path.resolve(newFile);
  if (!fs.existsSync(src)) throw new Error(`Source file not found: ${src}`);
  fs.copyFileSync(src, dest);
}

copyFile('random-words.txt', 'random-words-copy.txt');
