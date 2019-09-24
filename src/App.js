import React from "react";
import logo from "./logo.svg";
import "./App.css";
import RootRouter from "./routes";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      {RootRouter}
    </div>
  );
}

export default App;
