let today = new Date();
let minutes = today.getMinutes();
let hrs = today.getHours();
let totalMinutesPassed = minutes + hrs*60;

console.log(totalMinutesPassed);

let date = String(today.getDate()).padStart(2, '0');
let month = String(today.getMonth()+1).padStart(2, '0');
let year = String(today.getFullYear());

console.log(`${date}/${month}/${year}`);

let formattedISODate = `${year}-${month}-${date}`;
console.log(formattedISODate);