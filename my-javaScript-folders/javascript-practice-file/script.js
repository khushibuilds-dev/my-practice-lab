console.log("Khushi", "Welcome to my photo lab!", );
console.log("My Birthday:", 2007);
console.log("user", "Khushi");
console.log("My Age:", 16);
console.log("khushi", 200);
let a = "Khushi Singh";
console.log("My name is;" + " " + a);
let myAge;
console.log("My Age is:", myAge);
let b = true;
console.log("I am a student:", b);
let firstName = "Khushi";
let lastName = "Singh";
console.log("My full name is;" + " " + firstName + " " + lastName);
let x = 5;
x ++;
console.log(x);
let y = 10;
y --;
console.log(y);
let z = 17;
let w = 2;
let quo = Math.floor(z/w);
console.log(quo);
let rem = z%w;
console.log(rem);
console.log(z*w);
console.log(z+w);
let radius = 4;
let pi = 3;
let r = radius;
console.log(pi * r * r);
console.log(2 * pi * r);
let user = true;
if(user){
    console.log("Please sign in to continue");
}
else{
    console.log("Welcome to my photo lab!");
}

let userAge = 20;
if(userAge >=18){
    console.log("You are eligible to vote");
}else{
    console.log("You are not eligible to vote");
}
let inLoggedIn ="true";
if(inLoggedIn === "true"){
    console.log("Welcome to my photo lab!");
}else if(inLoggedIn === "false"){
    console.log("Please sign in to continue");
}else{
    console.log("Please sign in to continue");
}

{
    let letter = "A";
    console.log(letter.charCodeAt(0));
let letter1 = "B";
console.log(letter1.charCodeAt(0));
}

{
    let char = String.fromCharCode(66);
    console.log(char);
   let char1 = String.fromCharCode(67);
   console.log(char1);
}

{
    let phrase = "God is great";
    console.log(phrase.includes("great"));

    let phrase1 = "Khushi Singh - Full Stack Web Developer";
    console.log(phrase1.includes("Mern Stack Web Developer"));
// output: false
}

{
    let phrase2 = "Khushi Singh - Full Stack Web Developer";
    console.log(phrase2.slice(0, 6));
    // output: Khushi

    let phrase3 = "Khushi Singh - Full Stack Web Developer";
    console.log(phrase3.slice(7, 12));
    // output: Singh
}

let phrase4 = "Khushi Singh - Full Stack Web Developer";
let name = phrase4.indexOf("Singh");
console.log(name);
// output: 7
console.log(phrase4.slice(0, name));
// output: Khushi

let phrase5 = "Everyone is welcome to my photo lab! but you have to sign in first to continue than you can enjoy the photo lab!";
console.log(phrase5.indexOf("my"));
// output: 23

console.log(phrase5.indexOf("!"));
// output: 35

console.log(phrase5.slice(23, 35));
// output: my photo lab

//1. Create two variables, myAge and humanDogRatio
//2 Multiply the two together and store the result in myDogAge
//3 Log myDogAge to the console
{
    let myAge = 35;
let humanDogRatio = 7;
let myDogAge = myAge * humanDogRatio;
console.log(myDogAge);
//output 
}

{
    //create a variable, bonusPoint. Initialize it as 50. Increase to 100.
    //Decrease it down to 25, and then fianally increase it ti 70
    let bonusPoints = 50;
    console.log(bonusPoints);
    // output will be 50
    bonusPoints = bonusPoints + 50;
    console.log(bonusPoints);
    //output will be 100
    
}
