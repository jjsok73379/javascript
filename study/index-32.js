const twice = ["나연", "사나", "지효", "다현"];

twice.forEach(function(member, index){
    const p = document.createElement("p");
    p.textContent = `${index + 1}번째 멤버 ${member}`;
    document.body.appendChild(p);
});

const result = twice.map(function(member, index){
    return `아름다운 ${member}`;
});

console.log(result);

const res = twice.filter(function(member, index){
    return member === "사나";
});

console.log(res);