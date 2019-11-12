import React, {useContext} from 'react';
import { AppContext } from './App';

const StaattinenKomponentti = ({ainasama}) => {
  const appContext = useContext(AppContext);
  return (
    <div>En muutu koskaan: {ainasama}. Konteksti: {appContext}</div>
  )
}

export {StaattinenKomponentti}
