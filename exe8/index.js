// recupère l'argument dans l'URL tapée dans le navigateur et affiche la page demandée
// exemple : localhost:3000/page1.html --> affiche page1.html
var http = require("http");
var fs = require('fs');

var routes ={
  "/page1.html":"page1.html",
  "/page2.html":"page2.html",
  "/page3.html":"page3.html"
}

var srv = http.createServer(function(req, res) {
  console.log(req.url);
  if(routes[req.url]){
    res.writeHead(200, {'Content-type': 'text/html'});
    var routeFile = routes[req.url];
    fs.readFile(routeFile,function(err,data){
      if (err) throw err
        res.end(data);
    })
}
else {
  res.writeHead(404);
//  res.end('The url :'+req.url+" don't exist");
  res.writeHead(200, {'Content-type': 'text/html'});
  var routeFile = "page404.html";
  fs.readFile(routeFile,function(err,data){
    if (err) throw err
      res.end(data);
  })

}
});

srv.listen(3000, function(err){
console.log("Server is now listening on port 3000");
});
