const { DataTypes } = require("sequelize/dist");

module.exports = (sequelize)=>{
    const Book = sequelize.define("books", {
        // id: {
        //     type: Sequelize.BIGINT,
        //     primaryKey: true,
        //     autoIncrement: true
        // },
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