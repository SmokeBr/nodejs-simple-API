const express = require('express')
const routes = express.Router()

let db = [
  { '1' : { Nome: 'JOHN 1', idade: '10'}},
  { '1' : { Nome: 'jovem 2', idade: '24'}},
  { '1' : { Nome: 'thofin 3', idade: '22'}},
]
//Buscar Dados
routes.get('/', (req, res) => {
  return res.json(db)
})
//Inserir Dados
routes.post('/add', (req, res) => {
  const body = req.body

  if (!body)
    return res.status(400).end()

    db.push(body)
    return res.json(body)
})

routes.delete('/:id', (req, res) => {
  const id = req.params.id// IDEA:

  let newDB = db.filter(item => {
    if(!item[id])
        return item
  })

  db.newDB

  return res.send(newDB)
})

module.exports = routes
