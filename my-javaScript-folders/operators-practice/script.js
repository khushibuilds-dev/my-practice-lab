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


 class Solution {
    gcd(a, b) {
        // code here

        // yaha kya hua hai ki hum hcf ka method hota hai ki do number ka hcf unke remiander or chhote num ka hcf hoga

        
        while(b !== 0){
            let reminader = a % b;
            a = b;
            b = reminader;
            
            
        }
        return a
    }
}

//  Sum of natural cube
 // formula Sum = (n*(n+1)/ 2)  isme kya hua hai ki phele natural num ka sum nikala or phir uska squre kar do unka cube nikal jata hai
 // nicomanus therom hai 
 // pehle saare numbers ko normal add karo, aur fir jo answer aaye uska square kar do, toh woh automatic un sabhi numbers ke cubes ke sum ke barabar ho jata hai!

 // task Given an integer n, calculate the sum of series 13 + 23 + 33 + 43 + … till n-th term.

 function sumOfCubeN(n){
    let sum = n * (n+1)/2;    // sum of n natural num

    return sum * sum
 };
 console.log(sumOfCubeN(5));     //explanation  13 + 23 + 33 + 43 + 53 = 225

 // find median

 class Solution {
    findMedian(arr) {
        // code here.
        
        // agr arr ki length odd hai to median
        // arr[n/2];
        
        // agr length ki length even hai hai median
        // (arr[n/2 - 1] + arr[n/2])/2
        
        // ye formlua tb lag hai jb usko sort kar de accending order mai
        
        let sort = arr.sort((a, b) => a-b)
        
        let n = arr.length;
        
        if(n % 2 !== 0){
            return arr[Math.floor(n/2)]
        } else{
            return (arr[(n/2)] + arr[(n/2)-1])/2;
        };
        
        
    }
}