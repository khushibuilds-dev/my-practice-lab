// using forEach an arr
// forEach works on arr like first variable is element and 2nd is index.

let myArr = [1,2,31,3,4];
myArr.forEach((item, index) => {
    console.log("Item-", item, "Index-", index);
});

let arr = [2,3,4,6,7,3,2,3];
let sum = 0;
arr.forEach((ele, i) => {
    sum += ele;
});
console.log("Sum of arr is ", sum);

let firendLists = ["Khushi", "Anshika", "Kirti", "Anamika", "Rinki", "Ansh", "Palak", "Prachi", "Sanjana"];

firendLists.forEach((name, i) => {
    console.log(name, "is myforever 😍 bestite");
});

let alphabet = ["a","v","s","e","h","r","b","j","u","k","e","u","q","t","l"];
let num = 1;
alphabet.forEach((item, i) => {
    num += i;
});
console.log(num);

/*Task 1 (filter): Un sabhi users ki list nikaaliye jo adults hain (age 18 ya usse zyada).*/

const users = [
  { id: 1, name: "Rahul", age: 22, premium: true, purchases: [1200, 500, 300] },
  { id: 2, name: "Anjali", age: 17, premium: false, purchases: [400, 150] },
  { id: 3, name: "Amit", age: 29, premium: true, purchases: [5000, 2200] },
  { id: 4, name: "Sneha", age: 25, premium: false, purchases: [] },
  { id: 5, name: "Rohit", age: 15, premium: true, purchases: [100] }
];

function filetradult(users){
   const adults =  users.filter((ele) => {
    if(ele.age >= 18){
       return true;
    } else {
       return false;
      }
    });
    return adults ;
}
console.log(filetradult(users));

function filterusers(users){
    return users.filter((ele) => ele.age <= 18);
};
console.log(filterusers(users));

/*Task 2 (map): Sabhi users ke naam ke aage unka status jodiye. 
Agar premium true hai toh "Rahul (Pro)" aur agar false hai toh "Anjali (User)". 
Ek naya array return kijiye.*/


/*Task 2 (map): Sabhi users ke naam ke aage unka status jodiye. 
Agar premium true hai toh "Rahul (Pro)" aur agar false hai toh "Anjali (User)". 
Ek naya array return kijiye.*/

function mapUsersPremium(users){
    const pro_Users = users.map((data, index) => {
        if(data.premium === true){
            return `${data.name}(Pro);`
        } else {
          return `${data.name}(User)`;
        }
    })
  return pro_Users;
}
console.log(mapUsersPremium(users));

// Professional way....

function mapUsersPremiumClean(users){
  return users.map((data) => {
    return {
      ...data,
      name: data.premium ? `${data.name}(Pro)` : `${data.name}(Users)`
  
    }
  })
}

console.log(mapUsersPremiumClean(users));
/*Task 1: Map ka use karke Prices badhao (.map())
Scenario: Aapke paas ek products ke prices ki array hai. Aapko sabhi products ke daam par 18% GST jodkar ek nayi array banani hai.
• Input Array: const prices = [100, 500, 1200, 50];
• Task: Ek naya array banao jismein har price par 18% tax added ho. */
const prices = [100, 500, 1200, 50];

const pricesWithGST = prices.map(price => price + (price * 0.18));

console.log("Original Prices:", prices);
console.log("Prices with 18% GST:", pricesWithGST); 
// Output: [118, 590, 1416, 3540]


/*Task 3: Total Cart Value calculate karo (.reduce())
Scenario: Ek shopping cart hai jismein multiple items hain. Aapko un sabhi items ka total bill amount calculate karna hai.*/

const cart = [
  { product: "Phone", price: 15000 },
  { product: "Cover", price: 300 },
  { product: "Charger", price: 700 }
];

// .reduce() se sabhi prices ka sum nikalna
const totalBill = cart.reduce((accumulator, currentItem) => {
  return accumulator + currentItem.price;
}, 0); // 0 yahan initial value hai

console.log("Total Bill Amount: ₹" + totalBill); 
// Output: Total Bill Amount: ₹16000


// Custom Higher-Order Function (Callback execution)

// Yeh function ek dusre function (action) ko argument me le raha hai
function repeatTask(n, action) {
  for (let i = 0; i < n; i++) {
    action(i + 1); // Callback function ko call kiya
  }
}

// Usage: Humne ek anonymous function pass kiya jo print karega
repeatTask(3, (times) => {
  console.log(`Hello! Yeh baar number ${times} hai.`);
});
/* Output:
Hello! Yeh baar number 1 hai.
Hello! Yeh baar number 2 hai.
Hello! Yeh baar number 3 hai.
*/

//  Function Returning Function (Greeting Generator)

//  Yeh function ek naya function return karta hai (Closure concept)
function createGreeter(greetingType) {
  return function(name) {
    console.log(`${greetingType}, ${name}!`);
  };
}

// Do alag tarah ke greeters banaye
const morningWelcome = createGreeter("Good Morning");
const eveningWelcome = createGreeter("Good Evening");

// Ab in return hue functions ko use kiya
morningWelcome("Aman");  // Output: Good Morning, Aman!
eveningWelcome("Karan"); // Output: Good Evening, Karan!


const userss = [
  { name: "Rahul", age: 25 },
  { name: "Sneha", age: 16 },
  { name: "Amit", age: 17 },
  { name: "Priya", age: 30 }
];

// Sirf unhein filter karein jinki age 18 ya usse zyada hai
const eligibleVoters = userss.filter(user => user.age >= 18);

console.log(eligibleVoters);
/* Output:
[
  { name: 'Rahul', age: 25 },
  { name: 'Priya', age: 30 }
]
*/







