import { validatingInputs, getDrawSettings } from "./manipulating-inputs.js";
import { drawNumbers } from "./draw.js";
import showResults from "./show-results.js";

const drawButton = document.querySelector(".draw-button");
const drawAgainButton = document.querySelector(".play-again-button");
const toDrawContainer = document.getElementById("to-draw-container");
const resultContainer = document.getElementById("result-container");

drawButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (validatingInputs()) {
    // Se a função retornar `true`, ocorrerá a troca entre os containers de sorteio e exibição do resultado.
    toDrawContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");

    // Chama a função para sortear os números o número de vezes solicitado pelo usuário.
    drawNumbers(getDrawSettings());

    // Mostra o resultado.
    showResults();
  }
});

drawAgainButton.addEventListener("click", () => {
  window.location.reload();
});

export { drawButton, drawAgainButton };
