import Clima from './components/Card/Clima';
import { Header } from './components/Header';
import { Search } from './components/Search';
import { ThemeProvider } from './providers/ThemeProviders';
import './style/style.css';

function App() {
  return (
    <>
    <ThemeProvider>
    <div className="container">
      <div className="row">
        <div className="col col-12"><Header/></div>
        <div className="col col-6"><Clima/></div>
        <div className="col col-6"><Search/></div>
      </div>
    </div>
    </ThemeProvider>
    </>
  );
}

export default App;
