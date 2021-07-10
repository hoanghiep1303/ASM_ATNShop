// Nhớ cài MongoDB
//  npm      i       --S      mongodb
const mongo = require("mongodb");
const url = "mongodb+srv://dbadmin:tYjPsNZo8HJYc8qm@cluster0.s7ukh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongo.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },
    (err, db) => {
        if (err) {
            console.log("\n ERR: ", err);
            process.exit(0);
        }
        console.log("\n Connected !");
        /// --- Query
        var dbObj = db.db("ATN_SHOP");

        var data = { idCustomer: "NNTu", custName: "Nguyễn Ngọc Tú" };
        //... Insert
        dbObj.collection("Customers").insert(data,
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