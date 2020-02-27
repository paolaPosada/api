
const mongoose = require('mongoose')
const app = require('./app')
//Importar modelo

const port = process.env.PORT || 3001
mongoose.connect('mongodb+srv://sht:nijOcHQF7ixdZWc4@cluster0-7av5w.mongodb.net/smartparking?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() =>{
  console.log("DB connection successful!")
  app.listen(port, () => {
    console.log(`API REST corriendo en http://localhost:${port}`);
  })}
  )
  .catch(error => {
    console.log(error);
  });
