// INSERTION SORT

// [9, 5, 2, 8, 3]

function insertionSortMethod(arr){ 

  for(let i=1; i<arr.length; i++){           // i = 1 ko lete kyuki 0 mtlb akele ki value ho to vo hamesa sort from hi hoti hai isiliye 1 lete hai 
    
    let key = arr[i];                        // yaha ye varible create karke jo i ki value(5) hai usko save kar lete hai kyuki age del ho jayegi 
    
    let j = i-1;                             // yaha per  peeche wali value(9) ko lete hai compare karne ke liye ab do value ho jayegi
    
    while(j>=0 && arr[j] > key ){            // yaha per j wali value jo peeche compare karete hai ki kya ye i se badi hai 
       arr[j + 1] = arr[j];                 // yaha per age i wali value jo choti hai usko dono jagh per ab vahi hogi [9, 9, 2, 8, 3] hoga 
                                            // mtlb ab chhoti wali  value i del  wali value del ho gi lekin varible mai save hai
        
        j--                              // ye karet hai ki peeche agr value hai or to usko bhi check karte raho mtlb loop peeche chalega

    }
    arr[j+1] = key;              // yaha j ki value hai -1 kyuki jo value hoti hai maine usme ek ght jata hai to 0 se -1 ban gyi thi while
                                // while loop ki vajh se iiliye ab -1 + 1 = 0 to key ki value 5 jo save kiya tha yaha per copy kar denge 
  }

    return arr;                                //yahi method repaeat hota rahgea or arr sort ho jayegi
}

// BOBBLE SORT
// [9. 8, 6, 5, 4, 3]
function bobbleSort(arr){
   for(let i=0; i<arr.length; i++){           
     for(let j=0; j<arr.length - 1-i; j++){         // yaha se limit de di hai ki ander wala kab tk chelega jb 
                                                    // 0 per hoga to length se ek ght jaga or khud ko bhi ghta lenge islie ek or -1 kar denge
        if(arr[j] > arr[j+1]){
           let empty = arr[j+1];          // yaha per variable age wali value ko save karke rahka hai value(8) save value hai
           arr[j+1] = arr[j];             // yaha per age wali value ko swap kar diya peeche wali se 
                                          //mltb dono jagh peche wali value ko cpoy kar diya [9, 9, 6, 5, 4, 3] hai
           arr[j] = empty;                 // ab yaha per jo age value kosave karke rakh tha use yaha paste kar diya j mltb ki jb 8 ko [8, 9, 6, 5, 4, 3]
        } 
        // ab phir ye loop dubra chalega ander wala or j ki value 1 ho jayega or aise hi hoga
      }
   }
   return arr;
}

// SecondLargest


// [10, 30, 1, 45, 3, 67]
 function secondLargest(arr){
   let firstLarge = -Infinity          // man lete hai ki ki programmming ka sabe chhota num le liya hai 
   let secondLarge = -Infinity          // yaha per bhi vahi sabse chhota le liya hai kyuki dursa cahiya 

   for(let num of arr){            // ye for of loop hai isi arr ke har ek charcter ko dega
      if(num > firstLarge){
         secondLarge = firstLarge        // phir swap kar diya hai secondLarge ko first se 
         firstLarge = num                // yaha per num ko first ki jagr baita diya hai
      } else if(num > secondLarge || num !== firstLarge){     // ye else if isliye agr vo first wale se na ho lekin second wale ho bada to usko swap keke age wala mil jaye
         secondLarge = num                                                                     // isme ye || wala taki duplicate na mile
      }                         
   }
   return secondLarge;
 }
 console.log(secondLargest([23, 14, 39, 5, 35]));


function getSecondLargest(arr) {
        // code here
       let large = -Infinity
       let secondLarge = -Infinity
    
        for(let i=0; i<arr.length; i++){
            if(arr[i]> large){
                secondLarge = large;
                large = arr[i];
            } else  if(arr[i]>secondLarge && arr[i] !== large){
                secondLarge = arr[i]
            }
        }
   if(secondLarge === -Infinity){
       return -1
   } else{
       return secondLarge;
   }
}

console.log(getSecondLargest([15, 2, 45, 6, 2, 67]));

// Array Leader
function arrayLeaders(arr){
   let leader = [];
   let right = -Infinity
   for(let i=arr.length-1; i>=0; i--){          // yaha peeche se check karegne kyu right mai uske kuch nahi hoga o vo leader hle se hota hai
      if(arr[i]>right){
         leader.push(arr[i]);
         right = arr[i]
      }
   }
   return leader.reverse();
}

console.log(arrayLeaders([20, 10, 2, 3, 4, 5, 3]));

// missingnum

function findMissingNum(arr, N){
  let sum = N *(N+1)/2;               // hame pata hai ki sab sab num ka sum aisa nikal skate hai jo num hai unka sum nikal kar minus kar denge to
                                             // vo jo missing num hai mil jayega
 let currentSum = 0
  for(num of arr){
    currentSum += num;                          
  }
  return sum - currentSum;
}
console.log(findMissingNum([1, 3, 4, 5], 5))

function targetSumIndex(arr, target){
   
    for(let i=0; i<arr.length; i++){
  
      for(let j=0; j<arr.length; j++){
        if(arr[i] + arr[j] === target){
            return [i, j];
        }
      }

    }
    return [];
}

console.log(targetSumIndex([1, 2, 4, 5], 3))


// Moves Zero

