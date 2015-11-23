'use strict';
var fs= require('fs'),
_ = require('lodash');
function friends(cb) {
//API PRIVEE
//init data
var friends =null;
fs.readFile('datas/datas.json', function(err, data) {
  if (err) throw err;
  friends = JSON.parse(data.toString('utf8')).friends;
  cb();
});
//
function persistData()
{
  var dataOut =JSON.stringify({"friends": friends});
  console.log(friends);
  fs.writeFile('datas/datas.json', dataOut, function(err){
    if(err) throw err;
  })
}
// pour lire toute la liste du fichier.json
function getAllFriends()
{
  return (friends);
}

// pour lire un id dans la liste du fichier.json
function getFriend(id) {
  return(_.find(friends, {'id' : id}));
}

// pour ajouter un id dans le fichier.json
function setFriend(ob){
  if(!ob.id){
    let maxId = _.max(friends, 'id').id;
    let currentId = maxId += 1;
    ob.id = currentId;
    friends.push(ob);
    console.log(friends);
  }
  persistData();
  return friends;
}

//API Publique
var that = {};
that.getFriend = getFriend;
that.getAllFriends = getAllFriends;
that.setFriend = setFriend;
return that;
}

module.exports = friends;
