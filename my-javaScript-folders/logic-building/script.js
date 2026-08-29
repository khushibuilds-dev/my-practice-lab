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


function boowho(num) {
  return typeof num === "boolean"
}
/* Your First Target: "Maximum difference between two elements in an Array - JS"
Given an array of integers arr, find the maximum difference between any two elements in the array. In other words, 
you need to find two numbers in the array such that their subtraction gives the largest possible value.
Hint: Think about which two numbers in any array will always give the biggest difference when subtracted. (Largest number - Smallest number!) */

function maximumDifference(num) {
  let max = num[0];
  let min = num[0];
  for(let i = 0; i<num.length; i++) {
    if(num[i]>max ){
      max = num[i];
    } else if(num[i]<min) {
      min = num[i];
    }
  }
  return max - min;
}
const maxdifference = maximumDifference([2, 4, 1, 6, 9, 1]);
console.log(maxdifference);

/* Problem Statement:You are given two integer arrays, arr1 and arr2. 
You need to calculate the sum of all elements for both arrays.
If the sum of arr1 is greater than or equal to the sum of arr2, return true.Otherwise, return false. */

function comparingArraySum(arr1, arr2) {
  let arr1Sum = 0;
  let arr2Sum = 0
  for(let i=0; i<arr1.length; i++) {
    arr1Sum += arr1[i];
  }
  for(let i=0; i<arr2.length; i++) {
    arr2Sum += arr2[i]
  }
  if(arr1Sum > arr2Sum){
    return true;
  }else{
    return false;
  }
}
const arrayComparingSum = comparingArraySum([2,3, 5, 6, 1], [2, 4, 1, 4]);
console.log(arrayComparingSum);
// Find Pair with Target Sum
/* You are given an array of integers nums and an integer target. 
You need to find if there exists any pair of elements whose sum (जोड़) is exactly equal to the target. 
If such a pair exists, return true.If no such pair is found after checking the whole array, return false.
Input: nums = [2, 7, 11, 15], target = 9
Output: true
Explanation: Because nums[0] + nums[1] is 2 + 7 = 9, which equals the target.*/

function pairSum(num, target) {
  let pair = 0;
  for(i=0; i<num.length; i++) {
    for(let j=i+1; j<num.length; j++) {
      if((num[i] + num[j]) === target){
      return true;
      } 
    }
  }
  return false;
} 
const pairSumCom = pairSum([3, 4, 1, 7, 8], 5);
console.log(pairSumCom);

/* You are given a list of products from an online shopping store in the form of a JSON array. 
Your task is to extract only the names of the products whose price is less than 1000 (Price < 1000). */

/*Complete the function GetCheapProducts() to return an array of these product names.
Input Datajson
[
  {"name": "Wireless Mouse", "category": "Electronics", "price": 800},
  {"name": "Gaming Keyboard", "category": "Electronics", "price": 2500},
  {"name": "Water Bottle", "category": "Kitchen", "price": 450},
  {"name": "Leather Wallet", "category": "Fashion", "price": 1200},
  {"name": "Bluetooth Speaker", "category": "Electronics", "price": 950}
]
Expected Output
javascript[ 'Wireless Mouse', 'Water Bottle', 'Bluetooth Speaker' ] */

function GetCheapProducts(data) {
  let cheapProduct = [];
  for(i=0; i<data.length; i++) {
    if(data[i].price< 1000) {
      cheapProduct.push(data[i].name);
    }
  }
  return cheapProduct
}
const cheap = GetCheapProducts([
  {"name": "Wireless Mouse", "category": "Electronics", "price": 800},
  {"name": "Gaming Keyboard", "category": "Electronics", "price": 2500},
  {"name": "Water Bottle", "category": "Kitchen", "price": 450},
  {"name": "Leather Wallet", "category": "Fashion", "price": 1200},
  {"name": "Bluetooth Speaker", "category": "Electronics", "price": 950}
]);
console.log(cheap);
/*  Practice Question: Active Premium Users
You are given a list of users for a streaming app.
This time, you need to find only the names of the users 
who have an active subscription (isActive: true) AND are Premium members (tier: "Premium").
Complete the function GetActivePremiumUsers(users) to return an array of their names.
Input:
[
  {"name": "Alice", "tier": "Premium", "isActive": true},
  {"name": "Bob", "tier": "Free", "isActive": true},
  {"name": "Charlie", "tier": "Premium", "isActive": false},
  {"name": "David", "tier": "Premium", "isActive": true},
  {"name": "Eva", "tier": "Free", "isActive": false}
]
output:
  [ 'Alice', 'David' ] */
function GetActivePremiumUsers(users){
  let activeUsers = [];
  for(let i=0; i<users.length; i++){
  if(users[i].isActive === true && users[i].tier === "Premium"){
    activeUsers.push(users[i].name);
    }
  }
  return activeUsers;
}
const user = GetActivePremiumUsers([
  {"name": "Alice", "tier": "Premium", "isActive": true},
  {"name": "Bob", "tier": "Free", "isActive": true},
  {"name": "Charlie", "tier": "Premium", "isActive": false},
  {"name": "David", "tier": "Premium", "isActive": true},
  {"name": "Eva", "tier": "Free", "isActive": false}
]);
console.log(user);

// Reduce method

//  Ek students ki array se saare marks ka Total Sum nikaalein.

function totalMarks(student){
  return student.reduce ((totalMarks, student) => totalMarks + student.marks, 0); 
}
const stuedent = totalMarks([
  { name: "A", marks: 2 },
  { name: "B", marks: 1 },
  { name: "C", marks: 3 }
]);
console.log(stuedent)

//  Phone number masker  ******5843
function PhoneNumberMasker(number) {
const lastFourDigit = number.slice(6);
const num = `****** ${lastFourDigit}`;
return num;
}
const checker = PhoneNumberMasker("8922885843");
console.log(checker);
// Advenced masker
