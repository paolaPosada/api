
const mongoose = require('mongoose')
const app = require('./app')
//Importar modelo

const port = process.env.PORT || 3001
mongoose.connect('mongodb://localhost:27017/shop', {
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
