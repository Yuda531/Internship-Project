import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const IrasApi2 = () => {
  const [formData, setFormData] = useState({
    value: '',
    acquisitionDate: '',
    disposalDate: '',
    clientID: '',
  });

  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post('http://localhost:8000/iras2', formData);
      setResponse(result.data);
    } catch (error) {
      console.error('Error:', error.message);
      setResponse(null);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Industrial Property</h1>
      <div className="container mb-5 con-calculator">
      <form onSubmit={handleSubmit}>
        <div className="mb-3 row">
          <label htmlFor="value" className="col-sm-3 col-form-label">
            Property Value
          </label>
          <div className="col-sm-9">
          <input
            type="text"
            className="form-control"
            id="value"
            name="value"
            value={formData.value}
            onChange={handleChange}
          />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="acquisitionDate" className="col-sm-3 col-form-label">
            Acquisition Date
          </label>
          <div className="col-sm-9">
          <input
            type="date"
            className="form-control"
            id="acquisitionDate"
            name="acquisitionDate"
            value={formData.acquisitionDate}
            onChange={handleChange}
          />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="disposalDate" className="col-sm-3 col-form-label">
            Disposal Date
          </label>
          <div className="col-sm-9">
          <input
            type="date"
            className="form-control"
            id="disposalDate"
            name="disposalDate"
            value={formData.disposalDate}
            onChange={handleChange}
          />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="clientID" className="col-sm-3 col-form-label">
            Client ID
          </label>
          <div className="col-sm-9">
          <input
            type="text"
            className="form-control"
            id="clientID"
            name="clientID"
            value={formData.clientID}
            onChange={handleChange}
          />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Calculate
        </button>
      </form>
      </div>
      

      {response && (
        <div className="mt-3">
          <h2>Calculation Result</h2>
          <div className="container my-3">
            <p>Stamp Duty: {response.data.stampDuty}</p>
            <p>Holding Period: {response.data.holdingPeriod} years</p>
            <p>Duty Rate: {response.data.dutyRate}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default IrasApi2;
