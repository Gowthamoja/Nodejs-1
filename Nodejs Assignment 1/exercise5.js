// Exercise 5
const fs = require('fs');

function textToJson(fileName) {
  if (!fs.existsSync(fileName)) {
    console.log('[]');
    return;
  }
  const lines = fs.readFileSync(fileName, 'utf8').trim().split(/\r?\n/).filter(Boolean);
  const json = lines.map(line => {
    const parts = line.split('|').map(p => p.trim());
    const [name, age, gender, city] = parts;
    return { name: name || '', age: age ? Number(age) : null, gender: gender || '', city: city || '' };
  });
  console.log(JSON.stringify(json, null, 2));
}

if (require.main === module) {
    textToJson('data.txt');
}

module.exports = { textToJson };
