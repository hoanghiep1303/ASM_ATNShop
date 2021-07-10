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

        var data = { idCustomer: "NNTu", custName: "Nguyễn Ngọc Tú" };
        //... Insert
        dbObj.collection(dbTable).insert(data,
            (err, result) => {
                if (err) {
                    console.log("\n ERR insert: ", err);
                    process.exit(0);
                }
                console.log("\n Result - record added ", result);

                /// --- Close
                db.close();
            }
        );
    }
);