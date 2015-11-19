var fs = require("fs");

fs.readFile('fake.txt', function (err, data) {
  if (err) throw err;
  var inData = data.toString();
  var result = inData.split('\n').length;
  console.log(result);
  });
