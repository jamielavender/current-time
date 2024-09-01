// https://www.freecodecamp.org/news/javascript-date-now-how-to-get-the-current-date-in-javascript/


let date = new Date();


let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();



console.log(year);
console.log(month);
console.log(day);
console.log(hours);
console.log(minutes);
console.log(seconds);



const yearText = document.querySelector("#yearText");
const monthText = document.querySelector("#monthText");


function updateYear() {};

function updateMonth() {};

function updateDay() {};

function updateHour() {};

function updateMinute() {};

function updateSecond() {};