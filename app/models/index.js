const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: 0,
    pool:dbConfig.pool
});

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

/**
 * Load tables into models
 */

db.authors = require("./author.model.js")(sequelize);
db.books = require("./book.model.js")(sequelize);
db.sale_items = require("./sale_item.model.js")(sequelize);

module.exports = db;