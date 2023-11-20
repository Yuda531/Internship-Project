
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from "./RegisterForm";
import MassDataUpload from "./MassDataUpload";
import IrasApiCal from "./IrasApiCal";
import UploadDataAWS from "./UploadData";


const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<UploadDataAWS />} />
          <Route path="/irasApiCal" element={<IrasApiCal />} />
          <Route path="/massDataUpload" element={<MassDataUpload />} />
          <Route path="/register" element={<RegistrationForm />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
