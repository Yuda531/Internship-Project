import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the backend API endpoint when the component mounts
    axios.get('http://localhost:8000/api1')
      .then(response => {
        console.log(response.data);
        setApiData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  return (
    <div className="App">
      <h1>API Data from Backend</h1>
      {loading ? (
        <p>Loading...</p>
      ) : apiData ? (
        <div>
          <p>Stamp Duty: {apiData.data.stampDuty}</p>
          <p>Dutiable Amount: {apiData.data.dutiableAmount}</p>
          <p>Duty Rate: {apiData.data.dutyRate}</p>
        </div>
      ) : (
        <p>Failed to fetch data from the API.</p>
      )}
    </div>
  );
};

export default App;
