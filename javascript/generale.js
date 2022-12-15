var check;
function prenota() {
  alert("hai premuto prenota ora");
}

function needscroll() {
  url = window.location.href
  var x = url.indexOf("check=");

  if (x != -1)
    check = url.substring(x + 6, url.length);

  if (check == "true") window.scroll(0, 863);
}

function stanzaCambio(colore) {
  window.location = "la struttura.html?number=" + colore.data.param1;
  change_mosaico(colore);
}

function backUp() {
  $('body,html').animate({ scrollTop: 0 }, 600);
}
