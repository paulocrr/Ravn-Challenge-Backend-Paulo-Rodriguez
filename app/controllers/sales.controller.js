const { QueryTypes } = require('sequelize');
const db = require("../models");


/**
 * Return the total sales revenue of an author filtered by the name
 * 
 * Examples:
 * http://localhost:8080/api/total/revenue?name=Lorelai%20Gilmore
 * 
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.getTotalAuthorSales = (req, res) => {

    const authorName = req.query.name;
    
    if(!authorName){
        res.status(400).send({
            status: 400,
            message: "You must specify the \"name\" parameter"
        });
    }
    
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
        let statusCode = data.length === 0 ? 404 : 200;
        let message = data.length===0 ? "The author you are searching was not found" : "OK";
        res.status(statusCode).send({
            status: statusCode,
            message: message,
            body: data
        });
    })
    .catch(err => {
        res.status(400).send({
            status: 400,
            message: err.message
        });
    });
}