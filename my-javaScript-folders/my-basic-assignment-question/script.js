console.log("Solution for question 1");
let a = 10.45;
a = 20.55;
console.log(a);
console.log("Solution for question 2");
console.log("Hello, World.");
console.log("Hello, JavaScript.");
console.log("Solution for question 3");
let b = 10;
console.log("My num is " + b);
console.log("Solution for question 4");
let num = 8;
console.log(num + "x 1 = " + num * 1);
console.log(num + "x 2 = " + num * 2);
console.log(num + "x 3 = " + num * 3);
console.log(num + "x 4 = " + num * 4);
console.log(num + "x 5 = " + num * 5);
console.log(num + "x 6 = " + num * 6);
console.log(num + "x 7 = " + num * 7);
console.log(num + "x 8 = " + num * 8);
console.log(num + "x 9 = " + num * 9);
console.log(num + "x 10 = " + num * 10);

console.log("Solution for question 5");
let x = 1042;
let y = 7;
let quo = Math.floor(x / y);
let rem = a % b;
console.log(quo + " " + rem);

{

// Circle Area and Perimeter CalCulation 
// perimeter of circle 2*pi*r
let pi = 3;
let radius = 4;
console.log("Area of circle: " + pi*radius*radius);
console.log("Preimeter of circle: " + 2*pi*radius );


/*
🟢 Beginner Level (Tasks 1 - 4)

Task 1: Print numbers from 1 to 10 using a for loop.
Task 2: Print numbers in reverse from 10 to 1 using a for loop.
Task 3: Print all even numbers between 1 and 20 (2, 4, 6...).
Task 4: Print all odd numbers between 1 and 20 (1, 3, 5...).

🟡 Intermediate Level (Tasks 5 - 8)

Task 5: Print the multiplication table of 5 (Output format: 5, 10, 15, ... 50).
Task 6: Calculate and print the sum of numbers from 1 to 10 (Answer should be 55).
Task 7: Print all elements of this array using a loop: const fruits = ["apple", "banana", "cherry", "mango"];
Task 8: Print a message "Hello JavaScript" exactly 7 times using a while loop.

🔴 Advanced Level (Tasks 9 - 10)

Task 9: Print numbers from 1 to 30, but for multiples of 5 (5, 10, 15...), print the word "Jump" instead of the number.
Task 10: Count and print how many times the letter "a" appears in the string "javascript is amazing" using a loop.
*/

{ //Task 1: Print numbers from 1 to 10 using a for loop.

for(let i=1; i<=10; i++) {
    console.log(i);
}

}

{ // Task 2: Print numbers in reverse from 10 to 1 using a for loop.

    for(let i=10; i>=1; i--) {
        console.log(i);
    }

}

{
// Task 3: Print all even numbers between 1 and 20 (2, 4, 6...).

for(let i=1; i<=20; i++ ) {
    if(i%2 === 0) {
        console.log(i);
    }
}
}

// task 4:Print all odd numbers between 1 and 20 (1, 3, 5...).

for (let i = 1; i<=20; i+=2) {
    console.log(i);
}

// task 5: Print the multiplication table of 5 (Output format: 5, 10, 15, ... 50).
console.log("task 5");

let num = 5;
for(let i=1; i<=10; i++){
  console.log(num*i);
}
 //Calculate and print the sum of numbers from 1 to 10 

 console.log("task: 6");
 let sum = 0;
 for(let i=1; i<=10; i++) {
    sum = sum + i;
 } 
 console.log(sum);

// Task 7: Print all elements of this array using a loop: const fruits = ["apple", "banana", "cherry", "mango"];












}