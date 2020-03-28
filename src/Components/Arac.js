import React, { Component } from "react";
import Alanlar from "./Alanlar";
import ListItem from "@material-ui/core/ListItem";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Badge from "@material-ui/core/Badge";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

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
      <div>
        <ListItem key={props.arac.id} button onClick={this.openHandler}>
          <ListItemText>
            <h1>{props.arac.ad}</h1>
          </ListItemText>
          <ListItemIcon>
            <Badge badgeContent={props.arac.alanlar.length} color="primary">
              <AirportShuttleIcon fontSize="large"></AirportShuttleIcon>
            </Badge>
          </ListItemIcon>
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={true} timeout="auto" unmountOnExit>
          {this.state.open ? alanlar : null}
        </Collapse>
      </div>
    );
  }
}

export default Arac;
