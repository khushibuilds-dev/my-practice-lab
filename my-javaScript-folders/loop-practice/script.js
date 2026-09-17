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