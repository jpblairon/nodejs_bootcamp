// var http = require("http");
//
// var server = http.createServer(function(request, response) {
//   response.writeHead(200, {"Content-Type": "text/html"});
//   response.write("<!DOCTYPE 'html'>");
//   response.write("<html>");
//   response.write("<head>");
//   response.write("<title>Hello World Page</title>");
//   response.write("</head>");
//   response.write("<body>");
//   response.write("Hello World !");
//   response.write("</body>");
//   response.write("</html>");
//   response.end();
// });
//
// server.listen(3000, function(err){
// console.log("Server is now listening on port 3000");
// });



//
var http = require("http");

var routes ={
  "/":"Hello Home",
  "/page1":"Hello Page 1",
  "/page2":"Hello Page 2"
}

var srv = http.createServer(function(req, res) {
  console.log(req.url);
  if(routes[req.url]){
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write("<!DOCTYPE 'html'>");
  res.write("<html>");
  res.write("<head>");
  res.write("<title>"+routes[req.url]+"</title>");
  res.write("</head>");
  res.write("<body>");
  res.write(routes[req.url]);
  res.write("</body>");
  res.write("</html>");
  res.end();
}
else {
  res.writeHead(404);
  res.end('The url :'+req.url+" don't exist");
}
});

srv.listen(3000, function(err){
console.log("Server is now listening on port 3000");
});
