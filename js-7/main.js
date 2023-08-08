const elInputName = document.querySelector(".input-name");
const elInputDate = document.querySelector(".input-date");
const elInputBoolean = document.querySelector("input-boolean");
const elForm = document.querySelector("#form");
const elCards = document.querySelector(".cards");


elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (elInputName.value !== "") {
    elCards.innerHTML = "";

    const newTodo = {
      id: todos.length,
      title: elInputName.value,
      created: elInputDate.value,
      isDone: false,
    };
    todos.push(newTodo);

    renderTodos(todos, elCards);

    elForm.reset();
  } else {
    alert("Error");
  }
});

function renderTodos(array, parent) {
  for (let i = 0; i < array.length; i++) {
    const newCard = document.createElement("div");
    newCard.className = "form-control";
    newCard.innerHTML = `
      <div class="card-title ">${array[i].title}</div>
      <p> ${array[i].created}</p>
      <p> ${array[i].boolean}</p>
      
      `;

    parent.appendChild(newCard);
  }
}

renderTodos(todos, elCards);