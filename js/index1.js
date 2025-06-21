const date = new Date();
const n = date.toDateString();
const time = date.toLocaleTimeString();
document.write('Date: ' + n+"<br>");
document.write('Time: ' + time);
