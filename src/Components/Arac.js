import React from "react";
import Alanlar from "./Alanlar";

const Arac = props => {
  const alanlar = props.arac.alanlar.map((alan, idx) => (
    <li>
      <Alanlar key={idx} alan={alan}></Alanlar>
    </li>
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
