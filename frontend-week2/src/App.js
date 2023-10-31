
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useEffect } from "react";
import RegistrationForm from "./RegisterForm";
import SimpleApi from "./simple";
import Api2 from "./API2";
import API1 from "./API1";

const App = () => {
  // useEffect(() => {
  //   registerUser()
  // }, [])
  return (
    <>
      <Router>
        <Routes>
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/simple" element={<SimpleApi />} />
          <Route path="/api2" element={<Api2 />} />
          <Route path="/" element={<API1 />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
