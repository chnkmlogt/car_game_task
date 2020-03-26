import React, { Component } from "react";

import axios from "axios";
import Arac from "./Arac";

class AracList extends Component {
  state = {
    araclar: []
  };

  componentDidMount() {
    axios.get(`http://localhost:3000/araclar`).then(res => {
      const araclar = res.data;
      this.setState({ araclar });
    });
  }

  render() {
    const araclar = this.state.araclar.map(arac => (
      <li>
        <Arac key={arac.id} arac={arac}></Arac>
      </li>
    ));
    return (
      <div>
        <ul>{araclar}</ul>
      </div>
    );
  }
}

export default AracList;
