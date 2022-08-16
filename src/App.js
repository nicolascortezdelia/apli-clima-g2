import { useState } from 'react';
import axios from 'axios';

function App() {
  const [clima, setClima] = useState();

  const handleClima = (id) => {
    setClima(id);
  };

  const getApi = async () => {
    const { data } = await axios('http://api.weatherapi.com/v1/search.json?key=6be8c28794924ed8a2a184922222905&q=tuc');
    console.log({ data });
  };
  return (
    <div className="App">
      <h1>hola mundo</h1>
      <button className='btn btn-primary' onClick={getApi} key="6be8c28794924ed8a2a184922222905"> Traer Clima</button>

    </div>
  );
}

export default App;
