import React from "react";
import Alanlar from "./Alanlar";
import Collapse from "@material-ui/core/Collapse";

const Arac = props => {
  const alanlar = props.arac.alanlar.map((alan, idx) => (
    <Alanlar key={idx} alan={alan}></Alanlar>
  ));
  return (
    <div>
      <h1>{props.arac.ad}</h1>
      <Collapse in={true} timeout="auto" unmountOnExit>
        {alanlar}
      </Collapse>
      <br />
    </div>
  );
};

export default Arac;
