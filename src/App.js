import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import CrudNavbar from "../src/Components/navbar.js";
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
import Home from "./Components/Home.js";
import About from "./Components/About.js";
import FormExample from "./Components/Createuser.js";
import Login from "./Components/Login.js";

function App() {
  return (
    <>
      <div className="App">
      <CrudNavbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/Home" element={<Home/>}></Route>
          <Route path="/Createuser" element={<FormExample/>}></Route>
          <Route path="/About" element={<About/>}></Route>
        </Routes>
      </div>
      </div>
    </>
  );
}

export default App;
