const beginning = document.getElementById("beginning");
const callBtn = document.getElementById("call-btn");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const photoDiv = document.getElementById("photo");

const photos = [];
const numOfPhoto = 8;
let photoIndex = 0;
const request = new XMLHttpRequest();
const api = `https://dog.ceo/api/breeds/image/random/${numOfPhoto}`;
let isPushed = false;

request.addEventListener("load", function(){
    const responseJson = JSON.parse(request.responseText);
    responseJson.message.forEach(function(element){
        photos.push(element);
    })
    photoDiv.style.backgroundImage = `url${photos[photoIndex]}`;
})

function callPhotos(){
    request.open("GET", api);
    request.send();
}

callBtn.addEventListener("click", function(){
    if(isPushed){
        return;
    }
    isPushed = true;

    callPhotos();
    setTimeout(function(){
        beginning.classList.remove("beginning");
    }, 1500)
})

prevBtn.addEventListener("click", function(){
    if(photoIndex == 0){
        photoIndex = numOfPhoto - 1;
        photoDiv.style.backgroundImage = `url(${photos[photoIndex]})`;
        return;
    }
    photoIndex -= 1;
    photoDiv.style.backgroundImage = `url(${photos[photoIndex]})`;
})

nextBtn.addEventListener("click", function(){
    if(photoIndex == numOfPhoto - 1){
        photoIndex = 0;
        photoDiv.style.backgroundImage = `url(${photos[photoIndex]})`;
        return;
    }
    photoIndex += 1;
    photoDiv.style.backgroundImage = `url(${photos[photoIndex]})`;
})