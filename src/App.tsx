import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import AdDesigner from "./components/AdDesigner";

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}
function AppBody() {
  return (
    <div className="AppBody">
      <AdDesigner />

      <h1>Greetings, earthlings!</h1>
      <p>Nice to meet you!</p>
      <a href="#">Another link</a>
    </div>
  );
}

export default App;
