import React from "react";
import Alanlar from "./Alanlar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";

const Arac = props => {
  const alanlar = props.arac.alanlar.map((alan, idx) => (
    <Collapse in={true} timeout="auto" unmountOnExit>
      <ListItem>
        <Alanlar key={idx} alan={alan}></Alanlar>
      </ListItem>
    </Collapse>
  ));
  return (
    <div>
      <h1>Araç: {props.arac.ad}</h1>
      <br />
      <ul>{alanlar}</ul>
    </div>
  );
};

export default Arac;
