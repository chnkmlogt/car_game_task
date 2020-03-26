import React from "react";
import Alanlar from "./Alanlar";

import axios from "axios";

export default class AracList extends React.Component {
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
    return <ul>{this.state.araclar.map(arac => Alanlar(arac.alanlar))}</ul>;
  }
}
