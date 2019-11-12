import React, {useState, useMemo} from 'react';

const LaskevaKomponentti = () => {
  const [tulos, setTulos] = useState(0);

  const multipliedTulos = useMemo(() => tulos * 2, [tulos]);

  const onInputChange = event => {
    const value = event.target.value;
    setTulos(value);
  }

  return (
    <>
      <br/>
      <input type="number" min={0} onChange={onInputChange} />
      <div>Tulos: "{multipliedTulos}"</div>
    </>
  )
}

export {LaskevaKomponentti}
