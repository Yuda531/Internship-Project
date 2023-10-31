
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useEffect } from "react";
import RegistrationForm from "./RegisterForm";

const App = () => {
  // useEffect(() => {
  //   registerUser()
  // }, [])
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<RegistrationForm />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
