var fs = require("fs");
var http = require("http");
// || = à (si pas)
var port = process.argv[2] || 3000;
var routes = {
  "/api/friends": "datas/datas.json"
}
var srv = http.createServer(function(req, res) {
  if(routes[req.url]){
  res.writeHead(200, {
    "Content-Type": "text/json"
  });
  var routeFile = routes[req.url];
  fs.readFile(routeFile, function(err, data) {
    if (err) throw err
    res.end(data);
  })
}
else {
  res.writeHead(404);
  res.end('The url :'+req.url+" don't exist");
}
});

srv.listen(3000, function(err){
console.log("Server is now listening on port 3000");
});
