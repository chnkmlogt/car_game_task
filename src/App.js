import React, { Component } from "react";
import "./App.css";
import AracList from "./Components/AracList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Araçlar </h1>
        <AracList />
      </div>
    );
  }
}

export default App;
