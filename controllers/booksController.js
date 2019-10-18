const csv = require('csv-parser')
const fs = require('fs');

exports.books_get_all = async (req, res, next) => {
    let books = [];
    fs.createReadStream('./data/books.csv')
        .pipe(csv())
        .on('data', (row) => {
            books.push(row);
        })
        .on('end', () => {
            res.send(books);
        })
}

