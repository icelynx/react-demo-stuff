// Muuttujia, huomaa että funktion voi laittaa muuttujaan siinä missä minkä tahansa arvon
const muuttuja = 123;
const var1 = () => "asdasd";
const var2 = 123;
const var3 = "asdsad";


function testerere(parametriFunktio) {
  parametriFunktio("asdas");
}

testerere(var1);

// sama asia
const laskeYhteen = (arvo1, arvo2) => arvo1 + arvo2;
const laskeYhteenTOisellatapaa = (arvo1, arvo2) => {
  return arvo1 + arvo2;
}
