const mongoose = require("mongoose");

 async function databaseconnection() {
  const dbname = "my-app";
    return mongoose
    .connect(
      "mongodb+srv://shantiprasadahitswami:wvTYC21POVrw9d7m@my-first-cluster.51vey.mongodb.net/"+dbname
    )
    .then(() => {
      console.log("connection successfull with " + dbname);
    })
    .catch((err) => {
      console.log(err);
    });
 }
 module.exports={
    databaseconnection
 }