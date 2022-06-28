import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";

function App() {
    return (
    <>
        <BrowserRouter>
         <Navigation/>   
         <Routes>
            <Route path="/" exact = {true} element = {<Home/>} />
            <Route path="/about" element = {<About/>} />
         </Routes>
        </BrowserRouter>
      </>
    )
    
}

export default App;