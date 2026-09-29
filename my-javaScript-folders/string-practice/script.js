function areAnagrams(str1, str2) {
  const charCounts = {};
  let len1 = 0;
  let len2 = 0;

  // 1. Count characters in str1 (ignoring spaces manually)
  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    if (char === " ") continue; // skip spaces
    
    // Convert to lowercase manually if it's uppercase
    if (char >= "A" && char <= "Z") {
      char = String.fromCharCode(char.charCodeAt(0) + 32);
    }
    
    charCounts[char] = (charCounts[char] || 0) + 1;
    len1++;
  }

  // 2. Subtract characters in str2
  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];
    if (char === " ") continue; // skip spaces
    
    if (char >= "A" && char <= "Z") {
      char = String.fromCharCode(char.charCodeAt(0) + 32);
    }

    // If the character doesn't exist in str1's count, they aren't anagrams
    if (!charCounts[char]) {
      return false;
    }
    
    charCounts[char]--;
    len2++;
  }

  // 3. If the total number of letters matched doesn't match, return false
  return len1 === len2;
}

// 🧪 Testing the function:
console.log(areAnagrams("listen", "silent"));       // true
console.log(areAnagrams("Dormitory", "dirty room")); // true
console.log(areAnagrams("hello", "world"));         // false


function isAnagram(str1, str2) {
  // Helper function to clean, split, sort, and rejoin a string
  const cleanAndSort = (str) => {
    return str
      .toLowerCase()              // 1. Make lowercase (case-insensitive)
      .replace(/[^a-z0-9]/g, "") // 2. Remove spaces and punctuation using your Regex skills!
      .split("")                  // 3. Turn string into an array of letters
      .sort()                     // 4. Sort letters alphabetically
      .join("");                  // 5. Turn array back into a string
  };

  // Compare the final processed strings
  return cleanAndSort(str1) === cleanAndSort(str2);
}

/*
Word Game
Sara is playing a word game with the following rules:-

The first letter of the word should be the same as the end letter of the previous word
All words should be unique
Given N words which Sara has spoken your task is check if Sara is going to win or lose.

Note: - String will contain only lowercase english letters

Input Format
The first line of input contains a single integer N. The next N line contains a single string each.

Output Format
Return String after removing the Duplicates.
*/

function wordGame(N, myArr){

  let uniquieWord = new Set();

  uniquieWord.add(myArr[0]);

  for(let i=1; i<N; i++){
    let currWord = myArr[i];
    let preWord = myArr[i-1];

    let firstLetter = currWord[0];
    let lastPreLetter = preWord[preWord.length - 1]
    if(firstLetter !== lastPreLetter)  return "Lose";

    if(uniquieWord.has(currWord)) return "Lose";

     uniquieWord.add(currWord);
  }

  return "win"
}

function wordGameStr(str){
  let wordsArr = str.trim().split("\n");
  let n = parseInt(wordsArr[0]);

  let newArr = new Set();
  newArr.add(wordsArr[1]);


  for(let i=2; i<=n; i++){
    let curWord = wordsArr[i];
    let preWord = wordsArr[i-1];

    let firstLetter = curWord[0];
    let lastLetter = preWord[preWord.length-1];

    if(firstLetter !== lastLetter) return "Lose";

    if(newArr.has(curWord)) return "Lose";

    newArr.add(curWord);
  }
  return "Win"
}

let inputWin = `3
apple
egg
goat`;

console.log("String Function Test 1:", wordGameStr(inputWin)); 
// Output: "Win"

let inputLoseChain = `3
apple
egg
cat`;

console.log("String Function Test 2:", wordGameStr(inputLoseChain)); 
// Output: "Lose"

let inputLoseDup = `3
apple
egg
apple`;

console.log("String Function Test 3:", wordGameStr(inputLoseDup)); 
// Output: "Lose"


let myArr1 = ["apple", "egg", "goat"];
console.log("Array Function Test 1:", wordGame(3, myArr1)); 
// Output: "win"

let myArr2 = ["apple", "cat", "tiger"];
console.log("Array Function Test 2:", wordGame(3, myArr2)); 
// Output: "Lose"


/*Find Pair Count
We'll say that a pair in a string is two instances of a character separated by exactly one character. For example, in "AxA", the A's make a pair.
Pairs can overlap. For example, "AxAxA" contains 3 pairs:
• Two pairs of A (A_A at the start, and A_A at the end)
• One pair of x (x_x in the middle) */

function findPairCount(str){

  if(str.length < 3) return 0;

  if(str[0] === str[2]){
  return 1 + findPairCount(str.slice(1));
  } else {
    return 0 + findPairCount(str.slice(1));
  }

  
}
console.log(findPairCount("axaxaxaxa"));

/*Count "hi"
Given a string, recursively compute the number of times the lowercase string "hi"
appears in the string. Do not use loops.*/

function countHi(str){
  if(str.length <=1) return 0;

  if(str[0] === 'h' && str[1] === 'i'){
    return 1 + countHi(str.slice(1));
  } else {
    return 0 + countHi(str.slice(1));
  }
}
console.log(countHi("akdjhikhi hkahi"));

function countHiExpectX(str){
  if(str.length < 2) return 0;

  if(str[0] === "h" && str[1] === "i"){
    return 1 + countHiExpectX(str.slice(2));
  } else {
    return 0 + countHiExpectX(str.slice(2));
  }
}

function minChangeToMakePallindrome(str){
  let change = 0;
  let left = 0;
  let right = str.length -1;
  while(left<right){
    if(str[left] !== str[right]) {
      change++;
    }
    left++;
    right--;
  } 
  return change;
  
}

console.log(minChangeToMakePallindrome("bcbcb"));
console.log(minChangeToMakePallindrome("abc"));

// first non repeating character

function nonRepeatingChracter(str){
  
} 