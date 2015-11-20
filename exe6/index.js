// lecture du contenu d'un site web et afficchage dans la console
//
// var http = require('http');
//
// http.get("http://www.triptyk.eu", function(res) {
//   console.log("Got response: " + res.statusCode);
//   res.setEncoding('utf8');
//   res.on('data', function(data){
//     console.log(data);
//     console.log("------------------------------------------------------");
//   });
//   res.on('error', function(err) {
//   console.log(err);
//   });
// });


// cibler les balise a et afficher les liens (contenu dans href)
//
var http = require('http');
var cheerio = require('cheerio');
http.get("http://www.triptyk.eu", function(res) {
  console.log("Got response: " + res.statusCode);
  res.setEncoding('utf8');
  res.on('data', function(data) {
    var $=cheerio.load(data);
    $('a').each(function(i,element){
      console.log(element.attribs.href);
    });
  });
  res.on('error', function(err){
    console.log(err);
  });
});
