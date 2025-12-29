const inputEl = document.querySelector('.input');
const btnEl = document.querySelector('.btn');
const resultEl = document.querySelector('.result');

btnEl.onclick = function() {
    const time = inputEl.value;
    resultEl.textContent = 'Чекаємо...';
    setTimeout(function () {
        resultEl.textContent = 'Час вийшов!';
    }, time * 1000);
};