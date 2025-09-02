function add(a,b){
return a + b
}

function subtract(a,b){
return  a - b
}

function multiply(a,b){
return  a * b
}

function divide(a,b){
return  a/b
}

function operate(a, b, c){
  a = Number(a)
  b = Number(b)
  if( c === "+"){ return add(a, b)} 
  else if( c === "-"){ return subtract(a, b) } 
  else if( c === "x"){ return multiply(a, b) } 
  else if( c === "/"){ return divide(a, b) }
  else { return add(a,0)} 
}


let firstnumber = document.querySelector("#firstInputValue")
let operatorsign = document.querySelector("#operatorInputValue")
let secondnumber = document.querySelector("#secondInputValue")
const display = document.querySelector("#display")

const numberButtons = document.querySelectorAll(".numberbuttons")
const operators = document.querySelectorAll(".operators")

let currentDisplay = null

numberButtons.forEach(numberButton => numberButton.addEventListener("click",(event)=>{
  if (operatorsign.innerHTML === ""){
  firstnumber.innerHTML += event.target.textContent;
currentDisplay = firstnumber}
  else {
secondnumber.innerHTML += event.target.textContent;}
if (display.innerHTML !=="" && operatorsign.innerHTML ===""){
  display.innerHTML = "";
  currentDisplay = secondnumber
}
}))



operators.forEach(operator => operator.addEventListener("click",(event)=>{
operatorsign.innerHTML = event.target.textContent 
currentDisplay = operatorsign
}))

const answer = document.querySelector("#equaltosign")
answer.addEventListener("click",() => {
      if (display.innerHTML !="") { 
    firstnumber.innerHTML = display.innerHTML };
       if (operatorsign.innerHTML === "/" && secondnumber.innerHTML === "0"
    ){ 
      firstnumber.innerHTML = "";
  secondnumber.innerHTML = "";
  operatorsign.innerHTML = "";
      return display.innerHTML = "That makes no sense"}
currentDisplay = display
  display.innerHTML = operate(firstnumber.innerHTML,secondnumber.innerHTML, operatorsign.innerHTML)
  firstnumber.innerHTML = "";
  secondnumber.innerHTML = "";
  operatorsign.innerHTML = "";
  console.log(firstnumber.innerHTML, secondnumber.innerHTML, operatorsign.innerHTML)
})

const clear = document.querySelector("#clear")
clear.addEventListener("click", () => {
 firstnumber.innerHTML = "";
  secondnumber.innerHTML = "";
  operatorsign.innerHTML = "";
  display.innerHTML = ""; 
})

const remover = document.querySelector("#remover")
const entiredisplay = document.querySelector(".entiredisplay")

remover.addEventListener("click",()=>{
if (currentDisplay){
  currentDisplay.innerHTML = currentDisplay.innerHTML.slice(0,-1)
}
})



























