const { DataTypes } = require("sequelize/dist");


module.exports = (sequelize) => {

    /**
     * Defining authors table
     */
    const Author = sequelize.define("authors",{
        name: {
            type: DataTypes.TEXT,
        },
        date_of_birth: {
            type: DataTypes.DATE
        }
    });

    return Author;
}