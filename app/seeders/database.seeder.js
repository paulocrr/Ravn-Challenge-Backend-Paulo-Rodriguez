const db = require("../models");
const faker = require("faker");
const Author = db.authors;
const Book = db.books;
const SaleItem = db.sale_items;

/**
 * Use this const to change the number of author you want to generate
 */
const NUMBER_OF_AUTHORS = 50;

authorsData = [];
booksData = [];
saleItemsData = [];
booksId = 1;

function generateRandomIsbn(){
    let isbn = "";
    for(let i = 0; i<10; i++){
        let digit = Math.floor(Math.random()*10);
        isbn+=digit.toString();
    }

    return isbn;
}

for(let authorId = 1; authorId<=NUMBER_OF_AUTHORS; authorId++){
    let authorName = faker.name.findName();
    let dateBirth = faker.date.past();
    let numberOfBooks = Math.floor(Math.random()*10);
    let numberOfSales = Math.floor(Math.random()*50);

    authorsData.push({
        id: authorId,
        name: authorName,
        date_of_birth: dateBirth
    });

    for (let booksPerAuthor = 0; booksPerAuthor < numberOfBooks; booksPerAuthor++) {
        let isbn = generateRandomIsbn();

        booksData.push({
            id: booksId,
            author_id: authorId,
            isbn: isbn
        });

        for (let sales = 0; sales < numberOfSales; sales++) {
            let clientName = faker.name.findName();
            let price = faker.commerce.price();
            saleItemsData.push({
                book_id: booksId,
                customer_name: clientName,
                item_price: price
            });
        }

        booksId++;
    }

}

Author.bulkCreate(authorsData);
Book.bulkCreate(booksData);
SaleItem.bulkCreate(saleItemsData);
