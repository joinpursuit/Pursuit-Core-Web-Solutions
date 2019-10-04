const axios = require('axios')

document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector("#calculatorForm")
  form.addEventListener('submit', getResultAndUpdateUI)
})

const getResultAndUpdateUI = () => {
  let firstNum = document.querySelector('#numOne').value
  let secondNum = document.querySelector('#numTwo').value
  let response = await axios.get("http://localhost:8000/").data
  let resultSpan = document.querySelector('#resultSpan')
  resultSpan.innerText = response.result
}
