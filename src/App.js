import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Eightball, { RESPONSES } from "./Eightball"

function App() {
  return (
    <div className="App">
      <Eightball messages={ RESPONSES }/>
    </div>
  );
}

export default App;
