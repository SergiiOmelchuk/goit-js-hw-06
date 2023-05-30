const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", handledText);
function handledText(event) {
  if (event.currentTarget.value.length > 0) {
    output.textContent = event.currentTarget.value;
  } else {
    output.textContent = "Anonymous";
  }
}
