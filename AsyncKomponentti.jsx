import React, {useState, useEffect} from 'react';

// mount
// update
// unmount

const useGetStuff = (url) => {
  const [tulos, setTulos] = useState(0);

  useEffect(() => {
    const getImage = () => {
      fetch(url, {method: "GET"})
        .then(result => {
          setTulos(12);
        });
    }

    getImage();

    return () => console.log("unmount");
  }, [url, setTulos]);

  return tulos;
}

const ContainerKomponentti = ({children}) => (
  <div className="container">
    {children}
  </div>
)

const AsyncKomponentti = ({appState, url}) => {
  const tulos = useGetStuff(url);

  console.log(tulos);

  return (
    <ContainerKomponentti>
      <br/>
      <div>{appState}</div>
      <div>Async: {tulos}</div>
    </ContainerKomponentti>
  )
}

export {AsyncKomponentti}
