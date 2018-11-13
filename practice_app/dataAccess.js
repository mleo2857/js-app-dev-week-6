var rp = require('request-promise');

var dataAccess = {
    getPost: function(postId){
    return rp(postId)
  }
};

module.exports = dataAccess;
