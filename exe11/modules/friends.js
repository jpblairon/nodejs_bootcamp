var fs= require('fs'),
- = require('loadash');
function friends(cb) {
//API PRIVEE
//init data
var friends =null;
fs.readFile('datas/datas.json', function(err, data) {
  if (err) throw err;
  friends = JSON.parse(data.toString('utf8')).friends;
  cb();
});

function getAllFriends()
{
  return (friends);
}
function getAllFriend(id) {
  return(_.find(friends, {'id' : id}));
}


//API Publique
var that = {};
that.getFriend = getFriend;
that.getAllFriends = getAllFriends;
return that;
}

module.exports = friends;
