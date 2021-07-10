
var admin = require("firebase-admin");

var serviceAccount = require("./atnproject-dcd2c-firebase-adminsdk-31ca1-bdd74d509f.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://atnproject-dcd2c-default-rtdb.firebaseio.com"
});
