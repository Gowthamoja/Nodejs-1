const fs = require('fs');

function addTimestampToLog() {
  const file = 'debug.log';
  if (!fs.existsSync(file)) return;
  const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);
  const updated = lines.map(line => {
    if (!line) {
        return '';
    }
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    const timeStr = `${String(hours).padStart(2,'0')}:${minutes}:${seconds} ${ampm}`;
    const dateStr = `${day}-${month}-${year} ${timeStr}`;
    return `${dateStr} ${line}`;
  });
  fs.writeFileSync(file, updated.join('\n'), 'utf8');
}

if (require.main === module) {
    addTimestampToLog();
}

