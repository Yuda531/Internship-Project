
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from "./RegisterForm";
import MassDataUpload from "./MassDataUpload";

const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MassDataUpload />} />
          <Route path="/register" element={<RegistrationForm />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
