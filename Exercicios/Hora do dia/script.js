function carregar() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  var minuto = data.getMinutes();
  var saudacao = "";
  if (hora >= 0 && hora < 12) {
    // bom dia
    saudacao = "Bom Dia!";
    img.src = "./assets/Manhã.png";
    document.body.style.background = "#e2cd9f";
  } else if (hora >= 12 && hora <= 18) {
    // boa tarde
    saudacao = "Boa Tarde!";
    img.src = "./assets/Tarde.png";
    document.body.style.background = "#b9846f";
  } else {
    //boa noite
    saudacao = "Boa Noite!";
    img.src = "./assets/Noite.png";
    document.body.style.background = "#515154";
  }
  msg.innerHTML = `${saudacao} Agora são ${hora}:${minuto} horas.`;
}
