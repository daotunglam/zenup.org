import './App.css';
import Navbar from './Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import Menu from './Menu/Menu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/menu" element={<Menu/>} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
