// app2.js backend node with express
require('dotenv').config();
const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(bodyParser.json());


app.post("/api1", async (req, res) => {
  const userData = req.body;

  try {
    const response = await axios.post(process.env.APP_BASEURLAWS, userData, {
      headers: {
        "api-key": process.env.APP_APIKEYAWS,
        "content-type": "application/json",
      },
    });
    res.json(response.data);
    console.log("Request successful:", response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send the request" });
  }
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
