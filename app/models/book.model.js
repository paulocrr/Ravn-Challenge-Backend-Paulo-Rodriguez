const { DataTypes } = require("sequelize/dist");

module.exports = (sequelize) => {

    /**
     * Defining books table
     */

    const Book = sequelize.define("books", {
        author_id:{
            type: DataTypes.INTEGER,
            references: {
                model: 'authors',
                key: 'id'
            }
        },
        isbn: {
            type: DataTypes.TEXT
        }
    });

    Book.associate = function(models) {
        Book.hasMany(models.Author, {foreignKey: 'author_id', as: 'author'});
    };

    return Book;
}