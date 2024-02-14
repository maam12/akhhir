import mongoose from "mongoose";

mongoose.connect("mongodb+srv://adno:jaaamc1234@cluster0.ozqcffu.mongodb.net/your-database-name?retryWrites=true&w=majority")
    .then(() => {
        console.log('Connected to the database');
    })
    .catch((error) => {
        console.error('Error connecting to the database:', error);
    });
