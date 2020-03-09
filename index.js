
const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() =>{
    console.log("DB connection successful!")
    app.listen(config.port, () => {
      console.log(`API REST corriendo en http://localhost:${config.port}`);
    })}
  )
  .catch(error => {
    console.log(error);
  });
