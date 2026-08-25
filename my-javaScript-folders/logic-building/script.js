/* Reverse string
Let I have a string like " khushi " and want to reverse it like this ihsuhk. */
let str = "Khushi";
let revWord = ""
for(i = str.length-1; i>=0; i--) {
  revWord = revWord + "" + str[i]
}
console.log(revWord);

function reverseString(word) {
  let revWord = word.split("").reverse().join("").toLowerCase();
  return revWord;
}
const result = reverseString("Ajay");
console.log(result);
  