function add() {
  //the "+" symbol in front is to convert the string into a float number
  let num1 = +document.getElementById("input-el1").value
  let num2 = +document.getElementById("input-el2").value
  let sum = num1 + num2; 
  document.getElementById("sum-el").textContent = "Result: " + sum; 
}

function substract() {
  let num1 = +document.getElementById("input-el1").value
  let num2 = +document.getElementById("input-el2").value
  let sum = num1 - num2; 
  document.getElementById("sum-el").textContent = "Result: " + sum; 
}

function divide() {
  let num1 = +document.getElementById("input-el1").value
  let num2 = +document.getElementById("input-el2").value
  let sum = num1 / num2; 
  document.getElementById("sum-el").textContent = "Result: " + sum; 
}

function multiply() {
  let num1 = +document.getElementById("input-el1").value
  let num2 = +document.getElementById("input-el2").value
  let sum = num1 * num2; 
  document.getElementById("sum-el").textContent = "Result: " + sum; 
}



