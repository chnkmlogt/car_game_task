import React, { Component } from "react";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import RefreshIcon from "@material-ui/icons/Refresh";
import axios from "axios";
import Arac from "./Arac";

class AracList extends Component {
  state = {
    araclar: []
  };

  refeshList = () => {
    axios.get(`http://localhost:3004/araclar`).then(res => {
      const araclar = res.data;
      this.setState({ araclar });
    });
  };

  componentDidMount() {
    this.refeshList();
  }

  render() {
    const araclar = this.state.araclar.map(arac => (
      <Arac open={this.state.open} key={arac.id} arac={arac}></Arac>
    ));
    return (
      <div>
        <h1>Araçlar </h1>

        <IconButton onClick={this.refeshList} aria-label="refresh">
          <RefreshIcon fontSize="large" />
        </IconButton>
        <List aria-labelledby="nested-list-subheader">{araclar}</List>
      </div>
    );
  }
}

export default AracList;