function movesZeroLast(arr){
   let movesArr = [];
   for(let i=0; i<arr.length; i++){
      if(arr[i] !== 0){
         movesArr.push(arr[i]);
      } 
   }

   for(let i=0; i<arr.length; i++){
      if(arr[i] === 0){
         movesArr.push(arr[i])
      }
   }
   return movesArr;
}
console.log(movesZeroLast([0, 4, 5, 6, 0, 2, 3]))

// find missing

// input [1,3,4,5,6]  output 2

function findMissing(N, arr){
   let sum = N*(N+1)/2
   let currSum = 0;
   for(let i=0; i<arr.length; i++){
      currSum += arr[i];
   }
   return sum - currSum;
}

console.log(findMissing(6, [1,3,4,5,6]))

// Maximum gold in grid

/* 
You are given a 2-dimensional array of size N x M. 
It represents a gold mine. Each field in this mine contains a positive integer 
which is the amount of gold that cell contains. 
Initially a miner can start from any row in the first column. From a given cell, the miner can move to the

cell diagonally up towards the right to the right to the cell

diagonally down towards the right 

Find out maximum amount of gold which he can collect.
*/

function maximumGold(arr){
   const n = arr.length; 
   if(n===0) return 0;                   // if n =0 return 0;

   const m = arr[0].length;             // column 
   const dp = Array.from({length: n}, () => Array(m).fill(0));                 // this create new array fill with 0

   for(let i=0; i<n; i++){
      dp[i][m-1] = arr[i][m-1];
   }

   // traverse

   for(let col=m-2; col>=0; col--){
      for(let row =0; row<n; row++){
         
         let right = dp[row][col+1];
         let rightUp = (row-1>=0)?dp[row-1][col+1]: 0;
         let rightDown = (row+1 <n)?dp[row+1][col+1]: 0;

         dp[row][col] = arr[row][col] + Math.max(right, rightUp, rightDown);

      }
   }

   let maxGold = 0;

   for(let i=0; i<n; i++){
      maxGold = Math.max(maxGold, dp[i][0]);

   }

return maxGold;

}

console.log(maximumGold([
   [2,3,4],
   [4,3,2],
   [1,2,3]
]));

/*  Problem Statement & Rules
Given an N x M grid of non-negative numbers, find a path from the Top-Left corner (0, 0) to the Bottom-Right corner (N-1, M-1) that minimizes the total sum.
• Allowed Moves: You can only move Right or Down.
• No diagonal moves, no moving left, and no moving up.
*/

function minGold(arr){
   const n = arr.length; 
   if(n===0) return 0;

   const m = arr[0].length;

   const dp = Array.from({length: n}, () => Array(m).fill(0));

   dp[n-1][m-1] = arr[n-1][m-1];
   
   for(let col = m-2; col>=0; col--){
      dp[n-1][col] = arr[n-1][col] + dp[n-1][col+1];
   }

   for(let row = n-2; row>=0; row--){
      dp[row][m-1] = arr[row][m-1] + dp[row+1][m-1];
   }

   // traverse

   for(let row = n-2; row>=0; row--){
      for(let col = m-2; col>=0; col--){

         let right = dp[row][col+1];
         let down = dp[row+1][col];
         
         dp[row][col] = arr[row][col] + Math.min(right, down);

      }
   }

   return dp[0][0];
}

console.log(minGold([
   [2,3,4],
   [5,3,2],
   [4,1,5]
]));


/*  Add Average to Array
Aapko ek function likhna hai jo ek numbers ka array (myArr) lega. 
Aapko us array ka average (ausat) nikalna hai, aur fir us average ko array ke bilkul aakhri mein jodna (add karna) hai. 
End mein aapko woh naya array return karna hai.*/

function addAverageToArray(arr){
   let sum = 0
   for(let i=0; i<arr.length; i++){
     sum += arr[i];
   }
   arr.push(sum/arr.length);
   return arr;
}


/*Unique Paths
You are given two integers m and n, representing the dimensions of a matrix. Your task is to start from the upper left position, i.e. (0, 0) and end up at the bottom right cell, 
i.e. (m - 1, n - 1) with the condition that you can only travel either downwards or rightwards, 
i.e. from (r, c) you can go to either (r + 1, c) or (r, c + 1).*/

function uniquePathCounter(arr){
   const n = arr.length;
   if(n === 0) return 0;
   const m = arr[0].length;
   const dp = Array.from({length: n}, () => Array(m).fill(1));
   
   for(let row = 1; row<n; row++){
      for(let col =1; col<m; col++){
         dp[row][col] = dp[row-1][col] + dp[row][col-1];
      }
   } 
  return dp[n-1][m-1];
}

console.log(uniquePathCounter([
[2, 2],
[1, 1]
]));

// Count aMaze Path

function countMazePath(arr){
   let n = arr.length;
   if(n === 0) return 0;
   let m = arr[0].length;
   let dp = Array.from({length: n}, () => Array(m).fill(0));

   dp[0][0] = 1; 
   
   for(let row = 0; row<n; row++){
      dp[row][0] = dp[row-1][0];
   }

   for(let col = 0; col<m; col++){
      dp[0][col] = dp[0][c0l-1];
   }

  for(let row=1; row<n; row++){
   for(let col=1; col<m; col++){
      dp[row][col] = dp[row-1][col] + dp[row][col-1];
   }
  }
 
  return dp[n-1][m-1];
}

// Climbling Stairs

function climblingStairs(arr){
   
}