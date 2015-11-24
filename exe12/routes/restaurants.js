'use strict';
let express = require('express'),
router = express.Router(),
restaurantModel = require(`${process.cwd()}/models/restaurants`)();
router.get('/', function(req, res) {
  restaurantModel.getAll(function(err, data) {
    if(err) throw err;
      res.json(data);
  });
});
router.get('/:id', function(req, res) {
  let id = req.params.id;
  restaurantModel.getById(id,function(err, data) {
    if(err) throw err;
      res.json(data);
  });
});
// router.get('/:name', function(req, res) {
//   let name = req.params.name;
//   restaurantModel.getByName(name,function(err, data) {
//     if(err) throw err;
//       res.json(data);
//   });
// });

module.exports = router;
