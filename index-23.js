setTimeout(function(){
    console.log(1234);
}, 5000)

const butotn = document.querySelector("button");

let interId;
interId = setInterval(function(){
    console.log("Hello");
}, 2000)
console.log(interId);

butotn.addEventListener("click", function(){
    clearInterval(interId);
});