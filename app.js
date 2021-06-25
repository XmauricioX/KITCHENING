const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

/* MIDDLEWARE */
app.use(express.static("public"));

app.listen(port,() => {
    console.log("server on:"); 
    console.log("http://localhost:3000");
});

app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname,"/views/index.html"))
});
