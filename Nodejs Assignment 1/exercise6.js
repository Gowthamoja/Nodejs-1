const fs = require('fs');

const users = [
  { name: "Anand", age: 22, gender: 0, city: "Mumbai" },
  { name: "Bihu", age: 17, gender: 1, city: "Pune" },
  { name: "Kiran", age: 25, gender: 0, city: "Delhi" }
];

function writeUsersToFile(output = 'users-info.txt') {
  const lines = users.map(u => `${u.name} | ${u.age} | ${u.gender} | ${u.city}`);
  fs.writeFileSync(output, lines.join('\n'), 'utf8');
}

if (require.main === module) {
    writeUsersToFile();
}


