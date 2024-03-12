function sayAnything(){
    console.log("아무 말이나 하자!");
}
sayAnything();
sayAnything();

function saySomething(smt, number){
    for(let i = 0; i < number; i++){
        console.log(smt);
    }
}
saySomething("열심히 공부중!", 3);
saySomething("취업하고 싶어요ㅠㅠ", 5);

function oddEven(number){
    if(number % 2 == 1){
        return "홀수";
    } else {
        return "짝수";
    }
}

console.log(oddEven(10));
console.log(oddEven(13));