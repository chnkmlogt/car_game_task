import React from "react";
import Alanlar from "./Alanlar";

const Arac = props => {
  return (
    <div>
      <p>{props.arac.ad}</p>
      <p>Araç Alanları;</p>
      {props.arac.alanlar.map(function(alan, idx) {
        return <Alanlar key={idx} alan={alan}></Alanlar>;
      })}
    </div>
  );
};

export default Arac;
