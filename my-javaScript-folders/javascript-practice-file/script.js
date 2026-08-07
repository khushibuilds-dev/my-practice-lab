console.log("Khushi", "Welcome to my photo lab!", );
console.log("My Birthday:", 2007);
console.log("user", "Khushi");
console.log("My Age:", 16);
console.log("khushi", + 200);
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

