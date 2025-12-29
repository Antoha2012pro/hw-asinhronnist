let countMessage = 0;
const interval = setInterval(() => {
    countMessage++;
    console.log(`Hello World!`);
    if (countMessage === 5) {
        clearInterval(interval);
    }
}, 1000);