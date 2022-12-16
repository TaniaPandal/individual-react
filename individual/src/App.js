import React from "react";
import Home from "./pages/Home";
import {BrowserRouter,Routes, Link} from "react-router-dom";
import BrandExample from "./componentes/moleculas/NavBar";
import ".//App.css";



function App() {
  return (
    <BrowserRouter>
      <div className= "App">
        <BrandExample>
        <Link to= "./pages/Home">{<Home/>}</Link>
        </BrandExample>
      </div>
      <Home/>
      <Routes>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
