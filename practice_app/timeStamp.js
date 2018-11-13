var moment = require('moment');

var timeStamp = {
  getTime: function(){
    console.log(moment().format("h:mm:ss a"))
  }
};

module.exports = timeStamp;
