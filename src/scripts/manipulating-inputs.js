const allInputs = document.querySelectorAll(".input-wrapper input");
const noRepeatButton = document.querySelector(".no-repeat-button");
const inputValues = {
  amountNumber: "",
  minNumber: "",
  maxNumber: "",
};

// Formata os inputs para que aceitem apenas números.
allInputs.forEach((input) => {
  input.oninput = () => {
    const hasCharactersRegex = /\D|W+/g;
    input.value = input.value.replace(hasCharactersRegex, "");
  };
});

// Função para validar os inputs.
export function validatingInputs() {
  inputValues.amountNumber = document
    .querySelector("#amount-number")
    .value.trim();
  inputValues.minNumber = document.querySelector("#min-number").value.trim();
  inputValues.maxNumber = document.querySelector("#max-number").value.trim();

  // Verifica se algum campo está vazio
  if (
    !inputValues.amountNumber ||
    !inputValues.minNumber ||
    !inputValues.maxNumber
  ) {
    alert(
      "Por favor, insira um número válido. Estes campos não podem estar vazios ou conterem caracteres não numéricos."
    );
    return false;
  }

  inputValues.amountNumber = parseInt(inputValues.amountNumber);
  inputValues.minNumber = parseInt(inputValues.minNumber);
  inputValues.maxNumber = parseInt(inputValues.maxNumber);

  // Verifica se os valores são menores ou iguais a zero.
  if (inputValues.amountNumber <= 0 || inputValues.maxNumber <= 0) {
    alert("Por favor, insira um valor maior que zero.");
    return false;
  }

  // Verifica se o número mínimo é maior que o número máximo.
  if (inputValues.minNumber >= inputValues.maxNumber) {
    alert(
      "O número mínimo não pode ser maior que o número máximo. Por favor, insira valores válidos."
    );
    return false;
  }

  // Verifica se a quantidade de números é maior que o número máximo quando a opção de "Não repetir números" estiver ativada.
  if (
    inputValues.amountNumber > inputValues.maxNumber &&
    noRepeatButton.checked
  ) {
    alert(
      'A quantidade de números não pode ultrapassar o valor máximo quando a opção "Não repetir números" estiver ativada. Tente novamente.'
    );
    return false;
  }
  console.log(inputValues);
  return true;
}

export function getDrawSettings() {
  return {
    amount: inputValues.amountNumber,
    min: inputValues.minNumber,
    max: inputValues.maxNumber,
    noRepeat: noRepeatButton.checked,
  };
}
