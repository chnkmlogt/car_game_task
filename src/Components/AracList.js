import React, { Component } from "react";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import RefreshIcon from "@material-ui/icons/Refresh";
import Arac from "./Arac";

class AracList extends Component {
  render() {
    const araclar = this.props.araclar.map(arac => (
      <Arac key={arac.id} arac={arac}></Arac>
    ));
    return (
      <div>
        <h1>Araçlar </h1>
        <IconButton onClick={this.props.refeshList} aria-label="refresh">
          <RefreshIcon fontSize="large" />
        </IconButton>
        <List aria-labelledby="nested-list-subheader">{araclar}</List>
      </div>
    );
  }
}

export default AracList;
