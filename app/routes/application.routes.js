module.exports = app => {
    const authorController = require("../controllers/author.controller.js");
    const saleController = require("../controllers/sales.controller.js");

    let router = require("express").Router();

    router.get("/authors/by/birth",authorController.authorsOderByBrith);

    router.get("/total/revenue", saleController.getTotalAuthorSales);

    router.get("/revenue/author/top",authorController.top10RevenueAuthors);

    app.use('/api',router);
}