import { validatingInputs, inputValues } from "./manipulating-inputs.js";
import { drawANumber } from "./draw.js";

const drawButton = document.querySelector(".draw-button");

export default drawButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (validatingInputs()) {
    const toDrawContainer = document.getElementById("to-draw-container");
    const resultContainer = document.getElementById("result-container");

    // Se a função retornar `true`, ocorrerá a troca entre os containers de sorteio e exibição do resultado.
    toDrawContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");

    // Chama a função para sortear os números o número de vezes solicitado pelo usuário.
    for (let i = 1; i <= inputValues.amountNumber; i++) {
      drawANumber(inputValues.minNumber, inputValues.maxNumber);
    }
  }
});
