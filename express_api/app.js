const express = require('express')
const app = express()
app.use(express.json()) // Indica que usamos JSON
const port = 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/v1/explorers', (req, res) =>{
  console.log(`API Explorers GET ALL request ${new Date()}`)
  const explorer1 = {id: 1, name: "Luis"}
  const explorer2 = {id: 2, name: "Luis2"}
  const explorer3 = {id: 3 , name: "Luis3"}
  const explorer4 = {id: 4, name: "Luis4"}
  const explorers = [explorer1, explorer2, explorer3, explorer4]
  res.status(200).json(explorers)
})