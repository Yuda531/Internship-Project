
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from "./RegisterForm";
import MassDataUpload from "./MassDataUpload";
import IrasApiCal from "./IrasApiCal";


const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/IrasApiCal" element={<IrasApiCal />} />
          <Route path="/" element={<MassDataUpload />} />
          <Route path="/register" element={<RegistrationForm />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
