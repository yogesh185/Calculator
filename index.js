let btn0 = document.querySelector("#btn0");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");
let btn5 = document.querySelector("#btn5");
let btn6 = document.querySelector("#btn6");
let btn7 = document.querySelector("#btn7");
let btn8 = document.querySelector("#btn8");
let btn9 = document.querySelector("#btn9");
let btnAdd = document.querySelector("#btnAdd");
let btnDiv = document.querySelector("#btnDiv");
let btnSub = document.querySelector("#btnSub");
let btnMul = document.querySelector("#btnMul");
let btnDot = document.querySelector("#btnDot");
let btnEqual = document.querySelector("#btnEqual");
let clearbtn = document.querySelector("#clear");

let btn = document.querySelectorAll(".btn");
let screen = document.querySelector("input");

for (let button of btn) {
    button.addEventListener("click",()=>{
        screen.value += button.textContent;
        console.log(screen.value);
        // console.log(text);
        // console.log(button);
    })
};

clearbtn.addEventListener("click",()=>{
    screen.value = "";
});
