import React from "react";
import CounterList from "./Components/CounterList";
import NavBar from "./Components/NavBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <CounterList />
    </div>
  );
}

export default App;
