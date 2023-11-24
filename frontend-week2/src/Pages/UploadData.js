import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // eslint-disable-next-line
import EngiselleLogo from "../image/engiselle_logo2.png"; // eslint-disable-next-line
import EngiselleLogoCube from "../image/EngiselleLogoCube.png";
import "../css/NavbarIrasApi.css";
import FooterRegister from "../components/FooterRegister";
import MassDataUpload from "../components/MassDataUpload";
import SingleDataUpload from "../components/SingleDataUpload";
import { Button } from "primereact/button";

const UploadDataAWS = () => {
  const [selectedApi, setSelectedApi] = useState(null);

  const handleApiSelection = (api) => {
    setSelectedApi(api);
  };

  return (
    <>
      <nav class="navbar fixed-top bg-white ">
        <div class="container">
          <a class="navbar-brand" href="#">
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
                  selectedApi === "MassDataUpload" ? "active" : ""
                }`}
              >
                <button
                  className="nav-link button-nav"
                  onClick={() => handleApiSelection("MassDataUpload")}
                >
                  Mass Data Upload
                </button>
              </li>
              <li
                className={`nav-item ${
                  selectedApi === "SingleDataUpload" ? "active" : ""
                }`}
              >
                <button
                  className="nav-link button-nav"
                  onClick={() => handleApiSelection("SingleDataUpload")}
                >
                  Single Data Upload
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid mt-5">
        <div className="page-header d-flex justify-content-center align-items-center">
          <div className="dcell">
            <div className="container my-5">
              <h1 className="page-title text-center ">UPLOAD CUSTOMER DATA</h1>
            </div>
            <div className="d-flex justify-content-between gap-3">
              <Button
                label="Mass Data Upload"
                className={`rounded ${
                  selectedApi === "MassDataUpload" ? "active" : ""
                }`}
                onClick={() => handleApiSelection("MassDataUpload")}
              />
              <Button
                label="Single Data Upload"
                className={`rounded ${
                  selectedApi === "SingleDataUpload" ? "active" : ""
                }`}
                onClick={() => handleApiSelection("SingleDataUpload")}
              />
            </div>
          </div>
        </div>

        {selectedApi === "MassDataUpload" && <MassDataUpload />}
        {selectedApi === "SingleDataUpload" && <SingleDataUpload />}
      </div>
      <FooterRegister />
    </>
  );
};

export default UploadDataAWS;
