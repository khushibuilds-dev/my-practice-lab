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