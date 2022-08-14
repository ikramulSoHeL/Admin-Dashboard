import './App.css'
import MainDash from './components/MainDash/MainDash';
import Slidebar from './components/Slidebar/Slidebar';


function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Slidebar/>
        <MainDash/>
      </div>
    </div>
  );
}

export default App;