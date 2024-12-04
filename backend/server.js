const express = require("express")
const mongoose = require("mongoose")
const dotenv = require('dotenv')
dotenv.config();
const app = express();
app.use(express.json());
const userRoute = require("./routes/userRoute")
const cors =require("cors")

app.use(cors());
mongoose.connect(process.env.URI).
then(()=>{
    console.log("connect successfully")
    app.listen(process.env.PORT || 8000 ,(err)=>{
        if(err) console.log(err);
        console.log("running successfully at ",process.env.PORT)
    });
}).catch((error)=>{
    console.log("error",error)
})

app.use(userRoute);




