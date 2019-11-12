import React from 'react';
import { StaattinenKomponentti } from './StaattinenKomponentti';
import { LaskevaKomponentti } from './LaskevaKomponentti';
import { AsyncKomponentti } from './AsyncKomponentti';

const TestiKomponentti = ({appState}) => (
  <React.Fragment>
    <div>Olen testikomponentti ja sain: "{appState}"</div>
    <span>Fragment demo</span>
    <StaattinenKomponentti ainasama="ainasama testikomponentti" />
    <LaskevaKomponentti />
    {appState !== "piilota" && <AsyncKomponentti appState={appState} url="https://upload.wikimedia.org/wikipedia/commons/6/66/SMPTE_Color_Bars.svg" />}
  </React.Fragment>
)

export {TestiKomponentti}
