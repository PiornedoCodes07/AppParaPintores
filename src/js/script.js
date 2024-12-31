const iconNavBar = document.getElementById("navIcon");
const navBar = document.getElementById("navBar");
const main = document.getElementById("main");

//Função nav bar submenu
function toggleSubMenu(button) {
  button.nextElementSibling.classList.toggle("show");
  button.classList.toggle("rotate");
}

let valorTintaSelecionada = 0;
let descPaint = "";

//tinta select
const selectPaint = document.getElementById("typePaint");

//tintas calculo
// Funções para pegar o valor das tintas com base no perfil do cliente
function pegarPrecoTinta(tinta, perfilCliente) {
  // Capturando os valores dos inputs

  const minimoValue = document.getElementById(`${tinta}Min`).value;
  const medioValue = document.getElementById(`${tinta}Med`).value;
  const maximoValue = document.getElementById(`${tinta}Max`).value;
  const minimo = isNaN(parseFloat(minimoValue)) ? 0 : parseFloat(minimoValue);
  const medio = isNaN(parseFloat(medioValue)) ? 0 : parseFloat(medioValue);
  const maximo = isNaN(parseFloat(maximoValue)) ? 0 : parseFloat(maximoValue);

  // Verificando qual valor retornar de acordo com o perfil do cliente
  if (perfilCliente === "amarelo") {
    return minimo; // Retorna o valor mínimo
  } else if (perfilCliente === "verde") {
    return medio; // Retorna o valor médio
  } else if (perfilCliente === "azul") {
    return maximo; // Retorna o valor máximo
  }
}
// Funções para quando o cliente selecionar o perfil (cor)
document.getElementById("perfil-amarelo").addEventListener("click", () => {
  const massaCorridaPreco = pegarPrecoTinta("massaCorrida", "amarelo");
  const tintaTexturaPreco = pegarPrecoTinta("tintaTextura", "amarelo");
  const grafiatoPreco = pegarPrecoTinta("grafiato", "amarelo");
  const tintaAcrilicaPreco = pegarPrecoTinta("tintaAcrilica", "amarelo");

  // Captura o valor do select
  const selectPaintValue = selectPaint.value;

  // Exibe o preço selecionado (somando os preços como exemplo)
  if (selectPaintValue == "mc") {
    valorTintaSelecionada = massaCorridaPreco;
  } else if (selectPaintValue == "tt") {
    valorTintaSelecionada = tintaTexturaPreco;
  } else if (selectPaintValue == "g") {
    valorTintaSelecionada = grafiatoPreco;
  } else if (selectPaintValue == "ta") {
    valorTintaSelecionada = tintaAcrilicaPreco;
  }
});

document.getElementById("perfil-verde").addEventListener("click", () => {
  const massaCorridaPreco = pegarPrecoTinta("massaCorrida", "verde");
  const tintaTexturaPreco = pegarPrecoTinta("tintaTextura", "verde");
  const grafiatoPreco = pegarPrecoTinta("grafiato", "verde");
  const tintaAcrilicaPreco = pegarPrecoTinta("tintaAcrilica", "verde");

  // Captura o valor do select
  const selectPaintValue = selectPaint.value;

  // Exibe o preço selecionado (somando os preços como exemplo)
  if (selectPaintValue == "mc") {
    valorTintaSelecionada = massaCorridaPreco;
  } else if (selectPaintValue == "tt") {
    valorTintaSelecionada = tintaTexturaPreco;
  } else if (selectPaintValue == "g") {
    valorTintaSelecionada = grafiatoPreco;
  } else if (selectPaintValue == "ta") {
    valorTintaSelecionada = tintaAcrilicaPreco;
  }
});

document.getElementById("perfil-azul").addEventListener("click", () => {
  const massaCorridaPreco = pegarPrecoTinta("massaCorrida", "azul");
  const tintaTexturaPreco = pegarPrecoTinta("tintaTextura", "azul");
  const grafiatoPreco = pegarPrecoTinta("grafiato", "azul");
  const tintaAcrilicaPreco = pegarPrecoTinta("tintaAcrilica", "azul");

  // Captura o valor do select
  const selectPaintValue = selectPaint.value;

  // Exibe o preço selecionado (somando os preços como exemplo)
  if (selectPaintValue == "mc") {
    valorTintaSelecionada = massaCorridaPreco;
  } else if (selectPaintValue == "tt") {
    valorTintaSelecionada = tintaTexturaPreco;
  } else if (selectPaintValue == "g") {
    valorTintaSelecionada = grafiatoPreco;
  } else if (selectPaintValue == "ta") {
    valorTintaSelecionada = tintaAcrilicaPreco;
  }
});

