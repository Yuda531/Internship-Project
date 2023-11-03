
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from "./RegisterForm";
import SimpleApi from "./simple";
import Api2 from "./API2";
import Api1 from "./API1";

const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<RegistrationForm />} />
          <Route path="/simple" element={<SimpleApi />} />
          <Route path="/api2" element={<Api2 />} />
          <Route path="/api1" element={<Api1 />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
