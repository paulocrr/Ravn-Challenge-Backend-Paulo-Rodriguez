const { QueryTypes } = require('sequelize');
const db = require("../models");


/**
 * Return the total sales revenue of an author filtered by the name, if you dont specify a name,
 * then return the sales revenue of Lorelai Gilmore
 * 
 * Examples:
 * With name parameter
 * http://localhost:8080/api/total/revenue?name=Antoinette Bernier
 * 
 * Without name parameter
 * http://localhost:8080/api/total/revenue
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.getTotalAuthorSales = (req, res) => {

    const authorName = req.query.name ? req.query.name : "Lorelai Gilmore"; 
    db.sequelize.query(
        "SELECT name, SUM(sale_items.item_price) as price FROM sale_items\
        JOIN books ON books.id = sale_items.book_id\
        JOIN authors ON authors.id = books.author_id\
        WHERE authors.name = ?\
        GROUP BY authors.name",
        {
            replacements: [authorName],
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