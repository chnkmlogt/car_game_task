import React, { Component } from "react";

import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";

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
      <ListItem button onClick={this.handleClick}>
        <Arac open={this.state.open} key={arac.id} arac={arac}></Arac>
        {this.state.open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
    ));
    return (
      <List aria-labelledby="nested-list-subheader">
        <ListItem>{araclar}</ListItem>
      </List>
    );
  }
}

export default AracList;
