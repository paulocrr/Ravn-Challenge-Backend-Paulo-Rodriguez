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

db.sequelize.sync({force: true}).then(()=>{
    console.log("Drop all tables");
}).catch((error)=>{
    console.error(error);
})

app.get("/",(req,res) => {
    res.json({
        status: 200,
        body:{message: "Book Store Api"}
    });
});

const PORT = 8080;

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);    
})