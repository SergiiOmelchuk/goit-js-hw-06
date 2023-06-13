const refs = {
  form: document.querySelector(".login-form"),
};

refs.form.addEventListener("submit", handleSubmit);
const registrationDatas = {};
function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Всі поля мають бути заповненими!");
    return;
  } else {
    registrationDatas[email.name] = email.value;
    registrationDatas[password.name] = password.value;
  }
  console.log(registrationDatas);
  event.currentTarget.reset();
}
