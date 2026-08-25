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

 function binartyToDecimal(binaryString){
    return parseInt(binaryString, 2);
 }

 // Superman name modifier 

 function modifyName(heroName) {
    return `Super ${heroName}`;
 }

 // sum of even no. function
  function sumOfEven(n) {
   let sum = 0;
   for (let i = 1; i<=n; i++) {
      if (i%2 === 0) {
         sum = sum + i;
      }
   }
   return sum;
  }
 let n = 10;
  let add = sumOfEven(n);
  console.log(add);
  for (let i=1; i<=15; i++) {
   if(i>=5 && i<=10) {
      console.log(i.toString());
   }
   
  }
  let x = 3;

  for (let i=1; i<=x; i++) {
   let row = " ";
   for(let j=1; j<=x; j++) {
row +="#";
   }
   console.log(row);
  }

  let y = 4;
  for(let i=1; i<=y; i++) {
   let x = " "
   for(let j=1; j<=i; j++) {
     x += j;
   }
   console.log(x);
  }
console.log(
   (function (firstName) {
      return `Hello ${firstName}`; // Value bahar bheji
   })("Khushi") // Yahan function run hua aur value console.log ko mili
);
// Find smallest number in array creat function for it.



function findSmallest(numbers) {
   let smallest = numbers[0];
   for (let i = 0; i<numbers.length; i++) {
      if(numbers[i] <smallest) {
         smallest = numbers[i];
      }
   }
   return smallest;
}
    const res = findSmallest([1,2, 3,6, 8,9]);
      console.log(res);


      // find the index of largest num in array

function findIndexOfLargestNum(numbers) {
   let largest = 0;
   for(let i=0; i< numbers.length; i++) {

   if(numbers[i] > numbers[largest]) {
      largest = i;
   }
   
   }   
   return largest;
}
 let index = findIndexOfLargestNum([4, 16,4, 12, 8, 9]);
 console.log(index);
