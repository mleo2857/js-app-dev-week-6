// console.log('HELLO ES6');
// var name = 'Domenic';
var name = process.argv[2];

function printName(name) {
  return `Hello, ${name}!
Your name lowercased is "${name.toLowerCase()}".`;
};

console.log(printName(name));
