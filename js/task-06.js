const refs = {
  input: document.querySelector("#validation-input"),
};

refs.input.addEventListener("blur", (event) => {
  if (refs.input.value.length === Number(refs.input.dataset.length)) {
    refs.input.classList.add("valid");
  } else {
    refs.input.classList.add("invalid");
  }
});
