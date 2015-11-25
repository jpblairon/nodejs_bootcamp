'use strict';
let express = require('express'),
router = express.Router(),
restaurantModel = require(`${process.cwd()}/models/restaurants`)();
router.get('/', function(req, res) {
  restaurantModel.getAll(function(err, data) {
    if(err) res.json(err.message);
      res.json(data);
  });
});
router.get('/:id', function(req, res) {
  let id = req.params.id;
  restaurantModel.getById(id,function(err, data) {
    if(err) res.json(err.message);
      res.json(data);
  });
});

router.get('/:field/:searchValue', function(req, res) {
  let field = req.params.field;
  let searchValue = req.params.searchValue;
  restaurantModel.getBySpecifiedField(field, searchValue, function(err, data) {
    if(err) res.json(err.message);
    res.json(data);
  });
});

router.post('/', function(req, res) {
  let ob = req.body;
  restaurantModel.setRestaurant(ob, function(err) {
    if(err) res.json(err.message);
      res.json({"message":"insertion was a success"});
    });
});

router.delete('/:id', function(req, res) {
  let id = req.params.id;
  restaurantModel.delRestaurant(id, function(err) {
    if(err) res.json(err.message);
      res.json({"message":"Delete was a success"});
    });
});

module.exports = router;
