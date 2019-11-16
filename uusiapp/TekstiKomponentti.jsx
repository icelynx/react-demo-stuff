import React, {useState} from "react"

export class TekstiKomponenttiLuokka extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "busy", // "busy", "error", "ready"
      stateText: "Tekstikomponentin tekstiä",
      eimuutu: 4
    }
    this.onStateTextChange = this.onStateTextChange.bind(this);
    this.didMountHandlerFunktio = this.didMountHandlerFunktio.bind(this);
  }

  // Lifecyclet alkaa

  componentDidMount() {
    // Tämä koodi ajetaan kun komponentti piirretään DOMiin. Ei ajeta jos komponentti on jo domissa.
    // EI SAA MUOKATA TILAA!
    // EI SAA MYÖSKÄÄN OLLA ASYNKRONINEN!
    this.didMountHandlerFunktio();
  }

  componentDidUpdate() {
    // Tämä koodi ajetaan kun komponentin propsit TAI tila päivittyy.
  }

  componentWillUnmount() {
    // Tämä koodi ajetaan kun komponentti on katoamassa DOMista.
  }

  // Lifecyclet loppuu

  // Esimerkkifunktio mitä käyttää componentDidMountissa ja hakee asynkronisesti matskua ja päivittää sillä tilaa
  didMountHandlerFunktio() {

    /* async await malli
try {
      // Näytetään että tehdään jotain
      this.setState({status: "busy"});
      const result = await new Promise(resolve => setTimeout(() => resolve("Viiveellä tekstiä"), 2000)); // Palikka ja tuskin toimii mut anyway
      // Näytetään että ollaan valmiit ja tallennetaan tulos
      this.setState({status: "ready", stateText: result});
    } catch(_) {
      // Laitetaan virheeseen jos ei mennyt ihan putkeen
      this.setState({status: "error"});
    }
    */

    // Näytetään että tehdään jotain
   this.setState({status: "busy"});
   new Promise(resolve => setTimeout(() => resolve("Viiveellä tekstiä"), 2000))
    .then(result => {
      // Näytetään että ollaan valmiit ja tallennetaan tulos
      this.setState({status: "ready", stateText: result});
    }).catch(() => {
      // Laitetaan virheeseen jos ei mennyt ihan putkeen
      this.setState({status: "error"});
    })
  }

  onStateTextChange(event) {
    const inputValue = event.target.value;
    this.setState({stateText: inputValue});
  }

  render() {
    const {text, subtitle} = this.props;
    const {stateText} = this.state;
    return (
      <div>
        <input type="text" onChange={this.onStateTextChange} placeholder="Muuttaa stateTextiä" />
        <div>{text} - {subtitle} - {stateText}</div>
      </div>
    )
  }
}

/* Toinen malli alustaa funktiokomponentti, jolla on pääsy this.
export function Tekstikomponenttimalli() {

}
*/

// Tässä ei ole this. käytössä
export const TekstiKomponenttiFunktio = ({text, subtitle}) => {
  // useState palauttaa parin eli arrayn kahdella arvolla. Eka arvo on aina sen hetkinen tila. Toka on funktio, joka asettaa tilan.
  // Destrukturoidaan arvot ulos
  const [stateText, setStateText] = useState("FTekstikomponentin tekstiä");

  const onStateTextChange = event => {
    const inputValue = event.target.value;
    setStateText(inputValue);
  }

  return (
    <div>
      <input type="text" onChange={onStateTextChange} placeholder="Muuttaa FK stateTextiä" />
      <div>FK: {text} - {subtitle} - {stateText}</div>
    </div>
  )
}

//export const TekstikomponenttiDummyFunktio = () => <div>Sisältö</div>
