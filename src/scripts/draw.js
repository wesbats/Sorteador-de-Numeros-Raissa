import { noRepeatNumber, noRepeatButton } from "./no-repeat.js";

let containerDrawnNumbers = [];
let drawNumber = 0;

// FUNÇÃO PARA SORTEAR OS NÚMEROS
const drawANumber = (min, max) => {
  drawNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  // Atribui cada número sorteado ao array.
  containerDrawnNumbers.push(drawNumber);

  // Condição para caso o usuário náo queira repetir os números.
  if (noRepeatButton.checked) noRepeatNumber();
};

export { drawANumber, containerDrawnNumbers };
