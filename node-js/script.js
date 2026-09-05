// console.log("Helo khushi future tech");
// console.log("Khushi singh");
// let fruits = ["Apple", "banana", "pear", "grapes"];
// const [a, b, c] = fruits;
// console.log(a, b, c);

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const [first, second, ...rest] = num;
// console.log(first, second, rest);
// console.log(rest);

// let breaks = ["a", "b"];
// console.log(breaks);

// let pack1 = ["x", "y"];
// let pack2 = ["z"];
// let bigPack = [...pack1, ...pack2];
// console.log(bigPack);

// let favFruits = ["Mango", "Grapes", "bananaa", "pear", "Papaya"];
// console.log(favFruits);
// const myFriendsList = ["Kriti", "Anshika", "Ansh", "Rinki", "Ankita", "Palak", "Sanjana", "etc."];
// console.log(myFriendsList[1]);
// console.log(myFriendsList.indexOf());


// const myFavPlaces = {
//     north: "Delhi",
//     south: "Kerela"
// };
// console.log(myFavPlaces);
// const user = {
//     name: "Khushi Singh",
//     age: 19,
//     profession: "Student"

// }
// console.log(user);
// console.log(user.name);
// const details = {
//     name: "Khushi",
//     age: 19,
//     birth: "4th may 2007"
// };
// const{name, age, bir} = details;
// console.log(bir);
//  const laptop = {
//     brand: "HP",
//     ram: "16GB",
//     processor: "i7",
//     Os: "Windows"
//  };
//  console.log(laptop.ram);
//  const{brand, ram, processor} = laptop;
//  console.log(laptop);
//  console.log(ram);
//  console.log(brand);
//  console.log(laptop['price']);
//  console.log(ram in laptop, "YE false dega kyuki ye proper nahi dhek raha hai variable dekh rha hai");
//  console.log("ram" in laptop);
//  console.log(laptop.hasOwnProperty("ram"));


// { 
// const ginti = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const[a, b, ...rest] = fruits;
// console.log(rest);
// console.log(a);
// const teacher = {
// hindi: "Ankush Sir",
// English: "Priyanshu Sir",
// Math: "Suraj Sir",
// Science: "Jatin sir",
// Physics: "Mridiual Sir"
// }

//  const{hindi, english, ...other} = teacher;
//  console.log(other);

//  // Knowing something is there in code or not
//  // is Chemisrty teacher teacher in the list or not
//  console.log("Chemistry" in teacher); // it will return false

//  // chemistry teacher in list

//  teacher.chemistry= "Jatin Sir";
//  console.log(teacher);

//  console.log("chemistry" in teacher);

//  // find english teacher

//  console.log(teacher.chemistry);
// }



// /* Here i have to build a school manager project wher the school teacher name and subject list
// with the student name and thier grade. */

// Diagonal sum
function diagonalSum(mat){
    let sum = 0;
    for(let i=0; i<mat.length; i++){
        sum += mat[i][i];
    }
    return sum;
}
console.log(diagonalSum([[1, 2, 3], [4, 5, 6], [2, 3, 4]]));
// Row wise Maximum
function rowWiseMax(mat){
    let row = [];

    for(let i=0; i<mat.length; i++){
        let max = mat[i][0];
        for(let j=0; j<mat[i].length; j++){
            if(mat[i][j]>max){
                max = mat[i][j];
            } 
        }
        row.push(max)
    }
    return row;
}
// transpose Matrix
function transposeMatrix(matrix){
    let mat = [];
    for(let i=0; i<matrix[0].length; i++){
        let newRow = []
        for(let j=0; j<matrix.length; j++){
            newRow.push(matrix[j][i]);
        }
        mat.push(newRow);
    }
    return mat;
}
// Faltern 2d Array
/* इनपुट (Input):javascriptconst matrix = [
  ['a', 'b'],
  ['c', 'd'],
  ['e', 'f']
];
आउटपुट (Output): ['a', 'b', 'c', 'd', 'e', 'f'] 

*/

function MatrixArray(arr){
    let array = [];
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[i].length; j++){
            array.push(arr[i][j]);
        }
    }
return array;
}

console.log(MatrixArray([
  ['a', 'b'],
  ['c', 'd'],
  ['e', 'f']
]));

// Sum of all numbers
function SumOfMatrix(mat){
    let sum = 0;
    for(let i=0; i<mat.length; i++){
      for(let j=0; j<mat[i].length; j++){
        sum += mat[i][j];
      }
    }
    return sum;
}
console.log(SumOfMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

// spiral matrix traversal
/* Problem 
Statement: Given an m x n matrix, return all elements of the
matrix in spiral order (starting from top-left, going right, down, left, up, and winding inwards).
Input: matrix = [, [4, 5, 6], [7, 8, 9] ]
Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]  */


// Transpose Matrix 

/* Input
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]; 
Output
 [
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9]
]
 
*/

function matrixTranspose(arr){
  for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr[i].length; j++){
        
    }
  }
}










