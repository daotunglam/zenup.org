import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import BtnMenu from './BtnMenu/BtnMenu';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Menu from './Menu/Menu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <BtnMenu />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="menu" element={<Menu />} />
        </Routes>

        <Navbar />

      </BrowserRouter>
    </div>
  );
}

export default App;
