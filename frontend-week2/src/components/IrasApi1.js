// Iras1

import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const IrasApi1 = () => {
  const [formData, setFormData] = useState({
    clientID: '',
    numberOfSharesTransferred: '',
    valuePerShare: '',
    consideration: '',
    transferenceDate: '',
  });

  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post('http://localhost:8000/iras1', formData);
      setResponse(result.data);
    } catch (error) {
      console.error('Error:', error.message);
      setResponse(null);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Transference of Public Listed Company Shares</h1>
      <div className="container mb-5 con-calculator">
      <form onSubmit={handleSubmit}>
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
        <div className="mb-3 row">
          <label htmlFor="numberOfSharesTransferred" className="col-sm-3 col-form-label">
          Number Of Shares Transferred
          </label>
          <div className="col-sm-9">
          <input
            type="text"
            className="form-control"
            id="numberOfSharesTransferred"
            name="numberOfSharesTransferred"
            value={formData.numberOfSharesTransferred}
            onChange={handleChange}
          />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="valuePerShare" className="col-sm-3 col-form-label">
          Value Per Share
          </label>
          <div className="col-sm-9">
          <input
            type="text"
            className="form-control"
            id="valuePerShare"
            name="valuePerShare"
            value={formData.valuePerShare}
            onChange={handleChange}
          />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="consideration" className="col-sm-3 col-form-label">
          Consideration
          </label>
          <div className="col-sm-9">
          <input
            type="text"
            className="form-control"
            id="consideration"
            name="consideration"
            value={formData.consideration}
            onChange={handleChange}
          />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="transferenceDate" className="col-sm-3 col-form-label">
          Transference Date
          </label>
          <div className="col-sm-9">
          <input
            type="date"
            className="form-control"
            id="transferenceDate"
            name="transferenceDate"
            value={formData.transferenceDate}
            onChange={handleChange}
          />
          </div>
        </div>
        
        <button type="submit" className="btn btn-primary">
          Calculate
        </button>
      </form>
      </div>
        <hr />
      {response && (
        <div className="mt-5">
          <h1>Calculation Result</h1>
          <div className="container my-3">
          <p>Stamp Duty: {response.data.stampDuty}</p>
          <p>Dutiable Amount: {response.data.dutiableAmount}</p>
          <p>Duty Rate: {response.data.dutyRate}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default IrasApi1;


 