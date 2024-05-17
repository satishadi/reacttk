import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import { Booktk } from "./Components/Booktk";
import Html from "./Components/Html";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/booktk/:name" element={<Booktk></Booktk>}></Route>
          {/* <Route path="/" element={<Html></Html>}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
