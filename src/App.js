import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Title from "./components/Title/Title";
import Operators from "./components/Operators/Operators";

function App() {
  return (
    <div className="app-wrapper">
      <Title />
      <Operators />
    </div>
  )
}

export default App;
