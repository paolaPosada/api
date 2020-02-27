
const mongoose = require('mongoose')
const app = require('./app')
//Importar modelo

const port = process.env.PORT || 3001

mongoose.connect('mongodb+srv://sht:nijOcHQF7ixdZWc4@cluster0-7av5w.mongodb.net/smartparking?retryWrites=true&w=majority', (err,res) =>{
  if(err) {
    return console.log(`Error al conectar a la base de datos: ${err}`)
  }
  console.log('Conexion a la base de datos establecida')

  app.listen(port, () => {
    console.log(`API REST corriendo en http://localhost:${port}`);
  })
})
