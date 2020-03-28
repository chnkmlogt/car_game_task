import React, { Component } from "react";
import Alanlar from "./Alanlar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

class Arac extends Component {
  state = {
    open: false
  };

  openHandler = () => {
    const status = this.state.open;
    this.setState({ open: !status });
  };

  render() {
    const props = this.props;
    const alanlar = props.arac.alanlar.map((alan, idx) => (
      <Alanlar key={idx} alan={alan}></Alanlar>
    ));
    return (
      <div onClick={this.openHandler}>
        <h1>
          Araç: {props.arac.ad}
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </h1>
        <Collapse in={true} timeout="auto" unmountOnExit>
          {this.state.open ? alanlar : null}
        </Collapse>
        <br />
      </div>
    );
  }
}

export default Arac;
