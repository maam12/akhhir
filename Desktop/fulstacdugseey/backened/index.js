import express from "express"
const app = express()


import mongoose from "mongoose";

import cors from "cors"
import router from "./router/user.js";
import cookieParser from "cookie-parser";
import postRouter from "./router/poste.js";



app.use(express.json())
app.use(cookieParser())

app.use(cors())


mongoose.connect("mongodb+srv://adno:jaaamc1234@cluster0.ozqcffu.mongodb.net/your-database-name?retryWrites=true&w=majority")
    .then(() => {
        console.log('Connected to the database');
    })
    .catch((error) => {
        console.error('Error connecting to the database:', error);
    });




    app.use("/api/user" , router)
    
    app.use("/api/post" , postRouter)
    



app.listen(8000 , ()=> {
    console.log("hllow dugseeye")
})


