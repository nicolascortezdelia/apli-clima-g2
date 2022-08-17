import { useState } from 'react';
import axios from 'axios';
import { Card } from './components/Card';

function App() {
  const [clima, setClima] = useState([]);

  const getApi = () => {
    axios.get('http://api.weatherapi.com/v1/search.json?key=6be8c28794924ed8a2a184922222905&q=tuc')
    .then(response => setClima(response.data));
    console.log(clima);
  };
  return (
    <div className="App">
      <h1>hola mundo</h1>
      <button className='btn btn-primary' onClick={getApi} key="6be8c28794924ed8a2a184922222905"> Traer Clima</button>
      <Card
  clima = {clima}
        />

    </div>
  );
}

export default App;
