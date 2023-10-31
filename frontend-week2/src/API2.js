import React, { useState, useEffect } from "react";
import axios from "axios";

const Api2 = () => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the backend API endpoint when the component mounts
    axios
      .post("http://localhost:8000/api1")
      .then((response) => {
        console.log(response.data);
        setApiData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>API Data from Backend</h1>
      {loading ? (
        <p>Loading...</p>
      ) : apiData ? (
        <div>
          <p>Username: {apiData.infoUser.username}</p>
          <p>Email: {apiData.infoUser.email}</p>
          <p>Building Name: {apiData.infoProperty.buildingName}</p>
          <p>Unit: {apiData.infoProperty.unit}</p>
          <p>Postal Code: {apiData.infoProperty.postalCode}</p>
        </div>
      ) : (
        <p>Failed to fetch data from the API.</p>
      )}
    </div>
  );
};

export default Api2;
