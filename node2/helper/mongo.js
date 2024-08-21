const mongoose = require("mongoose");
// const env = require("../.env");

mongoose
    .connect(process.env.MONGODB_URI, { dbName: process.env.DB_NAME })
    .then(() => {
        console.log("mongodb connected sucessfuly");
    })
    .catch((error) => console.log(error.message));