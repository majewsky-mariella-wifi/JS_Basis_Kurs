'use strict';

window.onload = function(){

  function checkPrimzahl(zahl) {
    for ( var j = 2; j < zahl; j++ ) {
      //falls ohne Rest teilbar, dann keine Primzahl
      if( zahl % j === 0 ) {
        //document.querySelector('body > img').src = 'images/kreuzerl.png';
        return false;
      }
    }
    //document.querySelector('body > img').src = 'images/hakerl.png';
    //falls nach dem letzten Schleifendurchlauf noch kein break erfolgt ist
    return true
  }

  document.getElementById('btn_eingabe').addEventListener('click',function(){

    var benutzerEingabe = prompt('Geben Sie eine Zahl an');
    // prompt liest zahl als string ein
    benutzerEingabe *= 1;
    //methode um string in integer zu verwandeln
    //benutzEreingabe = paseInt(benutzerEingabe);

    console.log(benutzerEingabe);

    var element = document.getElementById('ausgabe');

    if( isNaN(benutzerEingabe)) {
      //TODO: show user feedback, no valid input
      element.innerText = 'Geben Sie bitte eine gültige Zahl ein!';
    } else if (checkPrimzahl(benutzerEingabe)) {
      //element.innerText = benutzerEingabe + (checkPrimzahl(benutzerEingabe) ? ' ist eine Primzahl!' : ' ist leider keine Primzahl.');
      element.innerText = benutzerEingabe + ' ist eine Primzahl!';
      document.querySelector('body > div > img').src = 'images/hakerl.png';
    } else {
      element.innerText = benutzerEingabe + ' ist keine Primzahl.';
      document.querySelector('body > div > img').src = 'images/kreuzerl.png';
    }

  });

} // Ende onload
