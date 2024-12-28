const iconNavBar = document.getElementById("navIcon");
const navBar = document.getElementById("navBar");
const main = document.getElementById("main");

iconNavBar.addEventListener("click", function () {
  if (navBar.style.display == "none") {
    navBar.style.display = "flex";
    main.style.filter = "blur(3px)";
  } else {
    navBar.style.display = "none";
    main.style.filter = "blur(0px)";
  }
});

const submit = document.getElementById("btnSubmit");
submit.addEventListener("click", function () {
  //Bloqueando a navbar quando clicado pra calcular
  iconNavBar.style.display = "none";

  const width = document.getElementById("width").value;
  const length = document.getElementById("length").value;
  const typePaint = document.getElementById("typePaint");
  const paintSelect = typePaint.value;

  //Tipos de tinta
  const massaCorrida = document.getElementById("mc").value;
  const tintaTextura = document.getElementById("tt").value;
  const grafiato = document.getElementById("g").value;
  const tintaAcrilica = document.getElementById("ta").value;
  const mc = isNaN(parseFloat(massaCorrida)) ? 0 : parseFloat(massaCorrida);
  const tt = isNaN(parseFloat(tintaTextura))? 0 : parseFloat(tintaTextura);
  const g = isNaN(parseFloat(grafiato))? 0 : parseFloat(grafiato);
  const ta = isNaN(parseFloat(tintaAcrilica))? 0 : parseFloat(tintaAcrilica);

  //Largura e comprimento
  let widthFloat = parseFloat(width);
  let lengthFloat = parseFloat(length);

  // Verificação se as dimensões são válidas
  if (isNaN(widthFloat) || isNaN(lengthFloat)) {
    alert("Por favor, insira valores válidos para largura e comprimento.");
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

  let descPaint = "";
  let calSelect = 0;
  //calculo final
  if (paintSelect == "mc") {
    descPaint = "Massa Corrida";
    calSelect = mc;
  } else if (paintSelect == "tt") {
    descPaint = "Tinta Textura";
    calSelect = tt;
  } else if (paintSelect == "g") {
    descPaint = "Tinta Grafiato";
    calSelect = g;
  } else if (paintSelect == "ta") {
    descPaint = "Tinta Acrílica";
    calSelect = ta;
  }
  //VARIAVEL COM O VALOR TOTAL DA MULTIPLICAÇÂO
  const total = totalWall * calSelect;
  console.log(total);

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
    "Tipo da tinta: " + descPaint + " R$" + calSelect + " por Metro Quadrado";

  const calcDesc = document.createElement("h2");
  calcDesc.textContent =
    widthStr +
    " X " +
    lengthStr +
    " = " +
    totalWall +
    " X " +
    calSelect +
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
