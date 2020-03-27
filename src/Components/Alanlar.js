import React from "react";
import Alan from "./Alan";

export default alanlar => {
  return (
    <Alan
      alanAd={alanlar.alan.alanAd}
      miktar={alanlar.alan.miktar}
      birim={alanlar.alan.birim}
    />
  );
};
