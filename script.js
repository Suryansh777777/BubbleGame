var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").innerHTML = score;
}
function runTimer() {
  var timerinterval = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER!!!<h1>`;
      clearInterval(timerinterval);
    }
  }, 1000);
}
function makeBubble() {
  var clutter = "";
  for (var i = 1; i <= 168; i++) {
    clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}
function getNewhit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}
document.querySelector("#pbtm").addEventListener("click", function (details) {
  // console.log(parseInt(details.target.innerHTML))
  var clickedNum = Number(details.target.innerHTML);
  if (clickedNum === hitrn) {
    increaseScore();
    getNewhit();
    makeBubble();
  } else {
    makeBubble();
  }
});
runTimer();
makeBubble();
getNewhit();
