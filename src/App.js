import './App.css';
import FetchData from './components/FetchData';
import Header from './components/Header';
import ScatterPoints from './components/ScatterPoints';

function App() {
  return (
    <div className="App">
      <Header/>
      <FetchData/>
      <ScatterPoints/>
    </div>
  );
}

export default App;
