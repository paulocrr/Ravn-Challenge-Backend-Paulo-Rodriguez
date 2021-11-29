/**
 * Here we create and add the routes of the api and is assoicieted 
 * to a function of and specific controller,
 * every new route has the prefix /api by default
 * as you can see in line 20
 * 
 * @param {*} app 
 */
module.exports = app => {
    const authorController = require("../controllers/author.controller.js");
    const saleController = require("../controllers/sales.controller.js");

    let router = require("express").Router();

    router.get("/authors/by/birth",authorController.authorsOderByBrith);

    router.get("/total/revenue", saleController.getTotalAuthorSales);

    router.get("/revenue/author/top",authorController.topNRevenueAuthors);

    app.use('/api',router);
}