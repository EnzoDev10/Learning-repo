const getBtn = document.getElementById('get')
const postBtn = document.getElementById('post')
const input = document.getElementById('input')

// Con una URL podes mandar pedidos o subir data al backend
const baseURL = 'http://localhost:8383/'

getBtn.addEventListener('click', getInfo)
postBtn.addEventListener('click', postInfo)

async function getInfo (e) {
  // Impide que la ventana se recargue cada vez que se ejecuta la función
  e.preventDefault()
  // manda un pedido a la url info para que en el backend,
  // La función que esta conectada a este puerto retorne lo que se pide
  const res = await fetch(baseURL + 'info/ENZO', {

    // Esto especifica la acción, en este caso GET
    method: 'GET'

  })
  console.log(res)
  // Un vez que la respuesta se devuelve, la convierte en un json
  const data = await res.json()
  // Y aplica lo que se encuentre dentro del apartado de info
  input.value = data.info
}

async function postInfo (e) {
  e.preventDefault()
  if (input.value === '') { return }
  const res = await fetch(baseURL, {

    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({ parcel: input.value })

  })
  return res
}
