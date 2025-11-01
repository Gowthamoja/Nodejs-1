const xlsx = require('xlsx');
const fs = require('fs');

function writeJsonToExcel(jsonFile = 'data.json', outputExcel = 'output.xlsx') {
  if (!fs.existsSync(jsonFile)) {
    console.log(''); 
    return;
  }
  const jsonData = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));
  const worksheet = xlsx.utils.json_to_sheet(jsonData);
  const workbook = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  xlsx.writeFile(workbook, outputExcel);
}

if (require.main === module) {
    writeJsonToExcel();
}

