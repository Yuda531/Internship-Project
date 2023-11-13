import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const IrasApi9 = () => {
  const [terms, setTerms] = useState([
    {
      startDate: "",
      endDate: "",
      monthlyRent: 0,
      monthlyFurnitureFittings: 0,
      monthlyServiceMaintenance: 0,
      monthlyAdvertisingAndPromotion: 0,
      otherMonthlyCharges: 0,
    },
  ]);

  const [premium, setPremium] = useState(0);
  const [documentDate, setDocumentDate] = useState("");
  const [clientID, setClientID] = useState("");
  const [response, setResponse] = useState(null);

  const handleCalculate = async () => {
    try {
      const result = await axios.post("http://localhost:8000/iras9", {
        terms,
        premium,
        documentDate,
        clientID,
      });

      setResponse(result.data);
    } catch (error) {
      console.error("Error calculating:", error);
    }
  };

  const handleAddTerm = () => {
    setTerms([...terms, { startDate: "", endDate: "", ...initialTermValues }]);
  };

  const handleRemoveTerm = (index) => {
    const newTerms = [...terms];
    newTerms.splice(index, 1);
    setTerms(newTerms);
  };

  const handleTermChange = (index, property, value) => {
    const newTerms = [...terms];
    newTerms[index][property] = value;
    setTerms(newTerms);
  };

  const initialTermValues = {
    monthlyRent: 0,
    monthlyFurnitureFittings: 0,
    monthlyServiceMaintenance: 0,
    monthlyAdvertisingAndPromotion: 0,
    otherMonthlyCharges: 0,
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Stamp duty for Tenancy</h1>
      <div className="container mb-5 con-calculator">
        {terms.map((term, index) => (
          <div key={index} className="mt-3">
            <h4 className="mb-3">Term {index + 1}</h4>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label>Start Date:</label>
                <input
                  type="date"
                  className="form-control mt-2"
                  value={term.startDate}
                  onChange={(e) =>
                    handleTermChange(index, "startDate", e.target.value)
                  }
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>End Date:</label>
                <input
                  type="date"
                  className="form-control mt-2"
                  value={term.endDate}
                  onChange={(e) =>
                    handleTermChange(index, "endDate", e.target.value)
                  }
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label>Monthly Rent:</label>
                <input
                  type="number"
                  className="form-control mt-2"
                  value={term.monthlyRent}
                  onChange={(e) =>
                    handleTermChange(
                      index,
                      "monthlyRent",
                      parseFloat(e.target.value) || 0
                    )
                  }
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Monthly Furniture Fittings:</label>
                <input
                  type="number"
                  className="form-control mt-2"
                  value={term.monthlyFurnitureFittings}
                  onChange={(e) =>
                    handleTermChange(
                      index,
                      "monthlyFurnitureFittings",
                      parseFloat(e.target.value) || 0
                    )
                  }
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label>Monthly Service Maintenance:</label>
                <input
                  type="number"
                  className="form-control mt-2"
                  value={term.monthlyServiceMaintenance}
                  onChange={(e) =>
                    handleTermChange(
                      index,
                      "monthlyServiceMaintenance",
                      parseFloat(e.target.value) || 0
                    )
                  }
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Monthly Advertising And Promotion:</label>
                <input
                  type="number"
                  className="form-control mt-2"
                  value={term.monthlyAdvertisingAndPromotion}
                  onChange={(e) =>
                    handleTermChange(
                      index,
                      "monthlyAdvertisingAndPromotion",
                      parseFloat(e.target.value) || 0
                    )
                  }
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label>Other Monthly Charges:</label>
                <input
                  type="number"
                  className="form-control mt-2"
                  value={term.otherMonthlyCharges}
                  onChange={(e) =>
                    handleTermChange(
                      index,
                      "otherMonthlyCharges",
                      parseFloat(e.target.value) || 0
                    )
                  }
                />
              </div>
            </div>

            <button
              className="btn btn-danger"
              onClick={() => handleRemoveTerm(index)}
            >
              Remove Term
            </button>
          </div>
        ))}

        <button className="btn btn-primary mt-3" onClick={handleAddTerm}>
          Add Term
        </button>

        <div className="row mt-3">
          <div className="col-md-4 mb-3">
            <label>Premium:</label>
            <input
              type="number"
              className="form-control mt-2"
              value={premium}
              onChange={(e) => setPremium(parseFloat(e.target.value) || 0)}
            />
          </div>

          <div className="col-md-4 mb-3">
            <label>Document Date:</label>
            <input
              type="date"
              className="form-control mt-2"
              value={documentDate}
              onChange={(e) => setDocumentDate(e.target.value)}
            />
          </div>

          <div className="col-md-4 mb-3">
            <label>Client ID:</label>
            <input
              type="text"
              className="form-control mt-2"
              value={clientID}
              onChange={(e) => setClientID(e.target.value)}
            />
          </div>
        </div>

        <button className="btn btn-primary" onClick={handleCalculate}>
          Calculate
        </button>
      </div>

      <hr />

      {response && (
        <div className="mt-5">
          <h1>Calculation Result</h1>
          <div className="container my-3">
            <p>Stamp Duty: {response.data.stampDuty}</p>
            <p>AAR: {response.data.AAR}</p>
            <p>Dutiable Amount: {response.data.dutiableAmount}</p>
            <p>Duty on Premium: {response.data.dutyOnPremium}</p>
            <p>Lease Duty Rate: {response.data.leaseDutyRate}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default IrasApi9;
