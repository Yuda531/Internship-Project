// app.js

const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(bodyParser.json());

const API_URL = "https://2jgj2p3m39.execute-api.ap-southeast-1.amazonaws.com/dev/register";
const API_KEY = "6a67693de31cd85db76ff8e5b6452afa41b4281494e63e1abe60aa1df60384c9291973dfac102c1102edcfaaf7e50da96507c18bcdc95fd6f5c7edb459e0f8b3"; // Replace this with your actual API key

app.post("/api1", async (req, res) => {
  const userData = req.body;
  
  try {
    const response = await axios.post(API_URL, userData, {
      headers: {
        "api-key": API_KEY,
        "content-type": "application/json"
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send the request" });
  }
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
