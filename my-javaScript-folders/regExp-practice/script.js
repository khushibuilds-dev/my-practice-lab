function checkWithValidation(str) {
  // Guard clause: crash/error out early if it's not a string
  if (typeof str !== 'string') {
    throw new Error("Input must be a string!");
  }
  
  return /^[A-Z]/.test(str);
}


// check first leetr captial

function checkWithRegex(str) {
  return /^[A-Z]/.test(str);
}

function isValidName(input) {
  const lettersOnly = /^[a-zA-Z ]+$/;
  return lettersOnly.test(input);
}

console.log(isValidName("John Doe"));   // true
console.log(isValidName("John3"));      // false (contains a number)
console.log(isValidName("John!"));      // false (contains a symbol)

const pattern = /^[^0-9]/;
const result = pattern.test("3 apples");   // false;

const pat = /^[abc]/;
const res = pattern.test("banana");

// Extracting Substirng

let s = "The price is $100.";
let reg = new RegExp("\\$\\d+", "g");
console.log(s.match(regex));       // $100;

// Dynamic Pattern creation

let inp = "abc";
let regex = new RegExp(inp, "g");
console.log("abcabcabc".match(regex));  // ['abc', 'abc'];

// Email Validation

let mail = "user@domain.com";
let patt = new RegExp("[a-zA-Z0-9]")



