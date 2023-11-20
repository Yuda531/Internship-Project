import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import IrasApi1 from "./components/IrasApi1";
import IrasApi2 from "./components/IrasApi2";
import IrasApi4 from "./components/IrasApi4";
import IrasApi7 from "./components/IrasApi7";
import IrasApi9 from "./components/IrasApi9"; // eslint-disable-next-line
import EngiselleLogo from "./image/engiselle_logo2.png"; // eslint-disable-next-line
import EngiselleLogoCube from "./image/EngiselleLogoCube.png";
import "./css/NavbarIrasApi.css";
import FooterRegister from "./components/FooterRegister";
import { Button } from "primereact/button";

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
                  selectedApi === "IrasApi1" ? "active" : ""
                }`}
              >
                <button
                  className="nav-link button-nav"
                  onClick={() => handleApiSelection("IrasApi1")}
                >
                  Public Listed Company Shares
                </button>
              </li>
              <li
                className={`nav-item ${
                  selectedApi === "IrasApi2" ? "active" : ""
                }`}
              >
                <button
                  className="nav-link button-nav"
                  onClick={() => handleApiSelection("IrasApi2")}
                >
                  Industrial Property
                </button>
              </li>
              <li
                className={`nav-item ${
                  selectedApi === "IrasApi4" ? "active" : ""
                }`}
              >
                <button
                  className="nav-link button-nav"
                  onClick={() => handleApiSelection("IrasApi4")}
                >
                  Private Company Shares Transfer
                </button>
              </li>
              <li
                className={`nav-item ${
                  selectedApi === "IrasApi7" ? "active" : ""
                }`}
              >
                <button
                  className="nav-link button-nav"
                  onClick={() => handleApiSelection("IrasApi7")}
                >
                  Residential Seller
                </button>
              </li>
              <li
                className={`nav-item ${
                  selectedApi === "IrasApi9" ? "active" : ""
                }`}
              >
                <button
                  className="nav-link button-nav"
                  onClick={() => handleApiSelection("IrasApi9")}
                >
                  Newly Incorporated Private Companies
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
              <h1 className="page-title text-center ">IRAS API CALCULATOR</h1>
            </div>
            <div className="d-flex flex-wrap justify-content-between gap-3 mt-5">
              <Button label="Public Listed Company Shares"  className={`rounded ${
                  selectedApi === "IrasApi1" ? "active" : ""
                }`}
                onClick={() => handleApiSelection("IrasApi1")}/>
              <Button label="Industrial Property"  className={`rounded ${
                  selectedApi === "IrasApi2" ? "active" : ""
                }`}
                onClick={() => handleApiSelection("IrasApi2")}/>
              <Button label="Private Company Shares Transfer"  className={`rounded ${
                  selectedApi === "IrasApi4" ? "active" : ""
                }`}
                onClick={() => handleApiSelection("IrasApi4")}/>
              <Button label="Residential Seller"  className={`rounded ${
                  selectedApi === "IrasApi7" ? "active" : ""
                }`}
                onClick={() => handleApiSelection("IrasApi7")}/>
              <Button label="Newly Incorporated Private Companies"  className={`rounded ${
                  selectedApi === "IrasApi9" ? "active" : ""
                }`}
                onClick={() => handleApiSelection("IrasApi9")}/>
            </div>
          </div>
        </div>

        {selectedApi === "IrasApi1" && <IrasApi1 />}
        {selectedApi === "IrasApi2" && <IrasApi2 />}
        {selectedApi === "IrasApi4" && <IrasApi4 />}
        {selectedApi === "IrasApi7" && <IrasApi7 />}
        {selectedApi === "IrasApi9" && <IrasApi9 />}
      </div>
      <FooterRegister />
    </>
  );
};

export default IrasApiCal;
