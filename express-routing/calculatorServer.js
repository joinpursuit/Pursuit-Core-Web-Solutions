const express = require('express')
const cors = require('cors')

const app = express()
app.use(cores())

app.get("/add/:numOne/:numTwo", (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  let n1 = parseFloat(req.params.firstNum)
  let n2 = parseFloat(req.params.secondNum)
  res.json({'result': n1 + n2})
})

const portNum = 8000

app.listen(portNum, function(){
    console.log(`Server starting on port ${portNum}`);
});
