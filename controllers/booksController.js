const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: './data/bookstest.csv',
    header: [
        { id: 'TITLE', title: 'TITLE' },
        { id: 'AUTHOR', title: 'AUTHOR' },
        { id: 'DATE_READ', title: 'DATE_READ' },
        { id: 'RATING', title: 'RATING' }
    ]
});
const fs = require('fs');

let getAllBooks = new Promise((resolve, reject) => {
    let books = [];
    fs.createReadStream('./data/books.csv')
        .pipe(csv())
        .on('data', (row) => {
            books.push(row);
        })
        .on('end', () => {
            resolve(books);
        })
        .on('error', reject);
});

exports.books_get_all = async (req, res, next) => {
    res.send(await getAllBooks);
}

exports.store_all_books = async (req, res, next) => {
    const data = req.body;
    //console.log(data);
    csvWriter
        .writeRecords(data)
        .then(() => {
            res.json({ result: 'success'});
        })
}

