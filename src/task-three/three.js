const startBtn = document.querySelector('.start');
const btnOneEl = document.querySelector('.btnOne');
const btnTwoEl = document.querySelector('.btnTwo');
const timeEl = document.querySelector('.time');
const scoreEl = document.querySelector('.score');
const clicksEl = document.querySelector('.clicks');
let time = 5;
let score = 0;
let clicks = 0;
startBtn.onclick = function () {
    time = 5;
    score = 0;
    clicks = 0;
    timeEl.textContent = time;
    scoreEl.textContent = score;
    clicksEl.textContent = clicks;
    const intervalId = setInterval(function() {
        time -= 1;
        timeEl.textContent = time;
        if (time === 0) {
            clearInterval(intervalId);
            alert('Game over');
        }
    }, 1000);
};
btnOneEl.onclick = btnTwoEl.onclick = function() { // я спитав у чата гпт як краще зробити у сразу двух елементів одну й ту саму функцію
    if (time === 0) return;
    clicks += 1;
    score += 1;
    clicksEl.textContent = clicks;
    scoreEl.textContent = score;
};