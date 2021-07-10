// Nhớ cài MongoDB
//  npm      i       --S      mongodb
const mongo = require("mongodb");

/// Thông tin Database Collection / Tables
const userName = "dbadmin";
const userPassword = "tYjPsNZo8HJYc8qm";


const dbName = "ATN_SHOP";
const dbTable = "Customers";

const url = "mongodb+srv://" +
    userName + ":" + userPassword +
    "@cluster0.s7ukh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


/// --- Kết nối DataBase
mongo.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },
    (err, db) => {
        if (err) {
            console.log("\n ERR: ", err);
            process.exit(0);
        }
        console.log("\n Connected !");
        /// --- Query
        var dbObj = db.db(dbName);

        // -- điều kiện tìm kiếm trong Query
        var conds = {};
        //... Find
        dbObj.collection(dbTable).find(conds).toArray(
            (err, result) => {
                if (err) {
                    console.log("\n ERR Query-Find: ", err);
                    process.exit(0);
                }
                console.log("\n Query/Find Result : ", result);

                /// --- Close
                db.close();
            }
        );
    }
);