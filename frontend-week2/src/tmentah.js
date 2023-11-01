<div className="container my-5">
  <h1 className="text-center mb-4">User Registration</h1>
  <div className="col-12">
    <div className="d-flex col-12">
      <div className="col-6 px-1 mx-auto">
        <div className="form-floating col-12 mb-3">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Name"
            required
          />
          <label htmlFor="name">Name</label>
        </div>
        <div className="form-floating col-12 mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email address"
            required
          />
          <label htmlFor="email">Email address</label>
        </div>
        <div className="form-floating col-12 mb-3">
          <select
            placeholder="Select a Role."
            id="roleId"
            className="form-control"
            required
          >
            <option value="" disabled>
              Select a Role
            </option>
            <option value="2">Member</option>
            <option value="3">Caregiver</option>
            <option value="4">Partner</option>
            <option value="5">Donor</option>
            <option value="6">Volunteer</option>
          </select>
          <label htmlFor="roleId">Which role do you want to be?</label>
        </div>
      </div>

      <div className="col-6 px-1 mx-auto">
        <div className="form-floating col-12 mb-3">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            required
          />
          <label htmlFor="password">Password</label>
        </div>
        <div className="form-floating col-12 mb-3">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            required
          />
          <label htmlFor="password">Password</label>
        </div>
      </div>
    </div>
  </div>
  <div className="row mt-5">
    <div className="col-md-4">
      <div className="right-side container">
        <img
          src={RegisterPic}
          alt="Register Pic"
          className=" img-fluid mt-5 me-5"
        />
      </div>
    </div>
    <div className="col-md-8">
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
              required
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
              required
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
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              id="first_name"
              value={userData.first_name}
              onChange={(e) =>
                setUserData({ ...userData, first_name: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              id="last_name"
              value={userData.last_name}
              onChange={(e) =>
                setUserData({ ...userData, last_name: e.target.value })
              }
              required
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
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Unit"
              id="unit"
              value={propertyData.unit}
              onChange={(e) =>
                setPropertyData({ ...propertyData, unit: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Block"
              id="block"
              value={propertyData.block}
              onChange={(e) =>
                setPropertyData({ ...propertyData, block: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Street"
              id="street"
              value={propertyData.street}
              onChange={(e) =>
                setPropertyData({ ...propertyData, street: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-3">
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
          </div>
          <div className="mb-3">
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
          </div>
          <div className="mb-3">
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
          </div>
          <div className="mb-3">
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
          </div>
          <div className="mb-3">
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
          </div>
          <div className="mb-3">
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
              <option value="Single Family Home">Single Family Home</option>
              <option value="Office Building">Office Building</option>
              <option value="Retail Space">Retail Space</option>
              <option value="Industrial Warehouse">Industrial Warehouse</option>
              <option value="Agricultural Land">Agricultural Land</option>
            </select>
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Unit Type"
              id="unit_type"
              value={propertyData.unit_type}
              onChange={(e) =>
                setPropertyData({
                  ...propertyData,
                  unit_type: e.target.value,
                })
              }
              required
            />
          </div>
          <div className="mb-3">
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
              required
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
          </div>
          <div className="mb-3">
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
          </div>

          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </div>
  </div>
</div>;
