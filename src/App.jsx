import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout";
import HomeScreen from "./Components/HomeScreen";
import Home from "./Components/Home";
import Navigation from './Components/Navigation'
import HomePage from './Pages/HomePage'
function App()
{
  return(
    
    <div className="bg-gray-950 ">
      
     <BrowserRouter>
     <Navigation></Navigation>
           <Routes>
              <Route index path="/" element={<HomePage/>}>
              </Route>
              <Route index path="/casita" element={<HomeScreen/>}>
              </Route>
           </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App