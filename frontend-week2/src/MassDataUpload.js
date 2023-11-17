import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import axios from "axios";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import FooterRegister from "./components/FooterRegister";

const MassDataUpload = () => {
  const [fileData, setFileData] = useState([]); // eslint-disable-next-line
  const [file, setFile] = useState(null);
  const [dataFile, setDataFile] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // eslint-disable-next-line
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [paginatedData, setPaginatedData] = useState([]);



  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    Papa.parse(selectedFile, {
      complete: (result) => {
        const data = result.data.slice(0, -1); 
        setFileData(data);
        setCurrentPage(1);
        setPaginatedData(data.slice(0, itemsPerPage));
      },
      header: true,
    });
  };

  const handleDataSubmit = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    Papa.parse(selectedFile, {
      complete: (result) => {
        setDataFile(result.data);
      },
      header: true,
    });
  };

  const handleChange = (event) => {
    handleFileChange(event);
    handleDataSubmit(event);
  };

  const handleUpload = async () => {
    dataFile.pop();

    for (let i = 0; i < dataFile.length; i++) {
      let user = {
        username: dataFile[i]["username"],
        password: dataFile[i]["password"],
        email: dataFile[i]["email"],
        first_name: dataFile[i]["first_name"],
        last_name: dataFile[i]["last_name"],
        date_of_birth: dataFile[i]["date_of_birth"],
        mobile: dataFile[i]["mobile"],
        phone: dataFile[i]["phone"],
        account_type: dataFile[i]["account_type"],
        is_active: dataFile[i]["is_active"],
        manager_id: dataFile[i]["manager_id"],
      };

      let property = {
        building_name: dataFile[i]["building_name"],
        unit: dataFile[i]["unit"],
        block: dataFile[i]["block"],
        street: dataFile[i]["street"],
        district: dataFile[i]["district"],
        country: dataFile[i]["country"],
        postal_code: dataFile[i]["postal_code"],
        property_group: dataFile[i]["property_group"],
        property_sub_group: dataFile[i]["property_sub_group"],
        property_type: dataFile[i]["property_type"],
        unit_type: dataFile[i]["unit_type"],
        toilets: dataFile[i]["toilets"],
        utility_room: dataFile[i]["utility_room"],
        balcony: dataFile[i]["balcony"],
        lease_period: dataFile[i]["lease_period"],
        lease_start_date: dataFile[i]["lease_start_date"],
        relationship: dataFile[i]["relationship"],
        ownership_type: dataFile[i]["ownership_type"],
      };

      let data = { user, property };
      console.log(data);

      try {
        const response = await axios.post("http://localhost:8000/apiAws", data);
        console.log("Data berhasil diunggah:", response.data);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Data Successfully Registered",
        });
      } catch (error) {
        let errorCode = error.response.data.code;

        if (errorCode === 409) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Please check your username/email or A property with this unit number and postal code already exits !",
          });
          // break;
        }
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to Insert Data!",
        });
        console.error("Error:", error);
      }
    }
  };
  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    setPaginatedData(fileData.slice(indexOfFirstItem, indexOfLastItem));
  }, [fileData, currentPage, itemsPerPage]);

  const displayData = () => {
    return paginatedData.map((row, index) => (
      <tr key={index}>
        {Object.keys(row).map((key) => (
          <td key={key}>
            {key === "password" ? "*".repeat(row[key].length) : row[key]}
          </td>
        ))}
      </tr>
    ));
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(fileData.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <nav>
        <ul className="pagination mt-4">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <button onClick={() => paginate(number)} className="page-link">
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  return (
    <>
      <div className="container my-5">
      <h1 className="text-center mb-3">CSV DATA UPLOAD</h1>
      <input
        className="form-control mb-3 w-50"
        type="file"
        onChange={handleChange}
        accept=".csv"
      />
      {fileData.length > 0 && (
        <div
          className="table-responsive"
          style={{ maxHeight: "500px", overflowY: "auto" }}
        >
          <table className="table table-bordered table-hover">
            <thead className="thead-light sticky-top">
              <tr>
                {Object.keys(fileData[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>{displayData()}</tbody>
          </table>
        </div>
      )}
      {fileData.length > itemsPerPage && renderPagination()}
      <button className="btn btn-primary my-3" onClick={handleUpload}>
        Upload
      </button>
    </div>
    <FooterRegister />
    </>
  );
};

export default MassDataUpload;