///////////////////////////////

iconNavBar.addEventListener("click", function () {
  navBar.classList.toggle("active"); // Adiciona ou remove a classe 'active'
  //Armazenando as tintas no localstorage:
  const massaCorridaMin = document.getElementById("massaCorridaMin").value;
  const massaCorridaMed = document.getElementById("massaCorridaMed").value;
  const massaCorridaMax = document.getElementById("massaCorridaMax").value;

  const tintaTexturaMin = document.getElementById("tintaTexturaMin").value;
  const tintaTexturaMed = document.getElementById("tintaTexturaMed").value;
  const tintaTexturaMax = document.getElementById("tintaTexturaMax").value;

  const grafiatoMin = document.getElementById("grafiatoMin").value;
  const grafiatoMed = document.getElementById("grafiatoMed").value;
  const grafiatoMax = document.getElementById("grafiatoMax").value;

  const tintaAcrilicaMin = document.getElementById("tintaAcrilicaMin").value;
  const tintaAcrilicaMed = document.getElementById("tintaAcrilicaMed").value;
  const tintaAcrilicaMax = document.getElementById("tintaAcrilicaMax").value;

  localStorage.setItem("massaCorridaMin", massaCorridaMin);
  localStorage.setItem("massaCorridaMed", massaCorridaMed);
  localStorage.setItem("massaCorridaMax", massaCorridaMax);

  localStorage.setItem("tintaTexturaMin", tintaTexturaMin);
  localStorage.setItem("tintaTexturaMed", tintaTexturaMed);
  localStorage.setItem("tintaTexturaMax", tintaTexturaMax);

  localStorage.setItem("grafiatoMin", grafiatoMin);
  localStorage.setItem("grafiatoMed", grafiatoMed);
  localStorage.setItem("grafiatoMax", grafiatoMax);

  localStorage.setItem("tintaAcrilicaMin", tintaAcrilicaMin);
  localStorage.setItem("tintaAcrilicaMed", tintaAcrilicaMed);
  localStorage.setItem("tintaAcrilicaMax", tintaAcrilicaMax);
});

const submit = document.getElementById("btnSubmit");

