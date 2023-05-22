import './App.scss';
import { HashRouter, Routes, Route } from "react-router-dom";
import { useRef } from 'react';
// import useIsInViewport from "./hooks/useIsInViewport";

import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import BtnGoTop from './BtnGoTop/BtnGoTop';
import Footer from './Footer/Footer';
import Explore from './Explore/Explore';
import Categories from './Categories/Categories';
import ContactUs from './ContactUs/ContactUs';
import WorkWithUs from './WorkWithUs/WorkWithUs';
import ZenupWorkshops from './Categories/ZenupWorkshops';
import ZenJournaling from './Categories/ZenJournaling';
import ZenMerchandise from './Categories/ZenMerchandise';
import ZenupLifestyles from './Categories/ZenupLifestyles';
import MindfulnessExercises from './Categories/MindfulnessExercises';
// import ContactBtn from "./ContactBtn/ContactBtn";

function App() {
  const footerRef = useRef();
  // const isFooterInViewport = useIsInViewport(footerRef);

  return (
    <div className="App">
      <HashRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="categories" element={<Categories />} />
          <Route path="zenup-workshops" element={<ZenupWorkshops />} />
          <Route path="zen-journaling" element={<ZenJournaling />} />
          <Route path="zen-merchandise" element={<ZenMerchandise />} />
          <Route path="zenup-lifestyles" element={<ZenupLifestyles />} />
          <Route path="mindfulness-exercises" element={<MindfulnessExercises />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="work-with-us" element={<WorkWithUs />} />
        </Routes>

        <div ref={footerRef}>
          <Footer />
        </div>
        
        <BtnGoTop />

        <Navbar />

        {/* {!isFooterInViewport && <ContactBtn />} */}

      </HashRouter>
    </div>
  );
}

export default App;
