import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Menu from './Menu/Menu';
import BtnGoTop from './BtnGoTop/BtnGoTop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="menu" element={<Menu />} />
        </Routes>

        <BtnGoTop />

        <Navbar />

      </BrowserRouter>
    </div>
  );
}

export default App;
