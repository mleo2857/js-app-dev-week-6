var inputs = process.argv.slice(2);
var result = inputs.map(word => word[0])
                        .reduce((letters, newLetter) => letters + newLetter, '');

var inputArray = [];


console.log(`[${process.argv.slice(2)}] becomes "${result}"`);
