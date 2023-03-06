const images=["balloon.jpg","blue.jpg","kitten.jpg","moon.jpg","puppy.jpg"];
const chosenImage=images[Math.floor(Math.random()*images.length)];

const bgImage= document.createElement("img");
bgImage.src=`img/${chosenImage}`;
// body에 추가
document.body.appendChild(bgImage);