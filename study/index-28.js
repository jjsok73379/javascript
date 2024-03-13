const cat = {
    name: "tom",
    color: "gray",
    eat: function(){
        console.log("냠냠 맛있다")
    }
}

console.log(typeof cat);
console.log(cat.name);
console.log(cat["color"]);
cat.eat();
cat.name = "도라에몽";
console.log(cat.name);