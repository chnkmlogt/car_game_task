import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

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
      <ListItem key={arac.id} button onClick={this.handleClick}>
        <Arac open={this.state.open} key={arac.id} arac={arac}></Arac>
      </ListItem>
    ));
    return <List aria-labelledby="nested-list-subheader">{araclar}</List>;
  }
}

export default AracList;
