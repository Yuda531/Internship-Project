import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import IrasApi1 from './components/IrasApi1'; 
import IrasApi2 from './components/IrasApi2'; 
import IrasApi4 from './components/IrasApi4';
import IrasApi7 from './components/IrasApi7';
import IrasApi9 from './components/IrasApi9';

const IrasApiCal = () => {
  const [selectedApi, setSelectedApi] = useState(null);

  const handleApiSelection = (api) => {
    setSelectedApi(api);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">IRAS API CALCULATOR</h1>
      <div className="btn-group-vertical d-flex gap-2 mb-4 col-lg-6 mx-auto" role="group">
        <button
          className={`btn btn-primary ${selectedApi === 'IrasApi1' ? 'active' : ''}`}
          onClick={() => handleApiSelection('IrasApi1')}
        >
          Public Listed Company Shares
        </button>
        <button
          className={`btn btn-primary ${selectedApi === 'IrasApi2' ? 'active' : ''}`}
          onClick={() => handleApiSelection('IrasApi2')}
        >
          Industrial Property
        </button>
        <button
          className={`btn btn-primary ${selectedApi === 'IrasApi4' ? 'active' : ''}`}
          onClick={() => handleApiSelection('IrasApi4')}
        >
          Private Company Shares Transfer Stamp Duty
        </button>
        <button
          className={`btn btn-primary ${selectedApi === 'IrasApi7' ? 'active' : ''}`}
          onClick={() => handleApiSelection('IrasApi7')}
        >
          Residential Seller Stamp Duty
        </button>
        <button
          className={`btn btn-primary ${selectedApi === 'IrasApi9' ? 'active' : ''}`}
          onClick={() => handleApiSelection('IrasApi9')}
        >
          Newly Incorporated Private Companies
        </button>
      </div>

      {selectedApi === 'IrasApi1' && <IrasApi1 />}
      {selectedApi === 'IrasApi2' && <IrasApi2 />}
      {selectedApi === 'IrasApi4' && <IrasApi4 />}
      {selectedApi === 'IrasApi7' && <IrasApi7 />}
      {selectedApi === 'IrasApi9' && <IrasApi9 />}
    </div>
  );
};

export default IrasApiCal;
