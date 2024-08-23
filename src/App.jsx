import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout";
import HomeScreen from "./Components/HomeScreen";
import Home from "./Components/Home";
import Navigation from './Components/Navigation'
import HomePage from './Pages/HomePage'
import Footer from './Components/Footer'
import Artist from "./Pages/Artist";
function App()
{
  return(
    
    <div className="bg-gray-950 w-full h-screen overflow-x-hidden">
      
     <BrowserRouter>
     <Navigation></Navigation>
           <Routes>
              <Route  index path="/" element={<HomePage/>}>
              </Route>
              <Route index path="/casita" element={<HomeScreen/>}>
              </Route>
              <Route index path="/artista" element={<Artist/>}></Route>
           </Routes>
           <Footer></Footer>
     </BrowserRouter>
    </div>
  )
}

export default App