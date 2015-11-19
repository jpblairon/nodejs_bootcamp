var fs = require("fs");

fs.readdir('../', function (err, files) {
    if (err) throw err;
    fs.writeFile('result.txt',
    createNiceListofFiles(files), function (err, data)
    {
        if (err) throw err;
        console.log('It\'s saved!');
    });
});
function createNiceListofFiles(arrFiles){
  return arrFiles.join('\n');
}
