const express = require('express')
const app = express()
// Puerto principal, a partir de este se llevan a cabo las demas
// acciones
const port = 8383

// La app creada con express utiliza los archivos que se encuentran
// dentro de la carpeta static.
// Esto es, el archivo html y el archivo del frontend
app.use(express.static('public'))
app.use(express.json())
// Similar a un eventlistener que escucha no eventos
// Si no los pedidos que se hagan al puerto que tenga como argumento

// ":dynamic" es un paramo que podemos agregar al final de un request
// Podemos acceder a ese valor con "req.params"
app.get('/info/:dynamic', (req, res) => {
  const { dynamic } = req.params
  console.log(dynamic)
  // Esto es lo que retorna:
  // Un codigo de status positivo y
  // un objeto json con una key y su valor
  res.status(200).json({ info: 'preset text🐝' })
})

app.post('/', (req, res) => {
  const { parcel } = req.body
  console.log(parcel)
  if (!parcel) {
    return res.status(400).send({ status: 'failed' })
  }
  res.status(200).send({ status: 'recieved' })
})

// Si el port 8383 esta disponible avisa que esta funcionando
app.listen(port, () => console.log(`Server has started on port ${port}`))
