## day9 #6.0~6.2

### 2023.03.28 Preview

### 1. 배열 객체

```html
<div id="quote"><span></span> // 명언 <span></span> // 작가</div>
```

```javascript
const quotes = [
  {
    quote: "I never dreamed about success, I worked for it",
    author: "Estee Lauder",
  },
  {
    quote: "Do not try to be original, just try to be good.",
    author: "Paul Rand",
  },
  {
    quote: "Do not be afraid to give up the good to go for the great",
    author: "John D. Rockefeller",
  },
  {
    quote:
      "If you cannot fly then run. If you cannot run, then walk. And if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.",
    author: "Martin Luther King Jr.",
  },
  {
    quote:
      "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    author: "Thomas Edison",
  },
  {
    quote:
      "The fastest way to change yourself is to hang out with people who are already the way you want to be",
    author: "REid Hoffman",
  },
  {
    quote:
      "Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you are not doing a tour of gas stations",
    author: "Tim O Reilly",
  },
  {
    quote:
      "Some people dream of success, while other people get up every morning and make it happen",
    author: "Wayne Huizenga",
  },
  {
    quote:
      "The only thing worse than starting something and falling.. is not starting something",
    author: "SEth Godin",
  },
  {
    quote:
      "If you really want to do something, you will find a way. If you do not, you will find an excuse.",
    author: "Jim Rohn",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
```

### 2. Math module

1. Math.random() - 0부터 1사이의 랜덤한 숫자 제공
2. Math.round() - 반올림
3. Math.ceil() - 올림
4. Math.floor() - 내림

ex) 0~9 랜덤한 숫자 얻기 Math.floor(Math.random()\*10);

### 3. image 태그 생성하고 랜덤으로 띄우기

```javascript
const images = [
  "balloon.jpg",
  "blue.jpg",
  "kitten.jpg",
  "moon.jpg",
  "puppy.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); // 이미지 태그 생성 <img>
bgImage.src = `img/${chosenImage}`; // <img src="img/blue.jpg">
document.body.appendChild(bgImage); // appendChild() - body에 html(img 태그)을 마지막에 추가
```

### 3. appendChild() - 마지막에 추가 / prependChild() - 앞에 추가

### 2023.03.30 review

```javascript
const body = document.querySelector("body");
const button = document.querySelector("button");

function colorChanges(event) {
  event.preventDefault();
  const color1 = colors[Math.floor(Math.random() * colors.length)];
  let color2 = colors[Math.floor(Math.random() * colors.length)];
  if (color1 === color2) {
    color2 = colors[Math.floor(Math.random() * colors.length)];
  }
  body.style.backgroundImage = `linear-gradient(0.25turn, ${color1}, ${color2})`;
}

button.addEventListener("click", colorChanges);
```
