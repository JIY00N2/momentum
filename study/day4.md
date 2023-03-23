## day4 #3.0~3.5

### 2023.03.22 Preview

### 1. document.title

```javascript
<title>HI</title>;
document.title; // HI
document.title = "HELLO"; // Hello
```

### 2. document.body

```javascript
<body>...</body>
```

### 3. document.getElmentById("idd") - id가 idd인것을 찾음(특정 id를 찾아서 가져옴)

### 4. innerText

```javascript
// 변수 title에 id가 title인 내용을 삽입
const title = document.getElmentById("title");
// 변수의 값을 변경
title.innerText = "got YOU!";
```

### 5. 자바스크립트를 통해 HTML을 가져올 수 있는 것

#### 1. getElementById() - id, 하나의 값을 반환해줄때 사용

#### 2. getElementsByClassName() - 클래스 네임을 가져옴, array에 할당

#### 3. getElementsByTagName() - name할당 가능 array에 할당

### 6. querySelector를 가장 많이 쓸 것

✔ css selector처럼 사용할 수 있기 때문에 매우 간편하고 유용<br>
✔ class, id전부 사용가능함<br>
✔ 만약에 동일한 class가 있다면 첫번째 element만 return함<br>
✔ 동일한 조건에 있는 것들을 싹다 선택해서 가져오고 싶다면 querySelectorAll를 사용(array 형태)<br>

### 7. element의 내부를 보고 싶으면 console.dir()

### 8. element 중 앞에 on이 붙은 것들은 event임

### 9. eventListener - event를 listen함 → js에게 무슨 event를 listen하고 싶은 지 알려줘야 함

ex ) title.addEventListener("click") : 누군가가 title을 click하는 것을 listen할 거임 → 무언가를 해줘야함

```javascript
const title = document.querySelector("div.hello:first-child h1");
// class hello를 가진 div내부의 h1의 first child

function handleTitleClick() {
  title.style.color = "blue";
}
title.addEventListener("click", handleTitleClick);
//click하면 handleTitleClick이라는 function이 동작하길 원함
//그래서 handle~ 함수에 () 를 안넣은 것임
//즉, js가 대신 실행시켜주길 바라는 것임!
```

### 10. body, head, title등은 document 사용 가능하지만 div등과 같은 나머지 element들은 querySelector나 getElementById로 불러옴

### 2023.03.23 Review

```javascript
const title = document.querySelector("h2");
const superEventHandler = {
  over: function () {
    title.innerText = "The mouse is here!";
    title.style.color = colors[0];
  },
  out: function () {
    title.innerText = "The mouse is gone!";
    title.style.color = colors[1];
  },
  resize: function () {
    title.innerText = "You just resized!";
    title.style.color = colors[2];
  },
  rclick: function () {
    title.innerText = "That was a right click!";
    title.style.color = colors[4];
  },
};
// 마우스가 h2위에 올라갔을때, 내려갔을때, 화면 크기 조정할때, 우클릭할때
title.addEventListener("mouseover", superEventHandler.over);
title.addEventListener("mouseout", superEventHandler.out);
window.addEventListener("resize", superEventHandler.resize);
window.addEventListener("contextmenu", superEventHandler.rclick);
```
