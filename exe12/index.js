'use strict'; // permet d'utiliser le let
let http = require('http'),
fs = require('fs'),
express = require('express'),
morgan = require('morgan');
let app = express();
// LOGGER IN PLACE
let accessLogStream = fs.createWriteStream(`${__dirname}/logs/acces.log`,{flags:'a'})
app.use(morgan('combined',{stream:accessLogStream}));
//USE STATIC ASSETS
app.use(express.static(`${__dirname}/public`));






// Ecoute le port 80
http.createServer(app).listen(80,function(){
  console.log("Express started on localhost : 80 \n Press CTRL+c to termine")
});
