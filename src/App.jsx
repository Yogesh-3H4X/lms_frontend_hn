import './App.css'
import { Routes, Route } from "react-router-dom"
import Homepage from  './Pages/Homepage.jsx'
import HomeLayout from './Layouts/HomeLayout.jsx';

function App() { 

  return (

  
    <>
 
  
<Routes>
   <Route path="/" element={<Homepage />} />
</Routes>


  {/* <Footer/>  */}
 

    </>

  )
}

export default App
