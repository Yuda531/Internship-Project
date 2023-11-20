import Papa from "papaparse";
import axios from "axios";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { ProgressSpinner } from "primereact/progressspinner";
import "../css/NavbarIrasApi.css";

const MassDataUpload = () => {
  const [fileData, setFileData] = useState([]); // eslint-disable-next-line
  const [file, setFile] = useState(null);
  const [dataFile, setDataFile] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    Papa.parse(selectedFile, {
      complete: (result) => {
        let resultData = result.data;
        resultData.pop();
        setFileData(resultData);
      },
      header: true,
    });
  };

  const handleChange = (event) => {
    handleFileChange(event);
    handleDataSubmit(event);
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

  const handleUpload = async () => {
    setLoading(true);

    dataFile.pop();

    let successData = 0;

    try {
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
        try {
          const response = await axios.post(
            "http://localhost:8000/apiAws",
            data
          );
          successData++;
          console.log(successData);
          console.log(data);
        } catch (error) {
          if (
            error.response &&
            error.response.data &&
            error.response.data.code === "409"
          ) {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: error.response.data.error,
            });
            break;
          } else {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "Failed to Insert Data!",
            });
            console.error("Error:", error);
            break;
          }
        }
      }

      if (successData === dataFile.length) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "All Data Successfully Registered",
        });
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false); 
    }

    // for (let i = 0; i < dataFile.length; i++) {
    //   let user = {
    //     username: dataFile[i]["username"],
    //     password: dataFile[i]["password"],
    //     email: dataFile[i]["email"],
    //     first_name: dataFile[i]["first_name"],
    //     last_name: dataFile[i]["last_name"],
    //     date_of_birth: dataFile[i]["date_of_birth"],
    //     mobile: dataFile[i]["mobile"],
    //     phone: dataFile[i]["phone"],
    //     account_type: dataFile[i]["account_type"],
    //     is_active: dataFile[i]["is_active"],
    //     manager_id: dataFile[i]["manager_id"],
    //   };

    //   let property = {
    //     building_name: dataFile[i]["building_name"],
    //     unit: dataFile[i]["unit"],
    //     block: dataFile[i]["block"],
    //     street: dataFile[i]["street"],
    //     district: dataFile[i]["district"],
    //     country: dataFile[i]["country"],
    //     postal_code: dataFile[i]["postal_code"],
    //     property_group: dataFile[i]["property_group"],
    //     property_sub_group: dataFile[i]["property_sub_group"],
    //     property_type: dataFile[i]["property_type"],
    //     unit_type: dataFile[i]["unit_type"],
    //     toilets: dataFile[i]["toilets"],
    //     utility_room: dataFile[i]["utility_room"],
    //     balcony: dataFile[i]["balcony"],
    //     lease_period: dataFile[i]["lease_period"],
    //     lease_start_date: dataFile[i]["lease_start_date"],
    //     relationship: dataFile[i]["relationship"],
    //     ownership_type: dataFile[i]["ownership_type"],
    //   };

    //   let data = { user, property };

    //   try {
    //     const response = await axios.post("http://localhost:8000/apiAws", data);
    //     successData++;
    //     console.log(successData);
    //     console.log(data);
    //   } catch (error) {
    //     if (
    //       error.response &&
    //       error.response.data &&
    //       error.response.data.code === "409"
    //     ) {
    //       Swal.fire({
    //         icon: "error",
    //         title: "Error",
    //         text: error.response.data.error,
    //       });
    //       break;
    //     } else {
    //       Swal.fire({
    //         icon: "error",
    //         title: "Error",
    //         text: "Failed to Insert Data!",
    //       });
    //       console.error("Error:", error);
    //       break;
    //     }
    //   }
    //   if (successData === dataFile.length) {
    //     Swal.fire({
    //       icon: "success",
    //       title: "Success",
    //       text: "All Data Successfully Registered",
    //     });
    //   }
    // }
  };

  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center mb-4 mt-2 display-5 fw-semibold ">
          Mass Data Upload
        </h1>
        <hr />
      </div>
      <div className="container my-5">
        <input
          className="form-control mb-3 w-25 mb-4"
          type="file"
          onChange={handleChange}
          accept=".csv"
        />

        <div className="card mb-4">
          <DataTable
            value={fileData}
            paginator
            rows={5}
            rowsPerPageOptions={[5, 10, 25, 50, 100]}
            scrollable
            scrollHeight="600px"
            style={{ minWidth: "50rem" }}
          >
            {fileData.map((row, index) => {
              let key = Object.keys(row)[index];
              if (key !== undefined) {
                return (
                  <Column
                    field={key}
                    header={key}
                    style={{ width: "25%" }}
                  ></Column>
                );
              }
            })}
          </DataTable>
        </div>
        <div className="card col-3 mt-3 flex flex-wrap justify-content-center gap-3">
          {loading ? (
            <ProgressSpinner style={{ width: '50px', height: '50px' }} />
          ) : (
            <Button label="Submit" icon="pi pi-check" onClick={handleUpload} />
          )}
        </div>
      </div>
    </>
  );
};

export default MassDataUpload;
