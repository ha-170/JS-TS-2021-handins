var http = require("http");
function logger(book) {
    console.log("\n        Title: " + book.title + ", \n        Author: " + book.author + ", \n        Publish date: " + book.published + ", \n        No. of pages: " + book.pages);
}
