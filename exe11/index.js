var moment = require('moment'),
express = require('express'),
friends = require(__dirname+'/modules/friends');
let myfriends = friends(initApp);
function initApp(){
  let app = express();

// Envoie la date et la fin de l'URL demandée + le type d'envois
  app.use(function(req, res, next){
    console.log(moment().format()+'||'+req.url+'||'+req.method);
    next();
})
// lis l'URL si '/api/friends' lis le data.json et le renvoie sur le port 3000
app.get('/api/friends', function(req, res){
  res.json(myFriends.getAllFriends());
});
// cherche les differents id derrière l'URL et l'affiche
app.get('/api/friends/:id', function(req, res) {
  let id = parseInt(req.params.id);
  res.json(myFriends.getFriend(id));
});
// s'il ne trouve pas l'URL correcte affiche un message erreur
app.use(function(req, res) {
  res.status(404);
  res.send("The page "+ req.url+" don't exist");
});
// Ecoute le port 3000
app.listen(3000,function(){
console.log("Express started on localhost : 3000 \n Press CTRL+c to termine")
})
