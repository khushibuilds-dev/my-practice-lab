console.log("Helo khushi future tech");
console.log("Khushi singh");
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


const myFavPlaces = {
    north: "Delhi",
    south: "Kerela"
};
console.log(myFavPlaces);
const user = {
    name: "Khushi Singh",
    age: 19,
    profession: "Student"

}
console.log(user);
console.log(user.name);
const details = {
    name: "Khushi",
    age: 19,
    birth: "4th may 2007"
};
const{name, age, bir} = details;
console.log(bir);
 const laptop = {
    brand: "HP",
    ram: "16GB",
    processor: "i7",
    Os: "Windows"
 };
 console.log(laptop.ram);
 const{brand, ram, processor} = laptop;
 console.log(laptop);
 console.log(ram);
 console.log(brand);
 console.log(laptop['price']);
 console.log(ram in laptop, "YE false dega kyuki ye proper nahi dhek raha hai variable dekh rha hai");
 console.log("ram" in laptop);
 console.log(laptop.hasOwnProperty("ram"));


{ 
const ginti = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const[a, b, ...rest] = fruits;
console.log(rest);
console.log(a);
const teacher = {
hindi: "Ankush Sir",
English: "Priyanshu Sir",
Math: "Suraj Sir",
Science: "Jatin sir",
Physics: "Mridiual Sir"
}

 const{hindi, english, ...other} = teacher;
 console.log(other);

 // Knowing something is there in code or not
 // is Chemisrty teacher teacher in the list or not
 console.log("Chemistry" in teacher); // it will return false

 // chemistry teacher in list

 teacher.chemistry= "Jatin Sir";
 console.log(teacher);
 
}