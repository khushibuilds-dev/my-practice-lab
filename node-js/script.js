console.log("Helo khushi future tech");
console.log("Khushi songh");
let fruits = ["Apple", "banana", "pear", "grapes"];
const [a, b, c] = fruits;
console.log(a, b, c);

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [first, second, ...rest] = num;
console.log(first, second, rest);
console.log(rest);

let breaks = ["a", "b"];
console.log(breaks);

let pack1 = ["x", "y"];
let pack2 = ["z"];
let bigPack = [...pack1, ...pack2];
console.log(bigPack);

let favFruits = ["Mango", "Grapes", "bananaa", "pear", "Papaya"];
console.log(favFruits);
const myFriendsList = ["Kriti", "Anshika", "Ansh", "Rinki", "Ankita", "Palak", "Sanjana", "etc."];
console.log(myFriendsList[1]);
console.log(myFriendsList.indexOf());



