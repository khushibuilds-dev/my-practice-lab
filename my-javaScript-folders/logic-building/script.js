/* Reverse string
Let I have a string like " khushi " and want to reverse it like this ihsuhk. 
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
 Sum OF Array Except self Mtlb ke har bar sum krna hai sb elemnt ka lekin jaha se sur karna hai use chhode dene hai
jaise [1, 3, 5, 8, 9, 23]; isme 0 index per ho to 1 ko chode kar baki ka sum phir 1 index per ho to
3 ko chhod de aisa hi sb ka sum jo vo elemnt agyega use alg array mai de dna 
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

Index of the dominant element
You are given an integer array nums of size n where the largest integer is unique. Your 
task is to determine whether the largest element in the array is at least twice as much as every other number in the array. 
If it is, print the index of the largest element, or print -1 otherwise 

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
 You are given an integer array Arr of size N and a number X.
 You need to print all the indexes of the given X in the array, else print -1.

 Note : You have to give output in 1-based indexing.



// boolean checker function
function booleanCheckerFunction(value) {
  return typeof value === "boolean";
}
console.log(booleanCheckerFunction(1));


function boowho(num) {
  return typeof num === "boolean"
}
Your First Target: "Maximum difference between two elements in an Array - JS"
Given an array of integers arr, find the maximum difference between any two elements in the array. In other words, 
you need to find two numbers in the array such that their subtraction gives the largest possible value.
Hint: Think about which two numbers in any array will always give the biggest difference when subtracted. (Largest number - Smallest number!) 

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

Problem Statement:You are given two integer arrays, arr1 and arr2. 
You need to calculate the sum of all elements for both arrays.
If the sum of arr1 is greater than or equal to the sum of arr2, return true.Otherwise, return false. 

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

Find Pair with Target Sum

You are given an array of integers nums and an integer target. 
You need to find if there exists any pair of elements whose sum (जोड़) is exactly equal to the target. 
If such a pair exists, return true.If no such pair is found after checking the whole array, return false.
Input: nums = [2, 7, 11, 15], target = 9
Output: true
Explanation: Because nums[0] + nums[1] is 2 + 7 = 9, which equals the target.

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

You are given a list of products from an online shopping store in the form of a JSON array. 
Your task is to extract only the names of the products whose price is less than 1000 (Price < 1000). 

Complete the function GetCheapProducts() to return an array of these product names.
Input Datajson
[
  {"name": "Wireless Mouse", "category": "Electronics", "price": 800},
  {"name": "Gaming Keyboard", "category": "Electronics", "price": 2500},
  {"name": "Water Bottle", "category": "Kitchen", "price": 450},
  {"name": "Leather Wallet", "category": "Fashion", "price": 1200},
  {"name": "Bluetooth Speaker", "category": "Electronics", "price": 950}
]
Expected Output
javascript[ 'Wireless Mouse', 'Water Bottle', 'Bluetooth Speaker' ] 

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
Practice Question: Active Premium Users
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
  [ 'Alice', 'David' ] 
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

 Phone number masker  ******5843
function PhoneNumberMasker(number) {
const lastFourDigit = number.slice(6);
const num = `****** ${lastFourDigit}`;
return num;
}
const checker = PhoneNumberMasker("8922885843");
console.log(checker);
// Advanced masker    12345156353746268887663
function amazonATMmasker(number) {
const totalLength = number.length
const lastFourDigit = number.slice(totalLength-4);
const startNum = "x".repeat(totalLength-4);
return `${startNum}${lastFourDigit}`;  
}
const atmMasker = amazonATMmasker("12345156353746268887663");

console.log(atmMasker);

function printNumNewLine(value) {
 
  for(let i=0; i<value.length; i++){
     let row = "";
     for(let j=0; j<value[i].length; j++){
      row = value[j];
     }
  }
  return value;
}

const test = printNumNewLine(["123445"]);
console.log(test);

dESCENDING Order 
You will get an array with both positive and negative numbers. you need to sort them
in descending order and return the array.
Input: [5, -2, 10, 0, -8]
Expected Output: [10, 5, 0, -2, -8] 

function decendingOrder(arr){
  return arr.sort((a, b) => b-a);
}
const decendingSort = decendingOrder([5, -2, 10, 0, -8]);
console.log(decendingSort);
Question 2: Clean and Sort the Array! 
🎭You are given a mixed array containing both numbers and strings. 
First, filter out the strings so you only have numbers left. 
Then, sort those numbers in ascending order (smallest to largest).
Input: [20, "apple", -5, "banana", 0, 15]Expected Output: [-5, 0, 15, 20] 
function sortAndClean(sortArr){
  let arr = [];
  for(let i=0; i<sortArr.length; i++){
    if(typeof sortArr[i] === "number") {
    arr.push(sortArr[i]);
    }
  }
  return arr.sort((a, b) => a - b);
}
const res = sortAndClean([20, "apple", -5, "banana", 0, 15]);
console.log(res);
// Matrix Print all element 
function matrix(arr) {
  for(let i=0; i<arr.length; i++) {
    for(let j=0; j<arr[i].length; j++) {
      console.log(arr[i][j]);
    }
  }
}
matrix([[10, 20], [30, 40]]);

// Sum of 2d element 
function sumElement(arr) {
  let sum = 0;
  for(let i=0; i<arr.length; i++) {
    for(let j=0; j<arr[i].length; j++) {
      sum += arr[i][j];
    }
  }
  return sum;
}
const sum = sumElement([[10, 20], [30, 40]]);
console.log(sum);
// find max number in 2d array
function maxNumber(arr) {
  let max = arr[0][0];
  for(let i=0; i<arr.length; i++) {
    for(let j=0; j<arr[i].length; j++) {
      if(arr[i][j]>max){
        max = arr[i][j];
      }
    }
  }
  return max;
}
// sum of each row;
function SumArr(arr) {
  let arrEmpty =[];
  for(let i=0; i<arr.length; i++) {
    let sum =0;
    for(let j=0; j<arr[i].length; j++){
      sum += arr[i][j];
    }
    arrEmpty.push(sum);
  }
  return arrEmpty;
}
const eachSum = SumArr([[2, 1, 3], [3, 3, 2]]);
console.log(eachSum);
Goal: Ek function likhna hai jo count karega ki ek specific target character matrix mai kitni baar aaya hai.  

function CountSpecificEle(arr, target){
  let count = 0;
  for(let i=0; i<arr.length; i++) {
    for(let j=0; j<arr[i].length; j++){
      if(arr[i][j] === target){
        count++
      }
    }
 }
return count; 
}
const specific = CountSpecificEle([[2, 1, 3], [3, 3, 2]], 2);
console.log(specific);

// Digonal Difference
Given a square matrix (same number of rows and columns), 
calculate the absolute difference between the sums of its two diagonals:
Primary Diagonal: Top-left to bottom-right.
Secondary Diagonal: Top-right to bottom-left.Example Matrix: 
// Prrimary Diogonal Sum

// Note Diogonal ka mtlb hota hai ki dono jg mtlb array [0][0] ya 1, 2 kuch bhi ho btu same ho to us jag jo bhi value hai vo digalanl ke ander ayegi

function PrimaryDigonalSum (arr){
  let sum = 0;
  for(let i=0; i<arr.length; i++) {
    sum += arr[i][i];
  }
return sum;  
}
const value = PrimaryDigonalSum([[2, 3, 1], [3, 4, 5]])
console.log(value);

// Secondary Dioganal sum

//mtlb peeche se trichi line
function SecondaryDiagonalSum(arr) {
  let sum = 0;
  for(let i=0; i<arr.length; i++){
    sum += arr[i][arr.length-1-i];
  }
  return sum;
}
const diagonalSum = SecondaryDiagonalSum([
  [2, 3,  5], 
  [1, 3, 6],
  [1, 2, 6]
]);
console.log(diagonalSum);
Diagonal difference means both primary and secondry ko alg alg add kakru phir dono ka ghta do 
function DiagonalDifference(arr){
  let primaryDiagonalSum = 0;
  let secondaryDiagonalSum = 0;
  for(let i = 0; i<arr.length; i++) {
    primaryDiagonalSum += arr[i][i];
    secondaryDiagonalSum += arr[i][arr.length -1 - i];
  }
  return primaryDiagonalSum - secondaryDiagonalSum;
}
const diagonal = DiagonalDifference([[1, 2, 4,], [1, 4, 6], [2, 4, 5]]);
console.log(diagonal);

// Print column wise
function ColumnWisePrint(arr) {
  for(let i=0; i<arr[0].length; i++){
    for(let j=0; j<arr.length; j++){
      return arr[j][i];
    }
  }
}
const prinaam = ColumnWisePrint([[1, 2, 3], [2, 4, 3]]);
console.log(prinaam);

// Primary diagonal sum 
function primaryDiagonalSum(arr){
  let sum = 0;
  for(let i=0; i<arr.length; i++){
    sum += arr[i][i];
  }
  return sum;
}
const primarySum = primaryDiagonalSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(primarySum);

// secondary diagonal sum
function secondaryDiagonalSum(arr){
  let sum = 0; 
  for(let i=0; i<arr.length; i++){
     sum += arr[i][arr.length-1-i];
  }
  return sum;
}
const secondarySum = secondaryDiagonalSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(secondarySum);

// Diagonal Sum;
function diagonalSumsecondary(arr){
  let primarySum = 0;
  let seceondarySum = 0;
  for(let i=0; i<arr.length; i++){
    primarySum += arr[i][i];
    seceondarySum += arr[i][arr.length -1 -i];
}
return primarySum + seceondarySum;
}
Email Masker task
function emailMasker(email){
  const  domain = email.split("@");
  const username = domain[0];
  const firstletter = username[0];
  const lastletter = username[username.length -1];
  const star = "*".repeat(username .length -2);
  return `${firstletter}${star}${lastletter}@${domain[1]}`;
}
const email = emailMasker("khu4656@gmail.com");
console.log(email);
// toeplize matrix
function toeplizeMatrix(arr){
  for(let i=1; i<arr.length; i++){
    for(let j=1; j<arr[i].length; j++){
      if(arr[i][j] !== arr[i-1][j-1]){
        return false;
      } 
    }
  }
  return true;
}
const toeplize = toeplizeMatrix([[1, 2, 3], [4, 1, 2], [5, 4, 1]]);
console.log(toeplize);

// reverse array
function reverseArray(arr){
  return arr.reverse();
}
function maxAndMin(arr){
return [Math.max(...arr), Math.min(...arr)];
}
// Task Clean the menu
Problem Statement: You are given an array of food items that contains duplicate items and invalid values like null or undefined. 
Write a JavaScript function to clean this array so that the output contains only unique and valid food items.
Input: ["Samose", "Momos", null, "Burgers", "Momos", undefined, "Samose", "Pizza"]
Expected 
Output: ["Samose", "Momos", "Burgers", "Pizza"] 
function cleanMenu(arr){
 let cleanArr = [];
 for(let i=0; i<arr.length; i++){
  if(arr[i] !== null && arr[i] !== undefined && !cleanArr.includes(arr[i])){
    cleanArr.push(arr[i]);
  }
 }
 return cleanArr;
}
const clean = cleanMenu(["Samose", "Momos", null, "Burgers", "Momos", undefined, "Samose", "Pizza"]);
console.log(clean);
// Real-World Arrays & Objects 
/*Problem Statement: You are building a shopping cart for an e-commerce website. You are given an array of items added to the cart. 
Each item is an object containing name, price, and quantity.
However, some items have a quantity of 0 (which shouldn't be calculated). 
Write a JavaScript function to calculate the total price of all valid items in the cart. 
javascriptconst cart = [
  { name: "Laptop", price: 50000, quantity: 1 },
  { name: "Mouse", price: 1000, quantity: 0 },
  { name: "Headphones", price: 2000, quantity: 2 },
  { name: "Phone Case", price: 500, quantity: 0 },
  { name: "Keyboard", price: 2500, quantity: 1 }
];
Expected Output: 56500 (Explanation: Laptop (500001) + Headphones (20002) + Keyboard (25001) = 50000 + 4000 + 2500)
function calculteTotalPrice(cart){
  let totalPrice = 0;
  for(let i=0; i<cart.length; i++){
    if(cart[i].quantity > 0){
      totalPrice += cart[i].price * cart[i].quantity;
    }
  }
  return totalPrice;
}
const totalPrice = calculteTotalPrice([{ name: "Laptop", price: 50000, quantity: 1 },
  { name: "Mouse", price: 1000, quantity: 0 },
  { name: "Headphones", price: 2000, quantity: 2 },
  { name: "Phone Case", price: 500, quantity: 0 },
  { name: "Keyboard", price: 2500, quantity: 1 }]);
  console.log(totalPrice);
 2D Arrays & Analytics
Problem Statement: You are creating a school teacher's dashboard.
You are given a 2D array where each row represents a single student's test scores in 3 different subjects. 
Write a JavaScript function that calculates and prints the average score for each student,
and also identifies if any student failed (if their average score is below 40). 

function studentAnalytics(scores) {

  for(let i=0; i<scores.length; i++){
    let scoreSum = 0;
    for(let j=0; j<scores[i].length; j++){
      scoreSum += scores[i][j];
    }
    let avarage = scoreSum / scores[i].length;
     let result = "";
  if(avarage > 40){
    result = "Passed";
  } else {
    result = "Fail";
  }
  
  console.log(`Student ${i + 1} Average: ${avarage.toFixed(2)} - ${result}`);
  }
 
}
studentAnalytics([
[20, 30, 70], 
[50, 40, 55],
[89, 78, 90],
[46, 56, 90]]);

Task: User Search FilterProblem Statement: 
You are building a search bar for a website's dashboard. 
You are given an array of user names and a search query string.
Write a JavaScript function that filters the array and returns only the names that contain the search query. 
The search must be case-insensitive.
javascript
const names = ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown", "Joey"];
const query = "jo"; 


function searchFilterName (arr, filter) {
  let lowerFilter = filter.toLowerCase();
  let matchedName = [];
  for(let i=0; i<arr.length; i++){
    let lowerName = arr[i].toLowerCase();
    if(lowerName.includes(lowerFilter)) {
      matchedName.push(arr[i]);
    }
  }
  return matchedName;
}
const filterName = searchFilterName(["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown", "Joey"], "jo");
console.log(filterName);

tranpose matrix
Problem Statement: Write a JavaScript function to transpose a given 2D matrix. 
Transposing means converting all the rows into columns and vice versa. 
function tranposeMatrix (arr) {
  let matrix = [];
  for(let i=0; i<arr[0].length; i++) {
    let newArr = []
    for(let j=0; j<arr.length; j++){
      newArr.push(arr[j][i]);
    }
    matrix.push(newArr);
  }
  return matrix;
}
const rowIntoColumn = tranposeMatrix([
  [2, 4, 6],
  [5, 8, 9],
  [8, 5, 2]
]);
console.log(rowIntoColumn);
// Fortune teller 
function myFortuneTeller(name){
  let fortune = [
    "Ajj apko ek achhi khbar sunne ko milegi.",
    "apki skal ek gahde se milte hai.", 
    "Tum bhut hoshiyaar ho tum bhut trikki karoge.",
    "tum jo banna chete ho useme bhut kathniye hai lekin prishrm karte raho tum jaruur safl hoge."
  ]
  let randomIndex = Math.floor(Math.random() * fortune.length);
  return `Hello ${name}! ${fortune[randomIndex]}`;
}
const myfoutune = myFortuneTeller("khushi");
console.log(myfoutune);
// Hackthon Fortune teller
function fortuneTeller(name){
  let fortune = ["ye saal apka bhut achha jayga.",
    "apko is saal korbaar mai trakki milegi. ❤️",
    "apko is mahine thoda sambhal kar rahna hoga.",
    "Apki do mhino mai pooch nikla jayegi nahi to jada sochna band kar do.",
    "Agr mummy se maar kahana hai to aaj ghr der se jaye."
  ]
  let color = ["Red", "Blue", "Black", "Green", "Orange", "Purple"];
  let colorIndex = Math.floor(Math.random() * color.length);
  let fortuneIndex = Math.floor(Math.random() * fortune.length);
  return `Hello ${name}! Ajj apka magal color: ${color[colorIndex]} Ajj apka bhagya: ${fortune[fortuneIndex]}`
}
console.log(fortuneTeller("Khuhsi"));

function TranposeMatrix(arr){
  for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr[i].length; j++){
    console.log(arr[i][j]);
    }
  }
}
TranposeMatrix([[2, 4, 5], 
[4, 5, 1],
[3, 7, 9]
])
function snaketranspose(arr){
  let matrix = [];
  for(let i=0; i<arr.length; i++){
    if(i % 2 === 0){
      for(let j=0; j<arr.length; j++){
        matrix.push(arr[i][j]);
      }
    }
    else{
      for(let j=arr[i].length-1; j>=0; j--){
        matrix.push(arr[i][j]);
      }
    }
  }
}

// Column wise snake traversal
function columntraversal(){
  let matrix = [];
  for(let i=0; i<arr.length; i++){
    for(let j=arr[i].length; j>=0; j--){
      matrix.push(arr[j][i]);
    }
  }
}  */

