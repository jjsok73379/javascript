const h1 = document.querySelector("h1");

const now = new Date();
console.log(now);

const hour = now.getHours();
const minu = now.getMinutes();
const seco = now.getSeconds();

const nowTime = `${hour}:${minu}:${seco}`

h1.textContent = nowTime;

console.log(now.toLocaleString());

/*
const then = new Date(2024, 1, 12);
console.log(then);
*/