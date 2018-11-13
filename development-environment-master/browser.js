const button = document.getElementById('button');
const textField = document.getElementById('textField');
button.addEventListener('click', function(event){
  console.log('buttonclick');
  console.log(event);
})

textField.addEventListener('keydown',function(event){
  console.log(event);
  
})
