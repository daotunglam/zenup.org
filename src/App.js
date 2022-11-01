import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Menu from './Menu/Menu';
import BtnGoTop from './BtnGoTop/BtnGoTop';
import Footer from './Footer/Footer';
import Logo from "./Logo/Logo";
import Imprint from './Imprint';
import Location1 from './Locations/Location1';
import Location2 from './Locations/Location2';
import Gallery from './Gallery/Gallery';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="location1" element={<Location1 />} />
          <Route path="location2" element={<Location2 />} />
          <Route path="imprint" element={<Imprint />} />
        </Routes>

        <Footer />

        <BtnGoTop />

        <Logo />

        <Navbar />

      </BrowserRouter>
    </div>
  );
}

export default App;
