const { DataTypes } = require("sequelize/dist");

module.exports = (sequelize)=>{

    /**
     * Defining sale_items table
     */

    const SaleItem = sequelize.define("sale_items", {
        book_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'books',
                key: 'id'
            }
        },
        customer_name: {
            type: DataTypes.TEXT
        },
        item_price: {
            type: DataTypes.DECIMAL(10,2)
        }
    });

    SaleItem.associate = function(models) {
        Book.hasMany(models.Book, {foreignKey: 'book_id', as: 'book'});
    };

    return SaleItem;
}