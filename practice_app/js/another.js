// /app/javascript/another.js

function sayHello(){
  var header = document.querySelector("#greeting");
  var hello = ("<h1> hello world </h1>");
    header.innerHTML = hello;
}

module.exports = sayHello();
