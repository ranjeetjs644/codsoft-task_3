let screen = document.getElementById("screen");
let currentInput = "";

function appendValue(value) {
  currentInput += value;
  screen.value = currentInput;
}

function clearScreen() {
  currentInput = "";
  screen.value = "";
}

function calculateResult() {
  try {
    currentInput = eval(currentInput).toString();
    screen.value = currentInput;
  } catch (e) {
    screen.value = "Error";
    currentInput = "";
  }
}