submit.addEventListener("click", function () {
  const width = document.getElementById("width").value;
  const length = document.getElementById("length").value;

  //Largura e comprimento
  let widthFloat = parseFloat(width);
  let lengthFloat = parseFloat(length);

  // Verificação se as dimensões são válidas
  if (isNaN(widthFloat) || isNaN(lengthFloat)) {
    // Exibe uma mensagem informando que falta dados
    Toastify({
      text: "Insira os dados Corretamente!",
      duration: 2000,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "#ff0000",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
    iconNavBar.style.display = "flex";
    return;
  }
  //Pegando o select de Medidas
  const widthMeasure = document.getElementById("larguraMedida").value;
  const lengthMeasure = document.getElementById("comprimentoMedida").value;
  if (widthMeasure == "Cm") {
    widthFloat = widthFloat / 100;
  } else if (widthMeasure == "MM") {
    widthFloat = widthFloat / 1000;
  }
  if (lengthMeasure == "Cm") {
    lengthFloat = lengthFloat / 100;
  } else if (lengthMeasure == "MM") {
    lengthFloat = lengthFloat / 1000;
  }

  const totalWall = widthFloat * lengthFloat;

  //VARIAVEL COM O VALOR TOTAL DA MULTIPLICAÇÂO
  const total = totalWall * valorTintaSelecionada;

  //Criando modal total
  const divModal = document.createElement("div");
  divModal.className = "divModal";
  //Botao de Fechar
  const closeModal = document.createElement("h2");
  closeModal.textContent = "X";
  closeModal.style.textAlign = "right";
  closeModal.addEventListener("click", function () {
    iconNavBar.style.display = "flex";
    divModal.style.display = "none";
  });
  //Altura
  const widthStr = String(widthFloat);
  const larguraDesc = document.createElement("h2");
  larguraDesc.textContent = "Altura: " + widthStr + "m";
  //Comprimento
  const lengthStr = String(lengthFloat);
  const comprimentoDesc = document.createElement("h2");
  comprimentoDesc.textContent = "Comprimento: " + lengthStr + "m";
  //Tipo da tinta
  const paintDescModal = document.createElement("h2");
  paintDescModal.textContent =
    "Tipo da tinta: " +
    descPaint +
    " R$" +
    valorTintaSelecionada +
    " por Metro Quadrado";

  const calcDesc = document.createElement("h2");
  calcDesc.textContent =
    widthStr +
    " X " +
    lengthStr +
    " = " +
    totalWall +
    " X " +
    valorTintaSelecionada +
    " = " +
    total;
  const totalLabel = document.createElement("h2");
  totalLabel.textContent = "Valor a ser cobrado:";

  const totalDesc = document.createElement("h1");
  totalDesc.textContent = total;
  divModal.appendChild(closeModal);
  divModal.appendChild(larguraDesc);
  divModal.appendChild(comprimentoDesc);
  divModal.appendChild(paintDescModal);
  divModal.appendChild(calcDesc);
  divModal.appendChild(totalLabel);
  divModal.appendChild(totalDesc);
  main.appendChild(divModal);
});

// Preencher os inputs com os dados do LocalStorage quando a página carregar
window.addEventListener("load", function () {
  const massaCorridaMin = localStorage.getItem("massaCorridaMin");
  const massaCorridaMed = localStorage.getItem("massaCorridaMed");
  const massaCorridaMax = localStorage.getItem("massaCorridaMax");

  const tintaTexturaMin = localStorage.getItem("tintaTexturaMin");
  const tintaTexturaMed = localStorage.getItem("tintaTexturaMed");
  const tintaTexturaMax = localStorage.getItem("tintaTexturaMax");

  const grafiatoMin = localStorage.getItem("grafiatoMin");
  const grafiatoMed = localStorage.getItem("grafiatoMed");
  const grafiatoMax = localStorage.getItem("grafiatoMax");

  const tintaAcrilicaMin = localStorage.getItem("tintaAcrilicaMin");
  const tintaAcrilicaMed = localStorage.getItem("tintaAcrilicaMed");
  const tintaAcrilicaMax = localStorage.getItem("tintaAcrilicaMax");

  if (massaCorridaMin)
    document.getElementById("massaCorridaMin").value = massaCorridaMin;
  if (massaCorridaMed)
    document.getElementById("massaCorridaMed").value = massaCorridaMed;
  if (massaCorridaMax)
    document.getElementById("massaCorridaMax").value = massaCorridaMax;

  if (tintaTexturaMin)
    document.getElementById("tintaTexturaMin").value = tintaTexturaMin;
  if (tintaTexturaMed)
    document.getElementById("tintaTexturaMed").value = tintaTexturaMed;
  if (tintaTexturaMax)
    document.getElementById("tintaTexturaMax").value = tintaTexturaMax;

  if (grafiatoMin) document.getElementById("grafiatoMin").value = grafiatoMin;
  if (grafiatoMed) document.getElementById("grafiatoMed").value = grafiatoMed;
  if (grafiatoMax) document.getElementById("grafiatoMax").value = grafiatoMax;

  if (tintaAcrilicaMin)
    document.getElementById("tintaAcrilicaMin").value = tintaAcrilicaMin;
  if (tintaAcrilicaMed)
    document.getElementById("tintaAcrilicaMed").value = tintaAcrilicaMed;
  if (tintaAcrilicaMax)
    document.getElementById("tintaAcrilicaMax").value = tintaAcrilicaMax;
});

//Função Dark Mode
const body = document.getElementById("body");
const icon = document.getElementById("icon");

// Função para ativar ou desativar o modo dark
function toggleDarkMode() {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark"); // Armazena no localStorage que o tema é dark
  } else {
    localStorage.setItem("theme", "light"); // Armazena no localStorage que o tema é light
  }
}

// Verifica o tema salvo no localStorage ao carregar a página
function loadTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.classList.add(savedTheme); // Adiciona a classe 'dark' ou 'light' dependendo do valor armazenado
  } else {
    localStorage.setItem("theme", "light"); // Define o tema padrão como light se não houver nada armazenado
  }
}
// Ativa o modo escuro ao clicar no ícone
icon.addEventListener("click", toggleDarkMode);

// Carrega o tema ao carregar a página
loadTheme();
