function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.getElementById("res");
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        // criança
        img.setAttribute("src", "./Imagens/menino.jpg");
      } else if (idade < 21) {
        // jovem
        img.setAttribute("src", "./Imagens/jovem homem.jpg");
      } else if (idade < 50) {
        // adulto
        img.setAttribute("src", "./Imagens/adulto.jpg");
      } else {
        // idoso
        img.setAttribute("src", "./Imagens/Idoso.jpg");
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        // criança
        img.setAttribute("src", "./Imagens/menina.jpg");
      } else if (idade < 21) {
        // jovem
        img.setAttribute("src", "./Imagens/jovem mulher.jpg");
      } else if (idade < 50) {
        // adulto
        img.setAttribute("src", "./Imagens/Adulta.jpg");
      } else {
        // idoso
        img.setAttribute("src", "./Imagens/idosa.jpg");
      }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
    res.appendChild(img);
  }
}
