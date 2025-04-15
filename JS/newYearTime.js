const newYear = new Date("01/01/2026");
const today = new Date();
let diff = newYear - today;     // left over time in milli sec
let totalDays = Math.floor(diff/(1000*60*60*24));
console.log(totalDays);
