const messi = {
    name: "리오넬 메시",
    "age": 34,
    team: "파리 생제르망",
    "nation": "아르헨티나",
    friends: ["아구에로", "수아레즈", "네이마르"]
    /*
    stringify가 함수를 무시한다
    kick: function(){
        console.log("shoot~~")
    }
    */
}

console.log(JSON.stringify(messi));
console.log(typeof JSON.stringify(messi));

// parse는 작은 따옴표가 포함되면 안되고 후행 쉼표가 있으면 안됩니다
const messi2 = `{"name":"리오넬 메시","age":34,"team":"파리 생제르망","nation":"아르헨티나","friends":["아구에로","수아레즈","네이마르"]}`

console.log(messi2);
console.log(JSON.parse(messi2));