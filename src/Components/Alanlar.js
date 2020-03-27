import React from "react";
import Alan from "./Alan";

export default alanlar => {
  const alan = alanlar.alan;
  return <Alan alanAd={alan.alanAd} miktar={alan.miktar} birim={alan.birim} />;
};
