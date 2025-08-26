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

function operate(a, b , c){
  if( c === "+"){ return add(a, b)} 
  else if( c === "-"){ return subtract(a, b) } 
  else if( c === "x"){ return multipy(a, b) } 
  else if( c === "/"){ return divide(a, b) }
  else { return "enter operator"} 
}

function getfirstnumber(num){
 return num
}

function getsecondnumber(num){
  return num
}

function getoperatorsign(operator){
  return operator
}

const number1 = document.querySelector("#number1")
const number2 = document.querySelector("#number2")
const number3 = document.querySelector("#number3")
const number4 = document.querySelector("#number4")
const number5 = document.querySelector("#number5")
const number6 = document.querySelector("#number6")
const number7 = document.querySelector("#number7")
const number8 = document.querySelector("#number8")
const number9 = document.querySelector("#number9")
const number0 = document.querySelector("#number0")


const operators = document.querySelectorAll(".operators")


const display = document.querySelector("#display")

number1.addEventListener("click", function(){
 return  display.innerHTML += 1 ;
})

number2.addEventListener("click", function(){
 return  display.innerHTML += 2 ;
})

number3.addEventListener("click", function(){
 return  display.innerHTML += 3 ;
})

number4.addEventListener("click", function(){
 return  display.innerHTML += 4 ;
})

number5.addEventListener("click", function(){
 return  display.innerHTML += 5 ;
})

number6.addEventListener("click", function(){
 return  display.innerHTML += 6 ;
})

number7.addEventListener("click", function(){
 return  display.innerHTML += 7 ;
})

number8.addEventListener("click", function(){
 return  display.innerHTML += 8 ;
})

number9.addEventListener("click", function(){
 return  display.innerHTML += 9 ;
})

number0.addEventListener("click", function(){
 return  display.innerHTML += 0 ;
})












let firstnumber = firstuserinput
let operator = operatorinput
let secondnumber = seconduserinput

