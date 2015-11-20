// recupère les infos derriere la commande node index.js
// exemple: node index.js toto,titi,tutu,tete
// et les écris dans un fichier list.txt les uns endessous des autres
// et ajoutte à la suite à fois que l'on lance la commande

// ma version
// var fs = require("fs");
// var args = process.argv.slice(2);
//
// args.forEach(function(val, index, array) {
//   var name = val + '\n';
//   console.log(name);
//   if (index >=2);
//     fs.appendFile('list.txt', name, function (err) {
//       if (err) throw err;
//       console.log('data was appended to file!');
//   });
// });


// version prof (à preferer) car test si fichier existe ou pas au depart
// et si on à mis les arguments.
var fs = require('fs');
var utils = require('../modules/utils');
var args = process.argv;
var elements = null;
(args[2])? elements = args[2].split(','):elements=[];
fs.stat('list.txt', function(err, stat) {
  if (err == null) {
    console.log('File exist');
    updateFile();
  }
  else if (err.code == 'ENOENT') {
    console.log('File don\'t exists');
    fs.writeFile('list.txt', '', function(err) {
      if (err) throw err;
      updateFile();
  });
  }
  else {
    console.log('Some other error: ', err.code);
  }
});

function updateFile() {
  fs.readFile('list.txt', function(err, data){
    if (err) throw err;
    var filedata = data.toString('utf8').split('\n');
    var finalData = filedata.concat(elements);
    console.log(finalData);
    fs.writeFile('list.txt', utils.createNiceListofFiles(finalData), function(err) {
      console.log("great done");
    });
  });
}


// version avec appendFile();
//
var fs = require('fs');
var utils = require('../modules/utils');
var args = process.argv;
var elements = null;
(args[2])? elements = args[2].split(','):elements=[];
fs.appendFile('list.txt', utils.createNiceListofFiles(elements), function (err) {
      if (err) throw err;
      console.log('data was appended to file!');
  });
