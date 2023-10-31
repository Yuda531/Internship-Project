// RegistrationForm.js

import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";

function RegistrationForm() {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    email: "",
    first_name: "",
    last_name: "",
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
    toilets: 0,
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
      console.error('Gagal mengirim permintaan:', error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to Create The Account. Please try again later!",
      });
    }
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">User Registration</h1>
      <div className="row mt-5">
        <div className="col-md-6">
          <div className="left-side container">
            <form onSubmit={handleSubmit}>
            <h3>User Data</h3>
              <div className="mb-3">
                {/* User Data */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={userData.username}
                  onChange={(e) =>
                    setUserData({ ...userData, username: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={userData.password}
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={userData.email}
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  value={userData.first_name}
                  onChange={(e) =>
                    setUserData({ ...userData, first_name: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  value={userData.last_name}
                  onChange={(e) =>
                    setUserData({ ...userData, last_name: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Account Type"
                  value={userData.account_type}
                  onChange={(e) =>
                    setUserData({ ...userData, account_type: e.target.value })
                  }
                  disabled
                />
              </div>
                
              <h3 className="my-3">Property Data</h3>  
              {/* Property Data */}
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Building Name"
                  value={propertyData.building_name}
                  onChange={(e) =>
                    setPropertyData({
                      ...propertyData,
                      building_name: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Unit"
                  value={propertyData.unit}
                  onChange={(e) =>
                    setPropertyData({ ...propertyData, unit: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Block"
                  value={propertyData.block}
                  onChange={(e) =>
                    setPropertyData({ ...propertyData, block: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Street"
                  value={propertyData.street}
                  onChange={(e) =>
                    setPropertyData({ ...propertyData, street: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="District"
                  value={propertyData.district}
                  onChange={(e) =>
                    setPropertyData({
                      ...propertyData,
                      district: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Country"
                  value={propertyData.country}
                  onChange={(e) =>
                    setPropertyData({
                      ...propertyData,
                      country: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Postal Code"
                  value={propertyData.postal_code}
                  onChange={(e) =>
                    setPropertyData({
                      ...propertyData,
                      postal_code: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Property Group"
                  value={propertyData.property_group}
                  onChange={(e) =>
                    setPropertyData({
                      ...propertyData,
                      property_group: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Property Sub Group"
                  value={propertyData.property_sub_group}
                  onChange={(e) =>
                    setPropertyData({
                      ...propertyData,
                      property_sub_group: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Property Type"
                  value={propertyData.property_type}
                  onChange={(e) =>
                    setPropertyData({
                      ...propertyData,
                      property_type: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Unit Type"
                  value={propertyData.unit_type}
                  onChange={(e) =>
                    setPropertyData({
                      ...propertyData,
                      unit_type: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Toilets"
                  value={propertyData.toilets}
                  onChange={(e) =>
                    setPropertyData({
                      ...propertyData,
                      toilets: parseInt(e.target.value, 10),
                    })
                  }
                />
              </div>
              <div className="mb-3 form-check">
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
              <div className="mb-3 form-check">
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

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Lease Period"
                  value={propertyData.lease_period}
                  onChange={(e) =>
                    setPropertyData({
                      ...propertyData,
                      lease_period: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <input
                  type="date"
                  className="form-control"
                  placeholder="Lease Start Date"
                  value={propertyData.lease_start_date}
                  onChange={(e) =>
                    setPropertyData({
                      ...propertyData,
                      lease_start_date: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Relationship"
                  value={propertyData.relationship}
                  onChange={(e) =>
                    setPropertyData({
                      ...propertyData,
                      relationship: e.target.value,
                    })
                  }
                  disabled
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ownership Type"
                  value={propertyData.ownership_type}
                  onChange={(e) =>
                    setPropertyData({
                      ...propertyData,
                      ownership_type: e.target.value,
                    })
                  }
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <div className="right-side container">
            <h1>Testing</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
