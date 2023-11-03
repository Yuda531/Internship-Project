var express = require("express");
var app = express();
const axios = require("axios");
const cors = require("cors");

app.use(cors({
  origin: 'http://localhost:3000'
}));


app.get("/api1", (req, res, next) => {
  res.json(["Agung", "Yuda", "Michael", "Sarah", "Ara"]);
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
