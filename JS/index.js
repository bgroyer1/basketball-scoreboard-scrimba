let homeScore = document.getElementById("home-score");
let awayScore = document.getElementById("away-score");
let home1 = document.getElementById("home1")
let home2 = document.getElementById("home2")
let home3 = document.getElementById("home3")
let away1 = document.getElementById("away1")
let away2 = document.getElementById("away2")
let away3 = document.getElementById("away3")
let homeSum = 0;
let awaySum = 0;
let timerEl = document.getElementById("timer-el")


home1.addEventListener("click", () => {
    homeSum += 1;
    homeScore.textContent = homeSum;
})

home2.addEventListener("click", () => {
    homeSum += 2;
    homeScore.textContent = homeSum;
})

home3.addEventListener("click", () => {
    homeSum += 3;
    homeScore.textContent = homeSum;
})

away1.addEventListener("click", () => {
    awaySum += 1;
    awayScore.textContent = awaySum;
})

away2.addEventListener("click", () => {
    awaySum += 2;
    awayScore.textContent = awaySum;
})

away3.addEventListener("click", () => {
    awaySum += 3;
    awayScore.textContent = awaySum;
})