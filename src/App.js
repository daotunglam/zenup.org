import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Menu from './Menu/Menu';
import Sushis from './galleryPages/Sushis';
import Sashimis from './galleryPages/Sashimis';
import Bowls from './galleryPages/Bowls';
import BtnGoTop from './BtnGoTop/BtnGoTop';
import Footer from './Footer/Footer';
import Imprint from './Imprint';
import Location1 from './Locations/Location1';
import Location2 from './Locations/Location2';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="sushis" element={<Sushis />} />
          <Route path="sashimis" element={<Sashimis />} />
          <Route path="bowls" element={<Bowls />} />
          <Route path="location1" element={<Location1 />} />
          <Route path="location2" element={<Location2 />} />
          <Route path="imprint" element={<Imprint />} />
        </Routes>

        <Footer />

        <BtnGoTop />

        <Navbar />

      </BrowserRouter>
    </div>
  );
}

export default App;
