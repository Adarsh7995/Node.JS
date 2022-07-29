const fs = require('fs');
const filepath = 'text.txt';
// Reads a file in a synchronous and blocking way
const data = fs.readFileSync(filepath, {encoding: 'utf8'});
// Prints the content of file
console.log(data);
// This section calculates the sum of numbers from 1 to 10
console.log('Sum of Natural Numbers from 1 to 10')
let sum = 0;
for(let i=1; i<=10; i++){
sum = sum + i;
}
// Prints the sum
console.log('Sum: ', sum);