import './App.css'
import { Routes, Route } from "react-router-dom"
import Homepage from  './Pages/Homepage.jsx'
import HomeLayout from './Layouts/HomeLayout.jsx';
import AboutUs from './Pages/AboutUs.jsx';

function App() { 

  return (

  
    <>
 
  
<Routes>
   <Route path="/" element={<Homepage />} />
   <Route path="/about" element={<AboutUs />} />

</Routes>


  {/* <Footer/>  */}
 

    </>

  )
}

export default App
