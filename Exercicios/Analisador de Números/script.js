let numero = document.getElementById("txtn");
let res = document.getElementById("res");
let list = document.getElementById("list");
let array = [];

numero.addEventListener("keypress", function (e) {
  var key = e.key;
  if (key === "Enter") {
    addNum();
  }
});

function addNum() {
  let num = Number(numero.value);

  if (num > 100 || num < 1) {
    num = "";
    document.getElementById("txtn").value = "";
    window.alert(`Numero inválido`);
  } else if (array.includes(num)) {
    num = "";
    document.getElementById("txtn").value = "";
    window.alert(`Numero já adicionado`);
  } else {
    array.push(num);
    let item = document.createElement("option");
    item.text = ` Valor ${num} adicionado`;
    list.appendChild(item);
    numero.value = "";
    document.getElementById("res").innerHTML = "";
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
  res.innerHTML = `<p>Ao todo, temos ${array.length} numeros cadastrados</p>
  <p>O maior valor informado foi ${maior}</p>
  <p>O menor valor informado foi ${menor}</p>
  <p>Somando todos os valores temos ${soma}</p>
  <p>A média dos valores digitados é ${media.toFixed(1)}</p>`;
}
