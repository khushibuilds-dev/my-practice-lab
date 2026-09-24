/*
Task 1: Write a recursive function to find the factorial of a given number n.
Task 2: Write a recursive function to find the n-th Fibonacci number in the sequence (0, 1, 1, 2, 3, 5, 8...).
Task 3: Write a recursive function to calculate the sum of all numbers from 1 to n.
Task 4: Write a recursive function to calculate the power of a number (\[x^{y}\]), where x is the base and y is the exponent.
Task 5: Write a recursive function that takes a number n and prints a countdown from n to 0.
Task 6: Write a recursive function that takes a number n and prints numbers from 1 up to n in increasing order.
Task 7: Write a recursive function to find the Greatest Common Divisor (GCD) of two integers using Euclid's algorithm.
Task 8: Write a recursive function to multiply two positive integers a and b without using the multiplication operator (*).
Task 9: Write a recursive function to count the total number of digits in a given integer n.
Task 10: Write a recursive function to calculate the sum of all digits of a given number n.

*/

// Factorial  of a given n

function recursiveFactorial(n){
    if(n===0){
        return 1;
    }

  
    return n * recursiveFactorial(n-1)
}
console.log(recursiveFactorial(5));

//  n-th Fibonacci number in the sequence (0, 1, 1, 2, 3, 5, 8...).
 let num = 5
function fibonacciRecursive(num){
    if(num === 0){      // yaha bat diya hai hai  ki num = 0  hai to fibonaccio  hai
        return 0
    }
    if(num === 1){   // yaha bat diya hai ki num=1 hai to fibonacio 1 hai
        return 1
    }
    
    return fibonacciRecursive(num - 1) + fibonacciRecursive(num-2);   


}

// sumOfFibonacci(n)

function fibonacciNum(num){
    if(num===0){
        return 0;
    }
    if(num === 1){
        return 1;
    }
    return fibonacciNum(num-1) + fibonacciNum(num-2)
}

function fibonacciSum(n){
    if(n===0){
        return 0;
    }
    return fibonacciNum(n) + fibonacciSum(n-1);     // yaha per pahle n per kon konsa num hai ye jane ke liye vo function chalya hai phir sum wala
}
console.log(fibonacciSum(4))


// Recursive sum 1 to nth num
function recursiveNthSum(n){
    if(n<1){
        return 0;
}
    return n + recursiveNthSum(n-1)

}
let result = recursiveNthSum(3)
console.log(result)

// Task 4: Write a recursive function to calculate the power of a number (\[x^{y}\]), where x is the base and y is the exponent.


function decreaseIncreaseRecursion(num){
    if(num === 0){
        return;
    }

    console.log(num)
    decreaseIncreaseRecursion(num-1)      // isme kya ho raha hai ki har bar recursive laut ja raha hai lekin har baar ka ek line pirntt nahi ho raha hai 
                                          // balki vo call stack mai save ho rahi hai or jb n 3 hai to 3 save hai jb 2 hai to 2 save hai
                                          // or jb recursion function kthm ho gya tb vo jo value save ho rahi thi usko print karn suru kar deta hai
                                          // ye LIFO ke anusar print krta hai mtlb jo baad mai vo phle last first or first last mai 
    console.log(num);
}
console.log(decreaseIncreaseRecursion(4));

                                                    /* isily phle 3 print hau or 3 save ho gya ab 2 print hoga or 2 save hoga recusion ke karn or 1 print hoga or save if ke karn 
                                                    recursion fail ho gya or ab jo last mai the usko phle prinet kiya 1 phir 2 phir 3 ko */

// Count Vowels

function countVowel(str){
    if(str === ""){
        return 0;
    }
  if(str[0]==="a" || str[0]==="e" || str[0] === "i" || str[0]=== "o" || str[0]=== "u"){          // ysha se phle letter chekc hoga
    return 1 + countVowel(str.slice(1))                                      //isme kya hoya phle function chlega ek baar hello letter hoga or phle or 1 se kat gaya last tk ab thik 
                                                                          // ab yaha se str change ho gya hai ab yaha se kya hoga hello se str naya ab e se bange or
                                                                           // phir call hoga nya str banega aise hi hota rahega or har baar 1 mai jhota jayega

   } else{
    return 0 + countVowel(str.slice(1))                                      // vahi same lekin agr vo phelee vlwoe nahi hoga to usenahi count karega
   }

}
console.log(countVowel("khushi"));


function recursiveArrSum(arr){
    if(arr.length === 0){
        return 0;
    }

     return arr[0] + recursiveArrSum(arr.slice(1));           // har baar rucsion hone har baar ka phle elemnt ko peech wale se plus kar skte hai
                                                                 // ye hamesa peech se johdta hai jo last mai aya hai use phir upeer  badta hai
}
console.log(recursiveArrSum([1, 2, 4]))

