import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Eightball, { RESPONSES } from "./Eightball"


/** Renders Eightball component. */

function App() {
  return (
    <div className="App">
      <Eightball messages={ RESPONSES }/>
    </div>
  );
}

export default App;
