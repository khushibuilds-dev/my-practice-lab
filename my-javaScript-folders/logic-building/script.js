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
