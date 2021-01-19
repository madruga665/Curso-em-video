let numero = document.getElementById("txtn");
let sel = document.getElementById("sel");
let array = [];

function addNum() {
  let num = Number(numero.value);

  if (num > 100) {
    num = "";
    window.alert(`Numero inválido`);
  } else {
    array.push(num);

    let item = document.createElement("option");
    item.text = ` Valor ${num} adicionado`;
    sel.appendChild(item);
    document.getElementById("txtn").value = "";
  }
}

function finalizar() {
  let soma = 0;
  let media = 0;
  let maior = Math.max.apply(null, array);
  let menor = Math.min.apply(null, array);
  //Soma e Media
  for (let i = 0; i < array.length; i++) {
    soma += array[i];
    media = soma / array.length;
  }

  let totalNum = document.getElementById("totalNum");
  let resSoma = document.getElementById("soma");
  let resMedia = document.getElementById("media");
  let resMaior = document.getElementById("maior");
  let resMenor = document.getElementById("menor");

  totalNum.innerHTML = `Ao todo, temos ${array.length} numeros cadastrados`;
  resMaior.innerHTML = `O maior valor informado foi ${maior}`;
  resMenor.innerHTML = `O menor valor informado foi ${menor}`;
  resSoma.innerHTML = `Somando todos os valores temos ${soma}`;
  resMedia.innerHTML = `A média dos valores digitados é ${media.toFixed(2)}`;
}
