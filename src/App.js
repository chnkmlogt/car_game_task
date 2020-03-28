import React, { Component } from "react";
import "./App.css";
import AracList from "./Components/AracList";
import AracService from "./api/AracService";

class App extends Component {
  constructor(props) {
    super(props);
    this.aracService = new AracService();
  }

  state = {
    araclar: []
  };

  refeshList = () => {
    this.aracService.retrieveAraclar();
    this.setState({ araclar: this.aracService.araclar });
  };

  componentDidMount() {
    setInterval(async () => {
      await this.refeshList();
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <AracList araclar={this.state.araclar} refeshList={this.refeshList} />
      </div>
    );
  }
}

export default App;
