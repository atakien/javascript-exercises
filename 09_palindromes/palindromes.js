const palindromes = function (string) {

const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

const initialClean = string
.toLowerCase()
.split('')
.filter((character) => alphanumerical.includes(character))
.join('');

const reversedString = initialClean.split('').reverse().join('');

return initialClean === reversedString;

};

// Do not edit below this line
module.exports = palindromes;
