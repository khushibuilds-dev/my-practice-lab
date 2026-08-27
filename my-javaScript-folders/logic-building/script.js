/* Reverse string
Let I have a string like " khushi " and want to reverse it like this ihsuhk. */
let str = "Khushi";
let revWord = ""
for(let i = str.length-1; i>=0; i--) {
  revWord = revWord + "" + str[i]
}
console.log(revWord);

function reverseString(word) {
  let revWord = word.split("").reverse().join("").toLowerCase();
  return revWord;
}
const result = reverseString("Ajay");
console.log(result);

// Find max number
function maxNumber(nums) {
  let max = nums[0];
  for(let i = 0; i<nums.length; i++ ) {
    if(nums[i] > max) {
      max = nums[i];
    }
  }
  return max;
}
const maxNums = maxNumber([23, 1, 5, 25, 34, 2]);
console.log(maxNums);

let arr = [12, 2, 45, 6, 13, 9, 56];
let max = arr[0];
for(let i = 0; i<arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i];
    }
}
console.log(max);
/* Sum OF Array Except self Mtlb ke har bar sum krna hai sb elemnt ka lekin jaha se sur karna hai use chhode dene hai
jaise [1, 3, 5, 8, 9, 23]; isme 0 index per ho to 1 ko chode kar baki ka sum phir 1 index per ho to
3 ko chhod de aisa hi sb ka sum jo vo elemnt agyega use alg array mai de dna */
function sumOfArray(arr) {
  let sum = 0;
  for(let i=0; i<arr.length; i++) {
    sum += arr[i];
  }
    let empty = [];
  for(let i=0; i<arr.length; i++) {
    empty.push(sum - arr[i]);
  }
  return empty;  

}
const arry= sumOfArray([1, 2, 3, 4]);
console.log(arry);

/* Index of the dominant element
You are given an integer array nums of size n where the largest integer is unique. Your 
task is to determine whether the largest element in the array is at least twice as much as every other number in the array. 
If it is, print the index of the largest element, or print -1 otherwise */

function indexOfDominantElement(nums, n){
  let max = nums[0];
  let maxIndex = 0;
  for(let i=0; i<nums.length; i++) {
    if(nums[i]>max){
      max = nums[i];
      maxIndex = i;
    }
  }
  for(let i = 0; i<nums.length; i++) {
    if(i !== maxIndex  && max < nums[i]*2) {
      return -1;
    }
  }
return maxIndex ; 
  
} 
const resul = indexOfDominantElement([2, 1, 45, 3, 1, 0 ], 6);

console.log(resul);

// last occurence in ushorted array

function lastOccurenceNum(num, target) {
  
  for(let i= num.length-1; i>=0; i--) {                  //loop la pechhe se chalne ke liye
    if(num[i] === target) {
      return i;
    }
  }
  return -1;
}

const last = lastOccurenceNum([2, 4, 2, 1, 4, 2, 4], 2);
console.log(last);

// 4 occurence of the elment in unshorted array

function firstOccurenceIndex(num, target) {
  for(let i = 0; i<num.length; i++) {
    if(num[i] === target){
      return i;
    }
  }
  return -1;
}

function numOccurenceIndex(num, target, OccurenceNo) {
  let count = 0;
  for(let i=0; i<num.length; i++) {
    if(num[i] === target) {
      count++
    }
    if(count === OccurenceNo) {
      return i;
    }
  }
}
const numIndex = numOccurenceIndex([2,4,3,2, 3, 2, 5], 2, 3);
console.log(numIndex);
const firstIndex = firstOccurenceIndex([2, 3, 5, 3, 7, 8], 3);
console.log(firstIndex);

// index of element 
/* You are given an integer array Arr of size N and a number X.
 You need to print all the indexes of the given X in the array, else print -1.

 Note : You have to give output in 1-based indexing.
*/


// boolean checker function
function booleanCheckerFunction(value) {
  return typeof value === "boolean";
}
console.log(booleanCheckerFunction(1));