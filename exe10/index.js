var fs = require("fs");
var moment = require('moment');
var express = require('express');
var app = express();


// Envoie la date et la fin de l'URL demandée + le type d'envois
app.use(function(req, res, next){
  console.log(moment().format()+'||'+req.url+'||'+req.method);
  next();
});

// lis l'URL si /api/friends lis le data.json et le renvoie sur le port 3000
app.get('/api/friends', function(req, res){
  fs.readFile('datas/datas.json', function(err, data) {
    if (err) throw err;
    res.json(JSON.parse(data.toString('utf8')));
    })
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
