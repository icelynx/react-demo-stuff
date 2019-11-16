import React, {useState} from "react"

export class TekstiKomponenttiLuokka extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateText: "Tekstikomponentin tekstiä",
      eimuutu: 4
    }
    this.onStateTextChange = this.onStateTextChange.bind(this);
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
