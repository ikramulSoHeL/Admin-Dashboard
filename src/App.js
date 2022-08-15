import './App.css'
import MainDash from './components/MainDash/MainDash';
import RightSidebar from './components/RightSidebar/RightSidebar';
import Slidebar from './components/Slidebar/Slidebar';


function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Slidebar/>
        <MainDash/>
        <RightSidebar/>
      </div>
    </div>
  );
}

export default App;