const parse = require("csv-parse/lib/sync");
var fs = require('fs');
let books;

fs.readFile('../data/books.csv', 'utf8', (err, contents) => {
    books = parse(contents);
    console.log(books);
});

function parseData(data) {
    return parse(data, {
        columns: true,
        skip_empty_lines: true
      });
}

console.log(books);

