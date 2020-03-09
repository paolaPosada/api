'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')

const app = express() //Framework
const api = require('./routes')
// Midelware
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.engine('.hbs', hbs({
    defaultLayout: "default",
    extname: '.hbs'
}))
app.set('view engine', '.hbs')

app.use('/api', api)
app.get('/login',(req, res) =>{
    res.render("login")
})
module.exports = app
