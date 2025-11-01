const fs = require('fs');

function generateRandomWord(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let word = '';
  for (let i = 0; i < length; i++) {
    word += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return word;
}

const words = [];
for (let i = 0; i < 100; i++) {
  words.push(generateRandomWord(10));
}

fs.writeFileSync('random-words.txt', words.join('\n'), 'utf8');
