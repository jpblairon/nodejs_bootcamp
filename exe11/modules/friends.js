'use strict';
var fs= require('fs'),
_ = require('lodash'); // permet de manipuler facilement les array et les objet (colection)
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
  return(_.find(friends, {'id' : id})); // _ utilise loadash
}

// pour ajouter un id dans le fichier.json
function setFriend(ob){
  if(!ob.id){
    let maxId = _.max(friends, 'id').id;
    let currentId = maxId += 1;
    ob.id = currentId;
    friends.push(ob);
  }
  else {
    let index = _.findIndex(friends, {'id':parseInt(id)})
    if(index !== -1){ // il renvoie -1 quand il ne trouve pas l'index
      friends[index] = ob;
    }
    else {
      console.log({"error":"no index was find"});
    }
  }
  persistData();
  return friends;
}

// pour supprimer un id dans le fichier.json
function deleteFriend(id){
  let index = _.findIndex(friends, {'id':parseInt(id)}));
  if(index !== -1){
    _.pullAt(friends,index)
  }
  else {
    persitData();
    return friends;
}

//API Publique (fait en sorte que les fonction soit accessible en dehord du fichier)
var that = {};
that.getFriend = getFriend;
that.getAllFriends = getAllFriends;
that.setFriend = setFriend;
that.deleteFriend = deleteFriend;
return that;
}

module.exports = friends;
