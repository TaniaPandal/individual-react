import React from "react";
import Home from "./componentes/pages/Home";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import BrandExample from "./componentes/moleculas/NavBar";
import ".//App.css";
import Discover from "./componentes/pages/Discover";



function App() {
  return (
    <BrowserRouter>
        <div className= "App">
          <BrandExample/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path= "/Discover" element={<Discover/>}/>
        </Routes>
        </div>
    </BrowserRouter>
  
  );
}

export default App;
