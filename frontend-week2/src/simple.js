import axios from "axios";
import { useEffect, useState } from "react";

const SimpleApi = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api1"); // Perbaiki URL di sini
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return <div>{data.join(", ")}</div>;
};

export default SimpleApi;
