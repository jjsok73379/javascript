const myName = "종찬";

console.log(myName);

localStorage.setItem("myName", myName);

const myName2 = localStorage.getItem("myName");

alert(myName2);

localStorage.setItem("cat", "고양이");
localStorage.setItem("dog", "강아지");
localStorage.setItem("myName", "이종찬");

localStorage.removeItem("dog");

localStorage.clear();