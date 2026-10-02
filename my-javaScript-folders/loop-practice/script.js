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

// Iterative / Dynamic Programming

/*You are given an m x n integer array grid named obstacleGrid. A robot is initially located at the top-left corner, i.e., 
grid[0][0]. The robot tries to move to the bottom-right corner, i.e., grid[m - 1][n - 1]. 
The robot can only move either down or right at any point in time.
An obstacle and space are marked as 1 and 0 respectively in the grid. 
A path that the robot takes cannot include any square that is an obstacle.
Return the number of possible unique paths that the robot can take to reach the bottom-right corner.*/
