const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

/**
 * Connecting to the database
 */

const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: 0,
    pool:dbConfig.pool
});

/**
 * Exporting de db object that containes the models and sequelize and Sequelize objects
 */

const db = {
    sequelize: sequelize,
    Sequelize: Sequelize
};

db.authors = require("./author.model.js")(sequelize);
db.books = require("./book.model.js")(sequelize);
db.sale_items = require("./sale_item.model.js")(sequelize);

module.exports = db;