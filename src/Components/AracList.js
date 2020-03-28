import React, { Component } from "react";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import RefreshIcon from "@material-ui/icons/Refresh";
import Arac from "./Arac";
import AracService from "../api/AracService";

class AracList extends Component {
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
