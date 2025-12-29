const bcgArr = ["red", "blue", "green"]
const boxEl = document.querySelectorAll('.box');
const boxOneEl = document.querySelector('.box-one');
const boxTwoEl = document.querySelector('.box-two');
document.body.style.padding = "0px";
document.body.style.margin = "0px";
boxEl.forEach(item => {
    item.style.backgroundColor = bcgArr[Math.floor(Math.random() * bcgArr.length)];
    item.style.width = "10px";
    item.style.height = "10px";
});
const intervalStyles = setInterval(() => {
    boxOneEl.style.width = String(boxOneEl.offsetWidth + 10) + "px";
    boxTwoEl.style.height = String(boxOneEl.offsetWidth + 10) + "px";
}, 1000);