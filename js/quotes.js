const quotes=[
    {
        quote: "Don't dwell on the past.",
        quoteKr: "과거에 연연하지 마세요."
    },
    {
        quote: "Believe in yourself.",
        quoteKr: "자기 자신을 믿으세요."
    },
    {
        quote: "Seize the day.",
        quoteKr: "오늘을 즐기세요."
    },
    {
        quote: "You only live once.",
        quoteKr: "인생은 한 번 뿐이에요."
    },
    {
        quote: "Love yourself.",
        quoteKr: "자기 자신을 사랑하세요."
    },
    {
        quote: "Life is a journey.",
        quoteKr: "인생은 여정이다."
    },
    {
        quote: "Don't dream, Be it.",
        quoteKr: "꿈만 꾸지 말고 되어라."
    },
    {
        quote: "Life is all about timing.",
        quoteKr: "인생은 타이밍이다."
    },
    {
        quote: "Be brave.",
        quoteKr: "용감해지세요."
    },
    {
        quote: "Time is gold.",
        quoteKr: "시간은 금입니다."
    },

];

const quote = document.querySelector("#quote span:first-child");
const quoteKr = document.querySelector("#quote span:last-child");

// 소수점 버린 함수
// round(1.2)=1, round(0.8)=1, round(0.1)=0 반올림
// ceil(1.2) = 2, ceil(1.0)=1, ceil(0.9)=1 무조건 올림
// floor(1.1) = 1, floor(0.9)=0 무조건 내림
const todaysQuote = (quotes[Math.floor(Math.random()*quotes.length)]);
quote.innerText = todaysQuote.quote;
quoteKr.innerText = todaysQuote.quoteKr;