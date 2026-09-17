// Temperature Conversion
let c = 25;
console.log(c* (9/5)+ 32); 

// Agent Binod

let agentName = "Binod"
console.log("Hi my name is Agent " + agentName);

// Basic Arithmetic Operations

let a = 5;
let b = 10;
console.log(a+b);
console.log(a-b);
console.log(a*b);
let quotient = Math.floor(a/b);
console.log(quotient);   // this will give quotient of the num
console.log(a%b);        // this will give remaineder

// Numbers  of days

let month = 3;
let m = Number(month);
let day = 0;
if(m === 2){
  day = 28;
} else if( m === 4 || m === 6 || m === 9 || m === 11){
  day = 30;
} else{
  day = 31;
}
console.log(day);

// Equal Hieght

let result = false;

if (h1 === h2) {
  result = true; 
} else if ((h1 < h2 && v1 > v2) || (h2 < h1 && v2 > v1)) 
  {
    if ((h1 - h2) % (v2 - v1) === 0) {
        result = true;
    }
  }
// Which angled triangle

let largest = Math.max(a, b, c);
let sumSquares = (a * a) + (b * b) + (c * c);
let twiceLargestSquare = 2 * (largest * largest);
if (twiceLargestSquare < sumSquares) {
  console.log(1);
} else if (twiceLargestSquare === sumSquares) {
  console.log(2);
} else {
  console.log(3);
}
   
//  character case indentifier
const ch = "B";
if (ch >= 'A' && ch <='Z'){
  console.log(1);
} else if (ch >= 'a' && ch <='z'){
  console.log(0);
} else{
  console.log(-1);
}

// Age Condition Check

let age = 28;
if(age == 28){
  console.log("i am young");
} else {
  console.log("i am not young");
}

// switch case
switch(parseInt (n)){
  case 28:
  console.log("i am young");
  break;
  default:
  console.log("i am not young");
  break;
}

// Leap Year check
if (year % 400 === 0){
  console.log(1);
} else if(year % 100 === 0) {
  console.log(0);
} else if (year % 4 == 0){
  console.log(1);
} else {
  console.log(0)
}

// Number Importance Classification

let N = input; 
if(N<30){
  console.log("less important");
}else{
  console.log("more important");
}

// Divisibility Check

if(n%6===0){
  console.log("Divisible");
  }else{
  console.log("Not divisible");
}

// Odd or Simple Integer Pair

if (a % 2 !== 0 && b % 2 !== 0){
  console.log("we are odd");
} else {
  console.log("we are simple");
}

// Student grade cclafication
if (n>90) {
  console.log("Excellent");
} else if (n>80 && n<=90) {
  console.log("Good");
} else if (n>70 && n<=80) {
  console.log("Fair");
}else if (n>60 && n<=70) {
console.log("Meets Expectations");
} else {
  console.log("Below Expectations");
}
  