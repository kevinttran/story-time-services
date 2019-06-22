var express = require('express');
var router = express.Router();

/* Catalogue for all books */
router.get('/', function(req, res, next) {
  res.json({ test: 1 });
});

module.exports = router;
