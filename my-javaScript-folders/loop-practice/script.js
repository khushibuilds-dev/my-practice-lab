// Print 1-10 in js
for (let i = 1; i<= 10; i++) {
  console.log(i);
}
// Count Even before odd
for (let i = 1; i <= 10; i++){
}

let count = 0;
rl.on('line', (input) => {
  const number = parseInt(input.trim());
  count++;


  if (number % 2 !== 0) {
    console.log(count);
    rl.close();
  }
});

// DP Dynamic Programing
/*🐀 Task 1: Rat in a Maze (All Directions)
Problem Statement:
You are given a square matrix grid of size N × N representing a maze. A rat starts its journey at the top-left corner (0, 0) and wants to reach the bottom-right corner (N-1, N-1) to find its food.
The maze has the following rules:
• A cell value of 1 represents an open path that the rat can walk through.
• A cell value of 0 represents a blocked wall/obstacle that the rat cannot pass.
• The rat can move in four directions: Down ('D'), Right ('R'), Left ('L'), and Up ('U').
• The rat cannot visit the same cell more than once in a single path to avoid getting stuck in an infinite loop.
Objective:
Write a JavaScript function findMazeAllDirection(grid) that finds and returns an array containing all possible unique paths the rat can take from start to finish. The final list of paths must be sorted in alphabetical (lexicographical) order. If no valid path exists, return an empty array [].
Example:
• Input: grid = [[1, 0, 0], [1, 1, 0], [1, 1, 1]]
• Expected Output: ["DDRR", "DRDR"]
*/

function findMazeAllDirection(grid){
  let n = grid.length;
  let result = [];

  if(grid[0][0] === 0 || grid[n-1][n-1] === 0) return [];

  let visited = Array.from({length: n}, () => Array(n).fill(0));

  function helperGoingToCell(row, col, currentPath){
    
   // Base Case if function hit this come out from this function

   if(row === n-1 && col === n-1){
    return result.push(currentPath);
   }

   visited[row][col] = 1;

   // go Down 

   if(row+1 < n && grid[row+1][col] === 1 && visited[row+1][col] === 0){
    helperGoingToCell(row + 1, col, currentPath + "D");
   }

   // go right

   if(col+1<n && grid[row][col+1] === 1 && visited[row][col+1] === 0){
    helperGoingToCell(row, col+1, currentPath + "R");
   }

   //  go left

   if(col-1 >=0 && grid[row][col-1] === 1 && visited[row][col-1] === 0){
    helperGoingToCell(row, col-1, currentPath + "L");
   }
   
   // Go UP
   if(row-1 >=0 && grid[row-1][col] === 1 && visited[row-1][col] === 0){
    helperGoingToCell(row-1, col, currentPath + "U");
   }

   visited[row][col] = 0;
  
  }

  helperGoingToCell(0, 0, "");
  
  result.sort();
  return result;
}


// Collect Gold from all direction with obstacle

/*💰 Task 2: Path with Maximum Gold (Gold Miner)
Problem Statement:
You are given an N × M grid representing a gold mine field. Each cell in the grid contains an integer value representing the amount of gold available in that specific position:
• If the cell value is 0, it means the cell is empty or blocked, and you cannot step on it.
• If the cell value is greater than 0 (e.g., 5, 10), it contains that amount of gold ready to be collected.
The miner must follow these extraction rules:
• The miner can start mining from any cell in the grid that contains gold (> 0).
• From the current cell, the miner can move one step in four directions: Up, Down, Left, or Right.
• The miner cannot visit the same cell more than once during a single mining operation.
• The mining trip ends automatically when there are no more valid adjacent moves left with available gold.
Objective:
Write a JavaScript function maxGoldCollectFromObstcle(grid) that simulates all combinations of pathways to calculate and return the maximum total amount of gold a miner can collect starting from any valid cell.
Example:
• Input: grid = [[0, 6, 0], [5, 8, 7], [0, 9, 0]]
• Expected Output: 24 (Path taken: 9 -> 8 -> 7)
*/

function maxGoldCollectFromObstcle(grid){
  let n = grid.length;
  let m = grid[0].length;
  let maxGold = 0;
  let visited = Array.from({length: n}, () => Array(m).fill(0));

  function findingMaxGoldAllDirection(row, col, currentGold){
     maxGold = Math.max(maxGold, currentGold);            // yaha per agr cure max se jada hai to max curr ho jayega

     visited[row][col] = 1;

     if(row+1 <n && grid[row+1][col] > 0 && visited[row+1][col] === 0){
      findingMaxGoldAllDirection(row+1, col, currentGold + grid[row+1][col]);
     }

     if(row-1>=0 && grid[row-1][col] > 0 && visited[row-1][col] === 0){
      findingMaxGoldAllDirection(row-1, col, currentGold + grid[row-1][col]);
     }

     if(col+1<m && grid[row][col+1] > 0 && visited[row][col+1] === 0){
      findingMaxGoldAllDirection(row, col+1, currentGold+ grid[row][col+1]);
     }

     if(col-1>=0 && grid[row][col-1] > 0 && visited[row][col-1] === 0){
      findingMaxGoldAllDirection( row, col-1, currentGold + grid[row][col-1]);
     }

     visited[row][col] = 0;

  }

  for(let row =0; row<n; row++){
    for(let col = 0; col<m; col++){
      if(grid[row][col] > 0){
        findingMaxGoldAllDirection(row, col, grid[row][col])          
      }
    }
  }

  return maxGold;
}


