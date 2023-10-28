import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SensorDataApp() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Faça uma solicitação GET para o servidor no Colab
    axios.get('http://localhost:5000/api/get_data')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item._id}>
          <div>{item.field1}</div>
          <div>{item.field2}</div>
        </div>
      ))}
    </div>
  );
}

export default SensorDataApp;
