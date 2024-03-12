const textInput = document.getElementById("text");
const button = document.getElementById("button");

button.addEventListener("click", function(){
    textInput.value = "클릭하면 이렇게 바뀝니다";
})

const form = document.querySelector("form");

form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log(form.name.value);
    console.log(form.town.value);
})