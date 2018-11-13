let numbers = process.argv.slice(2);

var min = Math.min(...numbers);

console.log(`The minimum of [${process.argv.slice(2)}] is ${min}`);
