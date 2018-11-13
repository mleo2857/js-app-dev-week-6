var inputs = process.argv.slice(2);
var result = inputs.map(word => word[0])
                   .reduce((firstLetters, newLetter) => firstLetters += newLetter, '');
console.log(result);
