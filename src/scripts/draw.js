let containerDrawnNumbers = [];

// FUNÇÃO PARA SORTEAR OS NÚMEROS
function drawNumbers(drawnSettings) {
  console.log(drawnSettings);
  for (let i = 0; i < drawnSettings.amount; i++) {
    let drawNumber =
      Math.floor(Math.random() * (drawnSettings.max - drawnSettings.min + 1)) +
      drawnSettings.min;

    if (drawnSettings.noRepeat && containerDrawnNumbers.includes(drawNumber)) {
      i--;
    } else {
      containerDrawnNumbers.push(drawNumber);
    }
  }
}

export { drawNumbers, containerDrawnNumbers };
