import React, { Component } from "react";
import Alan from "./Alan";
import ListItem from "@material-ui/core/ListItem";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Badge from "@material-ui/core/Badge";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

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
    const alanlar = props.arac.alanlar.map(alan => (
      <Grid item key={alan.id}>
        <Alan alanAd={alan.alanAd} miktar={alan.miktar} birim={alan.birim} />
      </Grid>
    ));
    return (
      <div>
        <Divider />

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
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            {this.state.open ? alanlar : null}
          </Grid>
        </Collapse>
        <Divider />
      </div>
    );
  }
}

export default Arac;
