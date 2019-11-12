import React, {useState} from 'react';
import {TestiKomponentti} from './TestiKomponentti'
import {StaattinenKomponentti} from './StaattinenKomponentti'

export const AppContext = React.createContext();

const App = ({testiprop}) => {
  const [appState, setAppState] = useState("Oletusarvo3");

  const onInputChange = event => {
    const inputValue = event.target.value;
    setAppState(inputValue);
  }

  return (
    <div className="app">
      Moi Pautsu!
      <span>{testiprop}</span>
      <div>
        <input type="text" placeholder="Kirjoita minuun :-)" onChange={onInputChange} />
      </div>
      <AppContext.Provider value="testaan">
        <StaattinenKomponentti ainasama="Aina sama" />
        <TestiKomponentti appState={appState} />
      </AppContext.Provider>
    </div>
  )
}

export {App}
