// Nhớ cài Mongoose
//  npm      i       --S      mongoose
const mongoose = require("mongoose");

/// Thông tin Database Collection / Tables
const userName = "dbadmin";
const userPassword = "tYjPsNZo8HJYc8qm";


const dbName = "ATN_SHOP";
const dbTable = "Customers";

const url = "mongodb+srv://" +
    userName + ":" + userPassword +
    "@cluster0.s7ukh.mongodb.net/" + dbName +
    "?retryWrites=true&w=majority";


/// --- Kết nối DataBase
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
// useFindAndModify: false,

/// --- Catch EVENTs
const xdb = mongoose.connection;
xdb.on('error', err => {
    console.log("\n Error ", err);
});

xdb.once('open', () => {
    console.log("\n Database connected ", url);
});