const images=["balloon.jpg","darkskies.jpg","star.jpg","moon.jpg","halfmoon.jpg"];
const chosenImage=images[Math.floor(Math.random()*images.length)];

const bgImage= document.createElement("img");
bgImage.src=`img/${chosenImage}`;
// body에 추가
bgImage.classList.add("bgImage");
document.body.appendChild(bgImage);