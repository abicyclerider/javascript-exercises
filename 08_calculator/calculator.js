const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  if (array.length) {
  return array.reduce((accumulator, currentValue) => accumulator + currentValue);
  }
  else {return 0;}
};

const multiply = function(numbers) {
  let result = 1;
  for (n of numbers) {
    result *= n;
  }
  return result;
};

const power = function(a, power) {
  return a ** power;
};

const factorial = function(number) {
  if (number === 0) {return 1;}
  let result = number;
  for (let i = number -1; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
