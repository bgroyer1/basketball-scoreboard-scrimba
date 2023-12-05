let homeScore = document.getElementById("home-score");
let awayScore = document.getElementById("away-score");
let home1 = document.getElementById("home1")
let home2 = document.getElementById("home2")
let home3 = document.getElementById("home3")
let away1 = document.getElementById("away1")
let away2 = document.getElementById("away2")
let away3 = document.getElementById("away3")
let sum = 0;
let timerEl = document.getElementById("timer-el")


home1.addEventListener("click", () => {
    sum += 1;
    homeScore.textContent = sum;
})

home2.addEventListener("click", () => {
    sum += 2;
    homeScore.textContent = sum;
})

home3.addEventListener("click", () => {
    sum += 3;
    homeScore.textContent = sum;
})

away1.addEventListener("click", () => {
    sum += 1;
    awayScore.textContent = sum;
})

away2.addEventListener("click", () => {
    sum += 2;
    awayScore.textContent = sum;
})

away3.addEventListener("click", () => {
    sum += 3;
    awayScore.textContent = sum;
})