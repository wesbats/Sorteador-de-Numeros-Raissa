import { validatingInputs } from "./formatting-inputs.js";

const drawButton = document.querySelector(".draw-button");

export default drawButton.addEventListener("click", (event) => {
  event.preventDefault();

  validatingInputs();
});
