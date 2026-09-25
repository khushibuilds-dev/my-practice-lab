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