var express = require("express");
var app = express();
const axios = require("axios");
const cors = require("cors");

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.post("/api1", async (req, res) => {
  const options = {
    method: "POST",
    url: "https://2jgj2p3m39.execute-api.ap-southeast-1.amazonaws.com/dev/register",
    headers: {
      "api-key": "6a67693de31cd85db76ff8e5b6452afa41b4281494e63e1abe60aa1df60384c9291973dfac102c1102edcfaaf7e50da96507c18bcdc95fd6f5c7edb459e0f8b3",
      "content-type": "application/json"
    },
    data: {
      user: {
        username: "aqua55",
        password: "a12347",
        email: "aqua55@gmail.com",
        first_name: "aqua55",
        last_name: "aja",
        account_type: "user"
        },
        property: {
        building_name: "Le Building 55",
        unit: "66-55553",
        block: "Block",
        street: "street 66",
        district: 1,
        country: "HN",
        postal_code: "12155",
        property_group: "Commercial",
        property_sub_group: "Office",
        property_type: "Condominium",
        unit_type: "Lesser than 300sqft",
        toilets: 3,
        utility_room: "false",
        balcony: "true",
        lease_period: "1",
        lease_start_date: "01-01-2023",
        relationship: "Owner",
        ownership_type: "Rented"
        }
        
    },
  };

  try {
    const response = await axios(options);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send The Request" });
  }
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
