function noReturn(){
    console.log("반환하지 않는다, 아무것도!")
}

let result = noReturn();
console.log(result);

function thereIsReturn(){
    console.log("반환한다, 무언가를!");
    return 50;
}

result = thereIsReturn();
console.log(result);