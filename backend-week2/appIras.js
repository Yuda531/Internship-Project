const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

// Middleware
app.use(bodyParser.json());

// Replace dengan API Key yang diberikan oleh IRAS
const clientId = '04f6f06e00eccd8c1f1fa4b3ff26c039';
const clientSecret = 'f8d9baa13faa86c06b400adcd1cd0f0c';

app.post('/iras9', async (req, res) => {
  try {
    const requestData = req.body;
    const apiUrl = 'https://apisandbox.iras.gov.sg/iras/sb/SD/CalPropertyTenancy';

    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-IBM-Client-Id': clientId,
      'X-IBM-Client-Secret': clientSecret,
    };

    const response = await axios.post(apiUrl, requestData, { headers });

    if (response.status === 200) {
      const responseData = response.data.data;
      res.json({
        stampDuty: responseData.stampDuty,
        AAR: responseData.AAR,
        dutiableAmount: responseData.dutiableAmount,
        dutyOnPremium: responseData.dutyOnPremium,
        leaseDutyRate: responseData.leaseDutyRate,
      });
    } else {
      res.status(response.status).json(response.data);
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
