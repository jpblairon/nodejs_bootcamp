// var fs = require("fs");
//
// fs.readdir('fichiers', function (err, data) {
//     if (err) throw err;
//     console.log("There is "+data.length+" files in this folder, they are:")
//     for (var i = 0, l = data.length; i < l; i++) {
//       console.log(data[i]);
//     }
// });


//Version ES5
var fs = require("fs");
fs.readdir('fichiers', function (err, data) {
    if (err) throw err;
    console.log("There is "+data.length+" files in this folder, they are:")
    data.forEach(function(elem) {
      console.log(data[i]);
    });
});


//Version ES6
//"use strict";
//let fs = require("fs"); // let = var (mais valable uniqueeement entre les {})
//fs.readdir('fichiers', function (err, data) {
//    if (err) throw err;
//    console.log(´There is ${data.length+} files in this folder, they are:´)
//    data.forEach(elem => {
//      console.log(elem);
//    });
//});
