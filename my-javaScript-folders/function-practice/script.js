console.log("increase integer by five");
num = 4
function increaseByFive(num) {
return num += 5;
}

 console.log("Second last digit Zero cheker");

 function checkSecondLastDigit(num) {
    let secondLast =  Math.floor(num/10)%10
    if(secondLast === 0) {
        return true;
    } else {
        return false;
    }
 }

 console.log("")