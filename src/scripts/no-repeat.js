import { inputValues } from "./manipulating-inputs.js";
import { drawANumber, containerDrawnNumbers } from "./draw.js";

const noRepeatButton = document.querySelector(".no-repeat-button");

// Função para não repetir os números
function noRepeatNumber() {
  // Se só tem um número, não há o que remover.
  if (containerDrawnNumbers.length < 2) return;

  // Pega o último número do array.
  const lastNumber = containerDrawnNumbers[containerDrawnNumbers.length - 1];

  // Conterá todos os números iguais ao último sorteado.
  const index = containerDrawnNumbers.filter((num) => num === lastNumber);

  if (index.length > 1) {
    // Remove o último número se ele já foi sorteado antes
    containerDrawnNumbers.pop();
    drawANumber(inputValues.minNumber, inputValues.maxNumber);
  }
}

export { noRepeatNumber, noRepeatButton };
