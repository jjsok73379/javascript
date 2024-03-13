const animal = ["호랑이", "코끼리", "코뿔소", "다람쥐"];

console.log(animal);
console.log(...animal);

const animalPlus = [...animal, "살쾡이", "원숭이"];

console.log(animalPlus);
console.log(animalPlus.length);

function printNames(param1, param2, param3){
    console.log(param1, param2, param3)
}

printNames(...animal);

const person = {
    name: "종찬",
    job: "이것저것",
    ear: function(){
        console.log("밥을 먹습니다 냠냠")
    }
}

const teacher = {
    ...person,
    job: "선생님",
    teach: function(){
        console.log("가르칩니다")
    }
}

console.log(person);
console.log(teacher);

console.log(teacher["job"]);
teacher.teach();