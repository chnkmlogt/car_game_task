import React, { Component } from "react";
import Alanlar from "./Alanlar";
import ListItem from "@material-ui/core/ListItem";
import Collapse from "@material-ui/core/Collapse";
import Box from "@material-ui/core/Box";
import Badge from "@material-ui/core/Badge";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";

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
      <ListItem key={props.arac.id} button onClick={this.openHandler}>
        <div>
          <Badge badgeContent={props.arac.alanlar.length} color="primary">
            <Box component="div" display="inline" p={1} m={1}>
              <h1>{props.arac.ad}</h1>
            </Box>

            <AirportShuttleIcon fontSize="large"></AirportShuttleIcon>
          </Badge>

          <Collapse in={true} timeout="auto" unmountOnExit>
            {this.state.open ? alanlar : null}
          </Collapse>
        </div>
      </ListItem>
    );
  }
}

export default Arac;
