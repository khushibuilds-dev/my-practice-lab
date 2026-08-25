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
  