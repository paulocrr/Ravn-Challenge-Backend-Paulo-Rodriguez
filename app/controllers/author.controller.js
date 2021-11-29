const db = require("../models");
const { QueryTypes } = require('sequelize');
const Author = db.authors;

exports.authorsOderByBrith = (req,res) => {
    const limit = req.query.limit ? req.query.limit : 10;
    Author.findAll({
        order: [
            ['date_of_birth','ASC']
        ],
        limit: limit
    })
    .then(data => {
        let statusCode = data.length === 0 ? 404: 200;
        res.status(statusCode).send({
            status: statusCode,
            body: data
        });
    })
    .catch(err =>{
        res.status(501).send({
            status: 501,
            body: err.message
        });
    });
}

exports.top10RevenueAuthors = (req,res) => {
    const limit = req.query.limit ? req.query.limit : 10;
    db.sequelize.query(
        "SELECT authors.name, SUM(sale_items.item_price) as revenue FROM authors\
        JOIN books ON books.author_id = authors.id\
        JOIN sale_items ON sale_items.book_id = books.id\
        GROUP BY authors.name\
        ORDER BY revenue\
        DESC LIMIT ?",
        {
        replacements: [limit],
        type: QueryTypes.SELECT
        }
    ).then(data => {
        let statusCode = data.length === 0 ? 404: 200;
        res.status(statusCode).send({
            status: statusCode,
            body: data
        });
    })
    .catch(err => {
        res.status(501).send({
            status: 501,
            body: err.message
        });
    });
}