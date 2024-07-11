const http = require('node:http')
const findAvailablePort = require('./10.free-port.js')

// Un servidor puede hacer solo dos cosas,
// recibir una petición
// y enviar lo que se le pidio
// req representa el pedido, y va primero
// res representa la respuesta y va segunda
const server = http.createServer((req, res) => {
  // Los console.log se ejecutan en el servidor
  // por lo tanto no se ven en la consola del cliente
  console.log('request received')
  res.end('Hello World')
})

// listen()
// it is actively waiting for
// incoming connection requests on
// a specific IP address and port number

findAvailablePort(3000).then((port) => {
  server.listen((port), () => {
    console.log(`Server listening on port http://localhost:${port}`)
  })
})
