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
  if (typeof Alanlar[alan.alan.birim] !== "undefined") {
    return React.createElement(Alanlar[alan.alan.birim], {
      alanAd: alan.alan.alanAd,
      miktar: alan.alan.miktar
    });
  }
  return React.createElement(Adet, {
    alanAd: alan.alan.alanAd,
    miktar: alan.alan.miktar
  });
};
