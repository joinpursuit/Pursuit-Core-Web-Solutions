document.addEventListener("DOMContentLoaded", () => {
  let list = document.querySelector("ul");
  let form = document.querySelector("form");

  let displayError = () => {
    let errorParagraph = document.querySelector("#error-msg")
    errorParagraph.innerText = "Error! Todo cannot be empty"
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let todoInput = document.querySelector("input")
    let todoText = todoInput.value;
    let newLi = document.createElement('li')
    if (!todoText) {
      displayError()
    } else {
      newLi.innerText = todoText;
      list.appendChild(newLi);
      todoInput.value = "";
    }
  })

  list.addEventListener("click",  (event) => {
    let li = event.target;
    li.style.textDecoration = "line-through"
  })  
  
})
