
const express=require("express");
const cors= require("cors");
const { urlencoded } = require("express");
const app= express();


var corsOPtions={
    origin:"http://localhost:8081"
};

app.use(cors(corsOPtions));

//parse requests of content-type - application/json
app.use(express.json());

//parse requests of content-type - application/x-ww-form-urlencoded
app.use(express.urlencoded({ extended:true }));



const db =require("../app/models");
db.sequelize.sync();

//simple route
app.get("/",(req,res)=>{
    res.json({message:"welome to bezkoder application.test test tes"});
});

//set port, listen for requests
const PORT = process.env.PORT || 8080
app.listen(PORT),()=>{
    console.log(`Server is running on port ${PORT}.`)
};

