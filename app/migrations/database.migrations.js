const db = require("../models");


/**
 * When this file is execute the server recreate all the tables in the database, and the you have to run the seeder again
 * using the following command:
 * 
 * node app/seeders/database.seeder.js
 */
db.sequelize.sync({force: true}).then(()=>{
    console.log("Drop all tables");
}).catch((error)=>{
    console.error(error);
})