const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const elements = ingredients.map((element) => {
  const liEl = document.createElement("li");
  liEl.textContent = element;
  return liEl;
});

ingredientsList.append(...elements);
