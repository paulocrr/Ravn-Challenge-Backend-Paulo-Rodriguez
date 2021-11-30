const db = require("../models");
const { QueryTypes } = require('sequelize');
const Author = db.authors;


/**
 * Return and array of authors order by their birthday, you can spececify a limit using the "limit" parameter
 * if you dont specify one by default the limit is 10
 * 
 * Example:
 * With limit parameter
 * http://localhost:8080/api/authors/by/birth?limit=15
 * 
 * Without limit parameter
 * http://localhost:8080/api/authors/by/birth
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.authorsOderByBrith = (req,res) => {

    const limit = req.query.limit ? req.query.limit : 10;

    /**
     * SQL Query:
     * SELECT * FROM authors
     * ORDER BY date_of_birth
     * LIMIT 10;
     * 
     */
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
        res.status(400).send({
            status: 400,
            body: {
                message: err.message
            }
        });
    });
}

/**
 * Return an array with the top n author with more revenue you can specify a limit using the "limit" parameter
 * if you dont specify a one the limit by default is 10
 * 
 * Examples:
 * With limit parameter
 * http://localhost:8080/api/revenue/author/top?limit=5
 * 
 * Without limit parameter
 * http://localhost:8080/api/revenue/author/top
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.topNRevenueAuthors = (req,res) => {

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
        res.status(400).send({
            status: 400,
            body: {
                message: err.message
            }
        });
    });
}