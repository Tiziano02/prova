
function prenota() {
  alert("Questo tasto ancora non è attivo");
}

function whatsapp() {
  window.location = "https://api.whatsapp.com/send?phone=%2B393342378911&app=facebook&entry_point=page_cta&fbclid=IwZXh0bgNhZW0CMTAAAR3j9o2zKrebtVnAV1sN-RPKLtwkPHtP2pSAhg4BbT4v5SeqXjDwUqlYZQ4_aem_RCq--jgxKkWXtiXxJVoCzg"
}
function facebook() {
  window.location = "https://www.facebook.com/alloggicostantini"
}
function instagram() {
  window.location = "https://www.instagram.com/alloggicostantini?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
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
