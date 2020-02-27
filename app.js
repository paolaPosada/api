'use strict'
const express = require('express')
const bodyParser = require('body-parser')

const app = express() //Framework
const api = require('./routes')
// Midelware
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use('/api', api)

module.exports = app
