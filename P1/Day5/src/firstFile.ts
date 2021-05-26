const http = require("http");

interface IBook{
    title: string
    author: string
    published: Date
    pages: number
}

function logger(book: IBook){
    console.log(`
        Title: ${book.title}, 
        Author: ${book.author}, 
        Publish date: ${book.published}, 
        No. of pages: ${book.pages}`
    );
}
