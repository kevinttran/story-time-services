var express = require('express');
var router = express.Router();

// Require controller modules.
var book_controller = require('../controllers/booksController');

// Catalogue for all books 
router.get('/', book_controller.books_get_all);

router.post('/', book_controller.store_all_books);

module.exports = router;
