import React from "react";
import Alanlar from "./Alanlar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const Arac = props => {
  const alanlar = props.arac.alanlar.map((alan, idx) => (
    <ListItem>
      <Alanlar key={idx} alan={alan}></Alanlar>
    </ListItem>
  ));
  return (
    <div>
      <h1>
        Araç: {props.arac.ad}
        {props.open ? <ExpandLess /> : <ExpandMore />}
      </h1>
      <Collapse in={true} timeout="auto" unmountOnExit>
        {alanlar}
      </Collapse>
      <br />
    </div>
  );
};

export default Arac;
