document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector("#calculatorForm")
  form.addEventListener('submit', getResultAndUpdateUI)
})

async function getResultAndUpdateUI(event) {
  event.preventDefault()
  let firstNum = document.querySelector('#numOne').value
  let secondNum = document.querySelector('#numTwo').value
  let response = await axios.get("http://localhost:8000/").data
  let resultSpan = document.querySelector('#resultSpan')
  resultSpan.innerText = response.result
}
