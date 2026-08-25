/* Reverse string
Let I have a string like " khushi " and want to reverse it like this ihsuhk. */
let str = "Khushi";
let revWord = ""
let rev = 0;
  for(i = str.length-1; i>=0; i--) {
    revWord = revWord + " " + str[i]
}
  console.log(revWord);
  