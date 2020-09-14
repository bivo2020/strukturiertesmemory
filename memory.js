var bildeins = -1,
  bildzwei = -1;

var deckblatt = "bilder/DeckBlatt.gif";
var bilder = [];
bilder[0] = "bilder/1.gif";
bilder[1] = "bilder/2.gif";
bilder[2] = "bilder/3.gif";
bilder[3] = "bilder/4.gif";
bilder = bilder.concat(bilder);

function klickAufBild(that, bildnr) {
  if (bildeins == bildnr || bildzwei == bildnr) return;
  if (bildeins == -1) {
    that.src = bilder[bildnr];
    bildeins = bildnr;
  } else if (bildzwei == -1) {
    that.src = bilder[bildnr];
    bildzwei = bildnr;
  } else {
    let memoryspielfeld = document.getElementById("memoryspielfeld");
    if (bilder[bildeins] == bilder[bildzwei]) {
      memoryspielfeld.getElementsByTagName("img")[bildeins].src = "";
      memoryspielfeld.getElementsByTagName("img")[bildzwei].src = "";
      memoryspielfeld.getElementsByTagName("img")[bildeins].onclick = "";
      memoryspielfeld.getElementsByTagName("img")[bildzwei].onclick = "";
    } else {
      memoryspielfeld.getElementsByTagName("img")[bildeins].src = deckblatt;
      memoryspielfeld.getElementsByTagName("img")[bildzwei].src = deckblatt;
    }
    bildzwei = -1;
    that.src = bilder[bildnr];
    bildeins = bildnr;
  }
}
