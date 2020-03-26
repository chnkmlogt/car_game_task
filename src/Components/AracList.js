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
    return (
      <div>
        {this.state.araclar.map(function(arac) {
          return <Arac key={arac.id} arac={arac}></Arac>;
        })}
      </div>
    );
  }
}

export default AracList;
