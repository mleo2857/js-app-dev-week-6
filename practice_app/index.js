var url = 'http://jsonplaceholder.typicode.com/posts/1';
var dataAccess = require('./dataAccess');
var timeStamp = require('./timeStamp');

setInterval(function(){
  dataAccess.getPost(url).then(function(data){
    console.log(data);
    timeStamp.getTime();
  });
}, 3000);
