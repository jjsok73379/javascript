const pet = ["강아지", "고양이", "앵무새"];

console.log(pet);

// 배열에 추가
pet.push("햄스터", "거북이");
console.log(pet);

//배열 끝에서부터 제거
pet.pop();
console.log(pet);

// 배열 순서 찾기
let result = pet.indexOf("앵무새");
console.log(result);

/*
해당 숫자 부터 다 지우기
pet.splice(1);

몇 번부터 몇 개 제거한다고 선언
pet.splice(1, 2);
*/

// 몇 번부터 몇 개 지우고 이걸로 대체한다고 선언
pet.splice(0, 3, "호랑이");
console.log(pet);

// 배열의 수 만큼 호출
pet.forEach(function(param){
    console.log(param);
})