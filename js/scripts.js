// Business Logic
function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

// User Interface Logic
const num1 = parseInt(prompt("Enter a number:"));
const num2 = parseInt(prompt("Enter another number:"));

window.alert(num1 + " added to " + num2 + " = " + add(num1, num2));
window.alert(num1 + " subtracted by " + num2 + " = " + subtract(num1, num2));
window.alert(num1 + " multiplied by " + num2 + " = " + multiply(num1, num2));
window.alert(num1 + " divided by " + num2 + " = " + divide(num1, num2));