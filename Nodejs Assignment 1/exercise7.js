const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');

function readExcelToJson(file = 'marks.xlsx') {
  const fp = path.resolve(file);
  if (!fs.existsSync(fp)) {
    const jsonFallback = 'marks.json';
    if (fs.existsSync(jsonFallback)) {
      const data = JSON.parse(fs.readFileSync(jsonFallback, 'utf8'));
      console.log(JSON.stringify(data, null, 2));
      return data;
    }
    console.log('[]');
    return [];
  }
  const workbook = xlsx.readFile(fp);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = xlsx.utils.sheet_to_json(sheet);
  console.log(JSON.stringify(data, null, 2));
  return data;
}

if (require.main === module) {
    readExcelToJson();
}

