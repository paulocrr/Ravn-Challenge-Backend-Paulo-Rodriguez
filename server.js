const express = require("express");
const cors = require("cors");
const db = require("./app/models");

const app = express();

let corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.get("/",(_,res) => {
    res.json({
        status: 200,
        body:{message: "Book Store Api"}
    });
});

/**
 * Setting up the api routes
 */
require("./app/routes/application.routes.js")(app);


const PORT = 8080;

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);    
})