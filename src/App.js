import './App.css'
import MainDash from './components/MainDash/MainDash';
import RightSidebar from './components/RightSidebar/RightSidebar';
import Slidebar from './components/Slidebar/Slidebar';

import { Routes, Route } from 'react-router-dom'
import Orders from './components/Orders/Orders';
import Customers from './components/Customers/Customers';


function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Slidebar/>
        <Routes>
          <Route path="/" element={<MainDash/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/customers" element={<Customers/>} />
        </Routes>
        {/* <MainDash/> */}
        <RightSidebar/>
      </div>
    </div>
  );
}

export default App;