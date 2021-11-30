const express = require("express");
const cors = require("cors");


const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

/**
 * Use the home route to test if the server is running OK
 */
app.get("/",(_,res) => {
    res.json({
        status: 200,
        body:{message: "Welcome to my Book Store Api"}
    });
});

/**
 * Setting up the api routes
 */
require("./app/routes/application.routes.js")(app);

const PORT = 8080;

app.listen(process.env.EXTERNAL_PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT}`);    
})