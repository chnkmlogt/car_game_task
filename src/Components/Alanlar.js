import React from "react";
import Yuzde from "./Yuzde";
import Adet from "./Adet";
import Litre from "./Litre";
import Alan from "./Alan";

const Alanlar = {
  lt: Litre,
  adet: Yuzde,
  yuzde: Adet
};
export default alanlar => {
  if (typeof Alanlar[alanlar.alan.birim] !== "undefined") {
    return React.createElement(Alanlar[alanlar.alan.birim], {
      alanAd: alanlar.alan.alanAd,
      miktar: alanlar.alan.miktar
    });
  }
  return React.createElement(Alan, {
    alanAd: alanlar.alan.alanAd,
    miktar: alanlar.alan.miktar,
    birim: alanlar.alan.birim
  });
};
