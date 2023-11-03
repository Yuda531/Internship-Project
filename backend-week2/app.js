const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

const Client_Id = "04f6f06e00eccd8c1f1fa4b3ff26c039";
const Client_Secret = "f8d9baa13faa86c06b400adcd1cd0f0c";

app.post("/iras1", async (req, res) => {
  try {
    const {
      clientID,
      numberOfSharesTransferred,
      valuePerShare,
      consideration,
      transferenceDate,
    } = req.body;

    const response = await axios.post(
      "https://apisandbox.iras.gov.sg/iras/sb/SD/CalPubListedCompanyShares",
      {
        clientID,
        numberOfSharesTransferred,
        valuePerShare,
        consideration,
        transferenceDate,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-IBM-Client-Id": Client_Id,
          "X-IBM-Client-Secret": Client_Secret,
        },
      }
    );

    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send the request" });
  }
});

app.post("/iras2", async (req, res) => {
  try {
    const { value, acquisitionDate, disposalDate, clientID } = req.body;

    const response = await axios.post(
      "https://apisandbox.iras.gov.sg/iras/sb/SD/CalIndustrialSSD",
      {
        value,
        acquisitionDate,
        disposalDate,
        clientID,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-IBM-Client-Id": Client_Id,
          "X-IBM-Client-Secret": Client_Secret,
        },
      }
    );

    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send the request" });
  }
});

app.post("/iras3", async (req, res) => {
  try {
    const { clientID, value, documentDate } = req.body;

    const response = await axios.post(
      "https://apisandbox.iras.gov.sg/iras/sb/SD/CalPropertyBSD",
      {
        clientID,
        value,
        documentDate,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-IBM-Client-Id": Client_Id,
          "X-IBM-Client-Secret": Client_Secret,
        },
      }
    );

    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send the request" });
  }
});

app.post("/iras4", async (req, res) => {
  try {
    const {
      clientID,
      ordinaryShares,
      preferenceShares,
      consideration,
      transferenceDate,
    } = req.body;

    const response = await axios.post(
      "https://apisandbox.iras.gov.sg/iras/sb/SD/CalPrivateCompanyShares",
      {
        clientID,
        ordinaryShares,
        preferenceShares,
        consideration,
        transferenceDate,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-IBM-Client-Id": Client_Id,
          "X-IBM-Client-Secret": Client_Secret,
        },
      }
    );

    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send the request" });
  }
});

app.post("/iras5", async (req, res) => {
  try {
    const { mortgageAmount, documentDate, clientID } = req.body;

    const response = await axios.post(
      "https://apisandbox.iras.gov.sg/iras/sb/SD/CalMortgage",
      {
        mortgageAmount,
        documentDate,
        clientID,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-IBM-Client-Id": Client_Id,
          "X-IBM-Client-Secret": Client_Secret,
        },
      }
    );

    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send the request" });
  }
});

app.post("/iras6", async (req, res) => {
  try {
    const { buyers, purchaseType, documentDate, clientID } = req.body;

    const response = await axios.post(
      "https://apisandbox.iras.gov.sg/iras/sb/SD/GetPropertyABSDRate",
      {
        buyers,
        purchaseType,
        documentDate,
        clientID,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-IBM-Client-Id": Client_Id,
          "X-IBM-Client-Secret": Client_Secret,
        },
      }
    );

    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send the request" });
  }
});

app.post("/iras7", async (req, res) => {
  try {
    const { value, acquisitionDate, disposalDate, clientID } = req.body;

    const response = await axios.post(
      "https://apisandbox.iras.gov.sg/iras/sb/SD/CalPropertyResidentialSSD",
      {
        value,
        acquisitionDate,
        disposalDate,
        clientID,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-IBM-Client-Id": Client_Id,
          "X-IBM-Client-Secret": Client_Secret,
        },
      }
    );

    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send the request" });
  }
});

app.post("/iras8", async (req, res) => {
  try {
    const {
      clientID,
      numberOfSharesTransferred,
      allotmentPrice,
      consideration,
      transferenceDate,
    } = req.body;

    const response = await axios.post(
      "https://apisandbox.iras.gov.sg/iras/sb/SD/CalNewPrivateCompanyShares",
      {
        clientID,
        numberOfSharesTransferred,
        allotmentPrice,
        consideration,
        transferenceDate,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-IBM-Client-Id": Client_Id,
          "X-IBM-Client-Secret": Client_Secret,
        },
      }
    );

    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send the request" });
  }
});

app.post("/iras9", async (req, res) => {
  try {
    const { terms, premium, documentDate, clientID } = req.body;

    const response = await axios.post(
      "https://apisandbox.iras.gov.sg/iras/sb/SD/CalPropertyTenancy",
      {
        terms,
        premium,
        documentDate,
        clientID,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-IBM-Client-Id": Client_Id,
          "X-IBM-Client-Secret": Client_Secret,
        },
      }
    );

    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send the request" });
  }
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
