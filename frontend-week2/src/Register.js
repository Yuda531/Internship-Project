import React, { useState } from "react";
import axios from "axios";
import "./Register.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import API_KEY from "./Utils/apis";

const Register = () => {
  const [user, setUser] = useState({});
  const [property, setProperty] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      user: {
        ...user,
      },
      property: {
        ...property,
      },
    };

    try {
      await axios.post(
        "https://2jgj2p3m39.execute-api.ap-southeast-1.amazonaws.com/dev/register",
        data,
        {
          headers: {
            "api-key": API_KEY,
          },
        }
      );
      Swal.fire("Success", "Account registered successfully", "success");
      setUser({});
      setProperty({});
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Something went wrong", "error");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("user")) {
      setUser({ ...user, [name.split(".")[1]]: value });
    } else if (name.startsWith("property")) {
      setProperty({ ...property, [name.split(".")[1]]: value });
    }
  };

  return (
    <div className="register">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="user.username"
            id="username"
            value={user.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="user.password"
            id="password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="user.email"
            id="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            name="user.first_name"
            id="first_name"
            value={user.first_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            name="user.last_name"
            id="last_name"
            value={user.last_name}
            onChange={handleChange}
            required
          />
        </div>
        {/* Additional property fields go here */}
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
