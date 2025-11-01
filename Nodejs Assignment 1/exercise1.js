const fs = require('fs');
const path = require('path');

function getFileContent(file) {
  const fp = path.join(__dirname, 'lib', file);
  if (!fs.existsSync(fp)) {
    return ''; 
  }
  return fs.readFileSync(fp, 'utf8');
}

console.log(getFileContent('readme.txt'));
console.log(getFileContent('students.csv'));
console.log(getFileContent('index.html'));
