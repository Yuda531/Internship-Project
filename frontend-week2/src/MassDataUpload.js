import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import axios from "axios";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";

const MassDataUpload = () => {
  const [fileData, setFileData] = useState([]); // eslint-disable-next-line
  const [file, setFile] = useState(null);
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

  const handleUpload = async () => {
    fileData.pop();

    for (let i = 0; i < fileData.length; i++) {
      let user = {
        username: fileData[i]["username"],
        password: fileData[i]["password"],
        email: fileData[i]["email"],
        first_name: fileData[i]["first_name"],
        last_name: fileData[i]["last_name"],
        date_of_birth: fileData[i]["date_of_birth"],
        mobile: fileData[i]["mobile"],
        phone: fileData[i]["phone"],
        account_type: fileData[i]["account_type"],
        is_active: fileData[i]["is_active"],
        manager_id: fileData[i]["manager_id"],
      };

      let property = {
        building_name: fileData[i]["building_name"],
        unit: fileData[i]["unit"],
        block: fileData[i]["block"],
        street: fileData[i]["street"],
        district: fileData[i]["district"],
        country: fileData[i]["country"],
        postal_code: fileData[i]["postal_code"],
        property_group: fileData[i]["property_group"],
        property_sub_group: fileData[i]["property_sub_group"],
        property_type: fileData[i]["property_type"],
        unit_type: fileData[i]["unit_type"],
        toilets: fileData[i]["toilets"],
        utility_room: fileData[i]["utility_room"],
        balcony: fileData[i]["balcony"],
        lease_period: fileData[i]["lease_period"],
        lease_start_date: fileData[i]["lease_start_date"],
        relationship: fileData[i]["relationship"],
        ownership_type: fileData[i]["ownership_type"],
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
    <div className="container mt-5">
      <h1 className="text-center">CSV DATA UPLOAD</h1>
      <input
        className="form-control mb-3 w-50"
        type="file"
        onChange={handleFileChange}
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
  );
};

export default MassDataUpload;