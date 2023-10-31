var express = require("express");
var app = express();
const axios = require("axios");
const cors = require("cors");

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.get("/api1", async (req, res) => {
  const options = {
    method: "POST",
    url: "https://apisandbox.iras.gov.sg/iras/sb/SD/CalPubListedCompanyShares",
    headers: {
      "X-IBM-Client-Id": "04f6f06e00eccd8c1f1fa4b3ff26c039",
      "X-IBM-Client-Secret": "f8d9baa13faa86c06b400adcd1cd0f0c",
      "content-type": "application/json",
      accept: "application/json",
    },
    data: {
        clientID: "760582182",
        numberOfSharesTransferred: 7.14320908,
        valuePerShare: 20.14136079,
        consideration: 34.98516963,
        transferenceDate: "2021-04-28"
      }
      ,
  };

  try {
    const response = await axios(options);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Gagal mengirim permintaan" });
  }
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
