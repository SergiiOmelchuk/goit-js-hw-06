const refs = {
  inputRange: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
};

refs.inputRange.addEventListener("change", handlechange);
function handlechange() {
  refs.span.style.fontSize = refs.inputRange.value + "px";
}
