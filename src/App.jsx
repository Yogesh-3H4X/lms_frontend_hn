import './App.css';
import { Routes, Route } from "react-router-dom";
import Homepage from './Pages/Homepage.jsx';
import AboutUs from './Pages/AboutUs.jsx';
import Login from './Pages/Login.jsx';
import Signup from './Pages/Singup.jsx';  // fixed path
import NotFound from "./pages/NotFound.jsx";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
         <Route path="*" element={<NotFound/>} />

      </Routes>
    </>
  );
}

export default App;
