import './App.css';
import { Routes, Route } from "react-router-dom";
import Homepage from './Pages/Homepage.jsx';
import AboutUs from './Pages/AboutUs.jsx';
import NotFound from "./Pages/NotFound.jsx"; // case-sensitive
import Singup from './Pages/Singup.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/Singup" element={<Singup />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
