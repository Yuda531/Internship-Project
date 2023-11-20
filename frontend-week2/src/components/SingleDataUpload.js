// RegistrationForm.js

import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css"; // eslint-disable-next-line
import EngiselleLogo from "../image/engiselle_logo.png"; // eslint-disable-next-line
import RegisterPic3 from "../image/Register3.png";

function SingleDataUpload() {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    mobile: "",
    phone: "",
    first_name: "",
    last_name: "",
    date_of_birth: "",
    email: "",
    is_active: true,
    manager_id: "",
    account_type: "user",
  });

  const [propertyData, setPropertyData] = useState({
    building_name: "",
    unit: "",
    block: "",
    street: "",
    district: "",
    country: "",
    postal_code: "",
    property_group: "",
    property_sub_group: "",
    property_type: "",
    unit_type: "",
    toilets: "",
    utility_room: "false",
    balcony: "false",
    lease_period: "",
    lease_start_date: "",
    relationship: "Owner",
    ownership_type: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      user: { ...userData },
      property: { ...propertyData },
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/api1",
        requestData
      );
      console.log(response.requestData);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Account Register Successfully!",
      });
    } catch (error) {
      console.error("Gagal mengirim permintaan:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to Create The Account. Please try again later!",
      });
    }
  };

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-center align-items-center">
        {/* <img src={EngiselleLogo} alt="Engiselle Logo" className="img-fluid" /> */}
      </div>
      <div className="row mt-5 left-image">
        <div className="col-lg-5 d-none d-md-block">
          <div className="right-side container"></div>
        </div>
        <div className="col-lg-7 col-md-12">
          <div className="left-side container rounded-3">
            <form onSubmit={handleSubmit}>
              <div className="container mb-5">
                <h1 className="text-center mb-4 display-3">
                  Single Data Upload
                </h1>
                <hr className="border-black" />
                <h3 className="my-3">User Data</h3>
                <div className="d-flex col-12">
                  <div className="col-6 px-1 mx-auto">
                    <div className="form-floating col-12 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        id="username"
                        value={userData.username}
                        onChange={(e) =>
                          setUserData({ ...userData, username: e.target.value })
                        }
                        required
                      />
                      <label htmlFor="username">Username</label>
                    </div>
                    <div className="form-floating col-12 mb-3">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        id="password"
                        value={userData.password}
                        onChange={(e) =>
                          setUserData({ ...userData, password: e.target.value })
                        }
                        required
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                    <div className="form-floating col-12 mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        id="email"
                        value={userData.email}
                        onChange={(e) =>
                          setUserData({ ...userData, email: e.target.value })
                        }
                        required
                      />
                      <label htmlFor="email">Email Address</label>
                    </div>
                    <div className="form-floating col-12 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        id="first_name"
                        value={userData.first_name}
                        onChange={(e) =>
                          setUserData({
                            ...userData,
                            first_name: e.target.value,
                          })
                        }
                        required
                      />
                      <label htmlFor="first_name">First Name</label>
                    </div>
                    <div className="form-floating col-12 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        id="last_name"
                        value={userData.last_name}
                        onChange={(e) =>
                          setUserData({
                            ...userData,
                            last_name: e.target.value,
                          })
                        }
                        required
                      />
                      <label htmlFor="last_name">Last Name</label>
                    </div>
                  </div>

                  <div className="col-6 px-1 mx-auto">
                    <div className="form-floating col-12 mb-3">
                      <input
                        type="date"
                        className="form-control"
                        placeholder="Date of Birth"
                        id="date_of_birth"
                        value={userData.date_of_birth}
                        onChange={(e) =>
                          setUserData({
                            ...userData,
                            date_of_birth: e.target.value,
                          })
                        }
                      />
                      <label htmlFor="date_of_birth">Date of Birth</label>
                    </div>
                    <div className="form-floating col-12 mb-3">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Mobile"
                        id="mobile"
                        value={userData.mobile}
                        onChange={(e) =>
                          setUserData({
                            ...userData,
                            mobile: e.target.value,
                          })
                        }
                      />
                      <label htmlFor="mobile">Mobile</label>
                    </div>
                    <div className="form-floating col-12 mb-3">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Phone"
                        id="phone"
                        value={userData.phone}
                        onChange={(e) =>
                          setUserData({
                            ...userData,
                            phone: e.target.value,
                          })
                        }
                      />
                      <label htmlFor="phone">Phone</label>
                    </div>
                    <div className="form-floating col-12 mb-3">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Manager Id"
                        id="manager_id"
                        value={userData.manager_id}
                        onChange={(e) =>
                          setUserData({
                            ...userData,
                            manager_id: e.target.value,
                          })
                        }
                      />
                      <label htmlFor="manager_id">Manager Id</label>
                    </div>
                  </div>
                </div>

                <h3 className="my-3">Property Data</h3>
                <div className="d-flex col-12">
                  <div className="col-6 px-1 mx-auto">
                    <div className="form-floating col-12 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Building Name"
                        id="building_name"
                        value={propertyData.building_name}
                        onChange={(e) =>
                          setPropertyData({
                            ...propertyData,
                            building_name: e.target.value,
                          })
                        }
                        required
                      />
                      <label htmlFor="building_name">Building Name</label>
                    </div>
                    <div className="form-floating col-12 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Unit"
                        id="unit"
                        value={propertyData.unit}
                        onChange={(e) =>
                          setPropertyData({
                            ...propertyData,
                            unit: e.target.value,
                          })
                        }
                        required
                      />
                      <label htmlFor="unit">Unit</label>
                    </div>
                    <div className="form-floating col-12 mb-3">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="District"
                        id="district"
                        value={propertyData.district}
                        onChange={(e) =>
                          setPropertyData({
                            ...propertyData,
                            district: e.target.value,
                          })
                        }
                        required
                      />
                      <label htmlFor="district">District</label>
                    </div>
                    <div className="form-floating col-12 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Postal Code"
                        id="postal_code"
                        value={propertyData.postal_code}
                        onChange={(e) =>
                          setPropertyData({
                            ...propertyData,
                            postal_code: e.target.value,
                          })
                        }
                        required
                      />
                      <label htmlFor="postal_code">Postal Code</label>
                    </div>
                  </div>

                  <div className="col-6 px-1 mx-auto">
                    <div className="form-floating col-12 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Block"
                        id="block"
                        value={propertyData.block}
                        onChange={(e) =>
                          setPropertyData({
                            ...propertyData,
                            block: e.target.value,
                          })
                        }
                        required
                      />
                      <label htmlFor="block">Block</label>
                    </div>
                    <div className="form-floating col-12 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Street"
                        id="street"
                        value={propertyData.street}
                        onChange={(e) =>
                          setPropertyData({
                            ...propertyData,
                            street: e.target.value,
                          })
                        }
                        required
                      />
                      <label htmlFor="street">Street</label>
                    </div>
                    <div className="form-floating col-12 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Country"
                        id="country"
                        value={propertyData.country}
                        onChange={(e) =>
                          setPropertyData({
                            ...propertyData,
                            country: e.target.value,
                          })
                        }
                        required
                      />
                      <label htmlFor="country">Country</label>
                    </div>
                  </div>
                </div>
                <div className="d-flex col-12">
                  <div className="col-6 px-1 mx-auto">
                    <div className="form-floating col-12 mb-3">
                      <select
                        className="form-control"
                        id="property_group"
                        value={propertyData.property_group}
                        onChange={(e) =>
                          setPropertyData({
                            ...propertyData,
                            property_group: e.target.value,
                          })
                        }
                        required
                      >
                        <option selected>Select Property Group</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Residential">Residential</option>
                        <option value="Industrial">Industrial</option>
                        <option value="Agricultural">Agricultural</option>
                        <option value="Mixed-Use">Mixed-Use</option>
                        <option value="Recreational">Recreational</option>
                      </select>
                      <label htmlFor="property_group">Property Group</label>
                    </div>
                    <div className="form-floating col-12 mb-3">
                      <select
                        className="form-control"
                        id="property_sub_group"
                        value={propertyData.property_sub_group}
                        onChange={(e) =>
                          setPropertyData({
                            ...propertyData,
                            property_sub_group: e.target.value,
                          })
                        }
                        required
                      >
                        <option selected>Select Property Sub Group</option>
                        <option value="Office">Office</option>
                        <option value="Retail">Retail</option>
                        <option value="Warehouse">Warehouse</option>
                        <option value="Multifamily">Multifamily</option>
                        <option value="Hotel">Hotel</option>
                        <option value="Restaurant">Restaurant</option>
                        <option value="Manufacturing">Manufacturing</option>
                      </select>
                      <label htmlFor="property_sub_group">
                        Property Sub Group
                      </label>
                    </div>
                    <div className="form-floating col-12 mb-3">
                      <select
                        className="form-control"
                        id="property_type"
                        value={propertyData.property_type}
                        onChange={(e) =>
                          setPropertyData({
                            ...propertyData,
                            property_type: e.target.value,
                          })
                        }
                        required
                      >
                        <option selected>Select Property Type</option>
                        <option value="Condominium">Condominium</option>
                        <option value="Townhouse">Townhouse</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Single Family Home">
                          Single Family Home
                        </option>
                        <option value="Office Building">Office Building</option>
                        <option value="Retail Space">Retail Space</option>
                        <option value="Industrial Warehouse">
                          Industrial Warehouse
                        </option>
                        <option value="Agricultural Land">
                          Agricultural Land
                        </option>
                      </select>
                      <label htmlFor="property_type">Propery Type</label>
                    </div>
                  </div>

                  <div className="col-6 px-1 mx-auto">
                    <div className="form-floating col-12 mb-3">
                      <select
                        className="form-control"
                        value={propertyData.ownership_type}
                        id="ownership_type"
                        onChange={(e) =>
                          setPropertyData({
                            ...propertyData,
                            ownership_type: e.target.value,
                          })
                        }
                        required
                      >
                        <option selected>Select Ownership Type</option>
                        <option value="Rented">Rented</option>
                        <option value="Not Rented">Not Rented</option>
                      </select>
                      <label htmlFor="ownership_type">Ownership Type</label>
                    </div>
                    <div className="form-floating col-12 mb-3">
                      <select
                        className="form-control"
                        id="unit_type"
                        value={propertyData.unit_type}
                        onChange={(e) =>
                          setPropertyData({
                            ...propertyData,
                            unit_type: e.target.value,
                          })
                        }
                        required
                      >
                        <option value="" selected>
                          Select Unit Type
                        </option>
                        <option value="Lesser than 300sqft">
                          Lesser than 300sqft
                        </option>
                        <option value="301sqft - 1000sqft">
                          301sqft - 1000sqft
                        </option>
                        <option value="1001sqft - 2000sqft">
                          1001sqft - 2000sqft
                        </option>
                        <option value="2001sqft - 4000sqft">
                          2001sqft - 4000sqft
                        </option>
                        <option value="4001sqft - 8000sqft">
                          4001sqft - 8000sqft
                        </option>
                        <option value="Greater than 800sqft">
                          Greater than 800sqft
                        </option>
                      </select>

                      <label htmlFor="unit_type">Unit Type</label>
                    </div>
                  </div>
                </div>
                <div className="d-flex col-12">
                  <div className="col-6 px-1 mx-auto">
                    <div className="form-floating col-12 mb-3">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Toilets"
                        id="toilets"
                        value={propertyData.toilets}
                        onChange={(e) =>
                          setPropertyData({
                            ...propertyData,
                            toilets: parseInt(e.target.value, 10),
                          })
                        }
                        required
                      />
                      <label htmlFor="toilets">Toilets</label>
                    </div>
                    <div className="form-check col-12 my-3">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        // checked={propertyData.utility_room}
                        onChange={(e) =>
                          setPropertyData({
                            ...propertyData,
                            utility_room: e.target.checked,
                          })
                        }
                        id="utilityRoomCheckbox"
                      />
                      <label className="form-check-label">Utility Room</label>
                    </div>
                    <div className="form-check col-12 mb-3">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        // checked={propertyData.balcony}
                        onChange={(e) =>
                          setPropertyData({
                            ...propertyData,
                            balcony: e.target.checked,
                          })
                        }
                        id="balconyCheckbox"
                      />
                      <label className="form-check-label">Balcony</label>
                    </div>
                  </div>

                  <div className="col-6 px-1 mx-auto">
                    <div className="form-floating col-12 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Lease Period"
                        id="lease_period"
                        value={propertyData.lease_period}
                        onChange={(e) =>
                          setPropertyData({
                            ...propertyData,
                            lease_period: e.target.value,
                          })
                        }
                        required
                      />
                      <label htmlFor="lease_period">Lease Period</label>
                    </div>
                    <div className="form-floating col-12 mb-3">
                      <input
                        type="date"
                        className="form-control"
                        placeholder="Lease Start Date"
                        id="lease_start_date"
                        value={propertyData.lease_start_date}
                        onChange={(e) =>
                          setPropertyData({
                            ...propertyData,
                            lease_start_date: e.target.value,
                          })
                        }
                        required
                      />
                      <label htmlFor="lease_start_date">Lease Start Date</label>
                    </div>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary col-12">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleDataUpload;
