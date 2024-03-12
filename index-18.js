const button = document.getElementById("push");
const div = document.getElementById("area");

button.addEventListener('click', function(){
    console.log("div 생성 중!");
    const newDiv = document.createElement("div");

    newDiv.style.backgroundColor = "red";
    newDiv.style.width = "200px";
    newDiv.style.height = "200px";

    div.appendChild(newDiv);
    /*
    append 와 appendChild 의 차이점

    문자열도 추가가 가능하다.
    div.append("히히");

    appendChild 반환 가능
    console.log(div.appendChild(newDiv));
    
    append 반환 불가능
    console.log(div.append(newDiv));
    */
})