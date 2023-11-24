import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // eslint-disable-next-line
import EngiselleLogo from "../image/engiselle_logo2.png"; // eslint-disable-next-line
import EngiselleLogoCube from "../image/EngiselleLogoCube.png";
import { Button } from "primereact/button";
import ChartBasic from "../components/PrimeReactChart/ChartBasic";
import ChartPie from "../components/PrimeReactChart/ChartPie";
import ChartVerticalBar from "../components/PrimeReactChart/ChartVerticalBar";
import ChartLine from "../components/PrimeReactChart/ChartLine";

const IrasApiCal = () => {
  const [selectedApi, setSelectedApi] = useState(null);

  const handleApiSelection = (api) => {
    setSelectedApi(api);
  };

  return (
    <>
      <nav class="navbar fixed-top bg-white ">
        <div class="container">
          <a class="navbar-brand" href="/irasApiCal">
            <img
              src={EngiselleLogo}
              alt=""
              className=" img-fluid me-5 "
              style={{ height: "55px", objectFit: "contain" }}
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav d-flex justify-content-between">
              <li
                className={`nav-item ${
                  selectedApi === "ChartBasic" ? "active" : ""
                }`}
              >
                <button
                  className="nav-link button-nav"
                  onClick={() => handleApiSelection("ChartBasic")}
                >
                  Chart Basic
                </button>
              </li>
              <li
                className={`nav-item ${
                  selectedApi === "ChartPie" ? "active" : ""
                }`}
              >
                <button
                  className="nav-link button-nav"
                  onClick={() => handleApiSelection("ChartPie")}
                >
                  Chart Pie
                </button>
              </li>
              <li
                className={`nav-item ${
                  selectedApi === "ChartVerticalBar" ? "active" : ""
                }`}
              >
                <button
                  className="nav-link button-nav"
                  onClick={() => handleApiSelection("ChartVerticalBar")}
                >
                  Chart Vertical Bar
                </button>
              </li>
              <li
                className={`nav-item ${
                  selectedApi === "ChartLine" ? "active" : ""
                }`}
              >
                <button
                  className="nav-link button-nav"
                  onClick={() => handleApiSelection("ChartLine")}
                >
                  Chart Line
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid mt-5">
        <div className="page-header d-flex justify-content-center align-items-center">
          <div className="dcell">
            <div className="container">
              <h1 className="page-title text-center ">
                Learn Chart with PrimeReact
              </h1>
            </div>
            <div className="d-flex flex-wrap justify-content-between gap-3 mt-5">
              <Button
                label="Chart Basic"
                className={`rounded ${
                  selectedApi === "ChartBasic" ? "active" : ""
                }`}
                onClick={() => handleApiSelection("ChartBasic")}
              />
              <Button
                label="Chart Pie"
                className={`rounded ${
                  selectedApi === "ChartPie" ? "active" : ""
                }`}
                onClick={() => handleApiSelection("ChartPie")}
              />
              <Button
                label="Chart Vertical Bar"
                className={`rounded ${
                  selectedApi === "ChartVerticalBar" ? "active" : ""
                }`}
                onClick={() => handleApiSelection("ChartVerticalBar")}
              />
              <Button
                label="Chart Line"
                className={`rounded ${
                  selectedApi === "ChartLine" ? "active" : ""
                }`}
                onClick={() => handleApiSelection("ChartLine")}
              />
            </div>
          </div>
        </div>

        {selectedApi === "ChartBasic" && <ChartBasic />}
        {selectedApi === "ChartPie" && <ChartPie />}
        {selectedApi === "ChartVerticalBar" && <ChartVerticalBar />}
        {selectedApi === "ChartLine" && <ChartLine />}
      </div>
    </>
  );
};

export default IrasApiCal;
