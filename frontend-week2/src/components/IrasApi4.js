// Iras 4

import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const IrasApi4 = () => {
  const [clientID, setClientID] = useState("");
  const [ordinaryShares, setOrdinaryShares] = useState({
    sharesTransferred: "",
    NAVPerShare: "",
  });
  const [preferenceShares, setPreferenceShares] = useState({
    sharesTransferred: "",
    NAVPerShare: "",
  });
  const [consideration, setConsideration] = useState("");
  const [transferenceDate, setTransferenceDate] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleCalculate = async () => {
    try {
      const response = await axios.post("http://localhost:8000/iras4", {
        clientID,
        ordinaryShares,
        preferenceShares,
        consideration,
        transferenceDate,
      });

      setResult(response.data);
      setError(null);
    } catch (error) {
      console.error(error);
      setError("Failed to calculate. Please check your input and try again.");
      setResult(null);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Transference of Public Listed Company Shares</h1>
      <div className="container mb-5 con-calculator">
        <div className="mb-3 row">
          <label className="col-sm-3 col-form-label">Client ID</label>
          <div className="col-sm-9">
          <input
            type="text"
            className="form-control"
            value={clientID}
            onChange={(e) => setClientID(e.target.value)}
          />
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-sm-3 col-form-label">Ordinary Shares</label>
          <div className="col-sm-9">
          <input
            type="number"
            className="form-control"
            placeholder="Shares Transferred"
            value={ordinaryShares.sharesTransferred}
            onChange={(e) =>
              setOrdinaryShares({
                ...ordinaryShares,
                sharesTransferred: e.target.value,
              })
            }
          />
          <input
            type="number"
            className="form-control mt-2"
            placeholder="NAV Per Share"
            value={ordinaryShares.NAVPerShare}
            onChange={(e) =>
              setOrdinaryShares({
                ...ordinaryShares,
                NAVPerShare: e.target.value,
              })
            }
          />
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-sm-3 col-form-label">Preference Shares</label>
          <div className="col-sm-9">
          <input
            type="number"
            className="form-control"
            placeholder="Shares Transferred"
            value={preferenceShares.sharesTransferred}
            onChange={(e) =>
              setPreferenceShares({
                ...preferenceShares,
                sharesTransferred: e.target.value,
              })
            }
          />
          <input
            type="number"
            className="form-control mt-2"
            placeholder="NAV Per Share"
            value={preferenceShares.NAVPerShare}
            onChange={(e) =>
              setPreferenceShares({
                ...preferenceShares,
                NAVPerShare: e.target.value,
              })
            }
          />
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-sm-3 col-form-label">Consideration</label>
          <div className="col-sm-9">
          <input
            type="number"
            className="form-control"
            placeholder="Enter Consideration"
            value={consideration}
            onChange={(e) => setConsideration(e.target.value)}
          />
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-sm-3 col-form-label">Transference Date</label>
          <div className="col-sm-9">
          <input
            type="date"
            className="form-control"
            value={transferenceDate}
            onChange={(e) => setTransferenceDate(e.target.value)}
          />
          </div>
        </div>

        <button className="btn btn-primary" onClick={handleCalculate}>
          Calculate
        </button>
      </div>

      <hr />

      {error && <div className="alert alert-danger mt-3">{error}</div>}
      {result && (
        <div className="mt-5">
          <h1>Calculation Result</h1>
          <div className="container my-3">
            <p>Stamp Duty: {result.data.stampDuty}</p>
            <p>Dutiable Amount: {result.data.dutiableAmount}</p>
            <p>Duty Rate: {result.data.dutyRate}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default IrasApi4;
