const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.get("/add/:numOne/:numTwo", (req, res) => {
  console.log("Received a request with params:")
  console.log(req.params)
  let firstFloat = parseFloat(req.params.numOne)
  let secondFloat = parseFloat(req.params.numTwo)
  let sum = firstFloat + secondFloat
  res.json({'result': sum})
})

const portNum = 8000

app.listen(portNum, function(){
    console.log(`Server starting on port ${portNum}`);
});
