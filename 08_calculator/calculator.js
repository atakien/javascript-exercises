const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((cum, item) => cum + item, 0)
};

const multiply = function(arr) {
return arr.reduce((prod, item) => prod * item, 1)
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(num) {
	if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
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
