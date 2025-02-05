import { containerDrawnNumbers } from "./draw.js";

const ul = document.querySelector(".number-result-container");

export default function showResults() {
  // Usando forEach para iterar sobre os números
  containerDrawnNumbers.forEach((number, i) => {
    setTimeout(() => {
      // Cria o novo elemento <li>
      const li = document.createElement("li");
      li.classList.add("number-wrapper", "lh-150", "tt-align");
      li.innerHTML = `<span>${number}</span>`;

      ul.appendChild(li);
    }, 1000 * i);
  });
}
