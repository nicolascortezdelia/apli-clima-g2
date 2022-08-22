import Clima from './components/Card/Clima';
import { Header } from './components/Header';
import { Search } from './components/Search';
import './style/style.css';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-12"><Header/></div>
        <div className="col col-6"><Clima/></div>
        <div className="col-6"><Search/></div>
      </div>
    </div>
  );
}

export default App;
