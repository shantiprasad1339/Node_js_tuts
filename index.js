const express = require("express");
const { databaseconnection } = require("./connection");
const shortUrlRouter = require("./routes/shortUrlRouter")
const userRouter = require("./routes/userRouter")
const app = express();
databaseconnection();
const Port = 8000 ;
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use("/url",shortUrlRouter)
app.use("/users",userRouter)

app.listen(Port, (re, res) => {
  console.log("server Started On Port " + Port);
});
