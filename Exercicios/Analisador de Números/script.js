let numero = document.getElementById("txtn");
let sel = document.getElementById("sel");
let array = [];

function addNum() {
  let num = Number(numero.value);

  if (num > 100 || num < 1) {
    num = "";
    document.getElementById("txtn").value = "";
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

  let res = document.getElementById("res");

  res.innerHTML += `<p>Ao todo, temos ${array.length} numeros cadastrados</p>`;
  res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`;
  res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`;
  res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`;
  res.innerHTML += `<p>A média dos valores digitados é ${media.toFixed(2)}</>`;
}
