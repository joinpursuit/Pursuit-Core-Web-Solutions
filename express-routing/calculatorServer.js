const express = require('express')

const app = express()

app.get("/add/:numOne/:numTwo", (req, res) => {
  let n1 = parseFloat(req.params.firstNum)
  let n2 = parseFloat(req.params.secondNum)
  res.json({'result': n1 + n2})
})

const portNum = 8000

app.listen(portNum, function(){
    console.log(`Server starting on port ${portNum}`);
});
