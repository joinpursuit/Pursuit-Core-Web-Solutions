document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector("#calculatorForm")
  form.addEventListener('submit', getResultAndUpdateUI)
})

async function getResultAndUpdateUI(event) {
  event.preventDefault()
  let firstNum = document.querySelector('#numOne').value
  let secondNum = document.querySelector('#numTwo').value
  let operator = document.querySelector('#operatorSelect').value
  let operatorDescription = getOperatorDescription(operator)
  let response = await axios.get(`http://localhost:8000/${operatorDescription}/${firstNum}/${secondNum}`)

  let resultSpan = document.querySelector('#resultSpan')
  resultSpan.innerText = response.data.result
}

function getOperatorDescription(operator) {
  switch (operator) {
    case "+":
      return "add"
    case "-":
      return "subtract"
    case "x":
      return "multiply"
    case "/":
      return "divide"
  }
}
