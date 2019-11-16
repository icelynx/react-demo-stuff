import React from "react";
import {TekstiKomponenttiLuokka, TekstiKomponenttiFunktio} from "./TekstiKomponentti";

const UusiApp = () => (
  <div>
    <div>Moi Pautsu! Hyvin ymmärrät!</div>
    <TekstiKomponenttiLuokka text="Tekstiä2" subtitle="Subtitle" />
    <TekstiKomponenttiFunktio text="Tekstiä3" subtitle="Subtitle2" />
  </div>
)

export {UusiApp}
