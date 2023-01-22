// business logic
function add(number1, number2) {
  const sum = number1 + number2;
  return sum;
}

function subtract(number1,number2)  {
const difference = number1 - number2;
return difference;
}

function multiply(number1,number2)  {
  const product = number1 * number2;
  return product;
}

function divide(number1,number2)  {
  const quotient = number1/number2;
  return quotient;
}



// user interface logic 

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

const sum = add(number1,number2);
const difference = subtract(number1,number2);
const product = multiply(number1,number2);
const quotient = divide(number1,number2);

const outputResultText = "The sum of your calculation is " + sum +"."
+ "The difference of your calculation is" + difference + "." + 
 "The product of your calculation is" + product + "." +
 "The quotient of your calculation is" + quotient + "." 

 window.alert(outputResultText);

