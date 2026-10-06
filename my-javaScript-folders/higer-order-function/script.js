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








