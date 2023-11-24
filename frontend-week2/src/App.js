import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationForm from "./Pages/RegisterForm";
import MassDataUpload from "./Pages/MassDataUpload";
import IrasApiCal from "./Pages/IrasApiCal";
import UploadDataAWS from "./Pages/UploadData";
import PrimeChart from "./Pages/LearnChart";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<UploadDataAWS />} />
          <Route path="/irasApiCal" element={<IrasApiCal />} />
          <Route path="/massDataUpload" element={<MassDataUpload />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/primeChart" element={<PrimeChart />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
