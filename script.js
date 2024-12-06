// https://www.freecodecamp.org/news/javascript-date-now-how-to-get-the-current-date-in-javascript/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date


let date = new Date();


setInterval(getCurrent, 1000)


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

function getCurrent() {
    document.getElementById("yearText").innerHTML = year;
    document.getElementById("monthText").innerHTML = month;
    document.getElementById("dayText").innerHTML = day;
    document.getElementById("hourText").innerHTML = hours;
    document.getElementById("minuteText").innerHTML = minutes;
    document.getElementById("secondText").innerHTML = seconds;
}




const yearText = document.querySelector("#yearText");
const monthText = document.querySelector("#monthText");
const dayText = document.querySelector("#dayText");


function updateYear() {};

function updateMonth() {};

function updateDay() {};

function updateHour() {};

function updateMinute() {};

function updateSecond() {};
