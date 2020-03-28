import React, { Component } from "react";
import List from "@material-ui/core/List";

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
      <Arac open={this.state.open} key={arac.id} arac={arac}></Arac>
    ));
    return <List aria-labelledby="nested-list-subheader">{araclar}</List>;
  }
}

export default AracList;
