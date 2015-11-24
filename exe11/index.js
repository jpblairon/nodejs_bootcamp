'use strict'; // permet d'utiliser le let
let moment = require('moment'),
http = require('http'),
express = require('express'),
bodyParser = require('body-parser'), // parser le corp de la requete
friends = require(__dirname+'/modules/friends');
let myFriends = friends(initApp);
function initApp(){
  let app = express();
  app.use(bodyParser.json());

// Envoie la date et la fin de l'URL demandée + le type d'envois
  app.use(function(req, res, next){
    console.log(moment().format()+'||'+req.url+'||'+req.method+'||'+req.ip);
    next(); // permet de continuer la suite
})

// lis l'URL si '/api/friends' lis le data.json et le renvoie sur le port 80
app.get('/api/friends', function(req, res){
  res.json(myFriends.getAllFriends());
});

// cherche les differents id derrière l'URL et l'affiche
app.get('/api/friends/:id', function(req, res) {
  let id = parseInt(req.params.id);
  res.json(myFriends.getFriend(id));
});

// pour ajouter une donnée au fichier.json
app.post('/api/friends',function(req, res){
  res.json(myFriends.setFriend(req.body));
});
app.put('/api/friends',function(req, res){
  res.json(myFriends.setFriend(req.params.id));
});

// pour effacer des données dans le fichier.JSON
app.delete('/api/friends/:id', function (req, res) {
  res.json(myFriends.deleteFriend(req.body.id));
});

// s'il ne trouve pas l'URL correcte affiche un message erreur
app.use(function(req, res) {
  res.status(404);
  res.send("The page "+ req.url+" don't exist");
});

// Ecoute le port 80
http.createServer(app).listen(80,function(){ // http pour pouvoir eventuellement utiliser plusieur ports
  console.log("Express started on localhost : 80 \n Press CTRL+c to termine")
});
}
