/* Printing a Concatenated String
OUTPUT: My num is 10
your code here  */

let a = 10;
console.log("My num is " + a);

// Quotient and Remainder Calculation

let x = 1042;
let y = 7;
let quotient = Math.floor(x/y);
let remainder = (x % y);
console.log(quotient, remainder)

// Basic Variable Addition

let k = 10;
let l = 20;
let m = k + l;
console.log(m);

// Printing Messages in Different Languages

console.log("Hello, world");
console.log("Hello, javaScript");

// Multiplication Table Generator for a Given Number

x = 5; 
console.log(x, "x 1 = ", x * 1);
console.log(x, "x 2 = ", x * 2);
console.log(x, "x 3 = ", x * 3);
console.log(x, "x 4 = ", x * 4);
console.log(x, "x 5 = ", x * 5);
console.log(x, "x 6 = ", x * 6);
console.log(x, "x 7 = ", x * 7);
console.log(x, "x 8 = ", x * 8);
console.log(x, "x 9 = ", x * 9);
console.log(x, "x 10 = ", x *10);

//JavaScript Float Variable Reassignment

a = 10.45;
a = 20.55;
console.log(a);

// Average Rating Counting
const rating1 = 10.5;
const rating2 = 12.5;
const rating3 = 12.15;

function calculateAverageRating (){
  const sum = rating1 + rating2 + rating3;

  return Math.floor(sum/3);
}
console.log(calculateAverageRating())
