const express = require("express");
const mongoose = require("mongoose");
const bodyParser  = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();
mongoose.set('strictQuery', true);

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

// mongoose.connect(URL,{
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
// });

// const connection = mongoose.connection;
// connection.once("open",()=>{
//     console.log("Mongodb Connection success!");
// })

async function connect(){
    try{
        await mongoose.connect(URL);
        console.log("Connected to MongoDB");
    }catch(error){
        console.log(error);
    }
}

connect();

const projectRouter = require("./routes/projects");

app.use("/project",projectRouter);

app.listen(PORT,()=>{
    console.log(`Server is up and running on port number: ${PORT}`)
})


