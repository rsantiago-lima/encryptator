const code = [
  ["a", "!"],
  ["b", "@"],
  ["c", "0"],
  ["d", "#"],
  ["e", "8"],
  ["f", "$"],
  ["g", "2"],
  ["h", "%"],
  ["i", "ª"],
  ["j", "3"],
  ["k", "&"],
  ["l", "*"],
  ["m", ":"],
  ["n", "5"],
  ["o", "?"],
  ["p", "6"],
  ["q", "+"],
  ["r", "7"],
  ["s", "-"],
  ["t", "1"],
  ["u", ";"],
  ["v", "9"],
  ["w", "/"],
  ["x", "4"],
  ["y", "|"],
  ["z", "°"],
];

const criptografar = document.getElementById("button__criptografar");
const descriptografar = document.getElementById("button__descriptografar");
const copy = document.getElementById("button__copiar");
const textoInicial = document.getElementById("textoInput");
const textFinal = document.getElementById("textoFinal");
const blueGuy = document.getElementById("blue-guy");
const textInfo = document.getElementById("textoInfo");
const right = document.getElementById("right");

const replace = (newvalue) => {
  textFinal.innerHTML = newvalue;
  textFinal.classList.add("ajustar");
  right.classList.add("ajuste");
  textoInicial.value = "";
  textoInicial.style.height = "auto";
  textoInicial.placeholder = "Digite seu texto";
  blueGuy.classList.add("ocultar");
  textInfo.classList.add("ocultar");
  copy.classList.remove("button__ocultar");
};

const reset = () => {
  textoInicial.value = "";
  textoInicial.style.height = "auto";
  textFinal.innerHTML = "";
  right.classList.remove("ajuste");
  textFinal.classList.remove("ajustar");
  blueGuy.classList.remove("ocultar");
  textFinal.placeholder = "Nenhuma mensagem foi encontrada.";
  textInfo.classList.remove("ocultar");
  copy.classList.add("button__ocultar");
  textoInicial.focus();
};

criptografar.addEventListener("click", () => {
  const texto = textoInicial.value.toLowerCase();

  if (texto != "") {
    function criptografar(newtext) {
      for (let i = 0; i < code.length; i++) {
        if (newtext.includes(code[i][0])) {
          newtext = newtext.replaceAll(code[i][0], code[i][1]);
        }
      }
      return newtext;
    }
    replace(criptografar(texto));
  } else {
    alert("Digite algum texto para criptografar");
    reset();
  }
});

descriptografar.addEventListener("click", () => {
  const texto = textoInicial.value.toLowerCase();

  if (texto != "") {
    function descriptografar(newtext) {
      for (let i = 0; i < code.length; i++) {
        if (newtext.includes(code[i][1])) {
          newtext = newtext.replaceAll(code[i][1], code[i][0]);
        }
      }
      return newtext;
    }
    replace(descriptografar(texto));
  } else {
    alert("Digite algum texto para descriptografar");
    reset();
  }
});

copy.addEventListener("click", () => {
  let texto = textFinal;
  texto.select();
  document.execCommand("copy");
  alert("Texto Copiado");
  reset();
});
//Auto ajuste da textArea
textoInicial.addEventListener("change", (e) => {
  textoInicial.style.height = "auto";
  let scHeight = e.target.scrollHeight;
  textoInicial.style.height = `${scHeight}px`;
});
textoInicial.addEventListener("keyup", (e) => {
  textoInicial.style.height = "auto";
  let scHeight = e.target.scrollHeight;
  textoInicial.style.height = `${scHeight}px`;
});
