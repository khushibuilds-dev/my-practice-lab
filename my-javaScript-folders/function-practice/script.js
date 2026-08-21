console.log("increase integer by five");
num = 4
function increaseByFive(num) {
return num += 5;
}
let result = increaseByFive(10);
console.log(result);

 console.log("Second last digit Zero cheker");

 function checkSecondLastDigit(num) {
    let secondLast =  Math.floor(num/10)%10
    /*if(secondLast === 0) {
        return true;
    } else {
        return false;
    }*/
   return secondLast === 0;
 }
let a = checkSecondLastDigit(120);

 console.log(a);

 // task Sum of two integer
 function sumOfTwo(a, b) {
    return a+b;
 }

 // binary to string 
 