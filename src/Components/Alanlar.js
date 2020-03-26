import React from "react";
import Yuzde from "./Yuzde";
import Adet from "./Adet";
import Litre from "./Litre";

const Alanlar = {
  lt: Litre,
  adet: Yuzde,
  yuzde: Adet
};

export default alan => {
  if (typeof Alanlar[alan.birim] !== "undefined") {
    return React.createElement(Alanlar[alan.birim], {
      alanAd: alan.alanAd,
      miktar: alan.miktar
    });
  }
  return React.createElement(() => (
    <div>The component {alan} has not been created yet.</div>
  ));
};
