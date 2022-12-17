
function prenota() {
  alert("hai premuto prenota ora");
}


function stanzaCambio(colore) {
  window.location = "la struttura.html?number=" + colore.data.param1;
  change_mosaico(colore);
}

function backUp() {
  $('body,html').animate({ scrollTop: 0 }, 600);
}

function chiSiamo() {
  window.location = "chi siamo.html";
}
function laStruttura() {
  window.location = "la struttura.html";
}
function contatti() {
  window.location = "contattaci.html";
}
