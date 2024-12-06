// https://www.freecodecamp.org/news/javascript-date-now-how-to-get-the-current-date-in-javascript/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date


let time = document.getElementById("time");

function currentTime() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  time.textContent = 
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
};

setInterval(currentTime, 1000);
