'use strict'

const express = require('express')
const ProductCtrl = require('../controllers/products')
const api = express.Router()

api.get('/product',ProductCtrl.getProducts)
api.get('/product/:productId', ProductCtrl.getProducts)
api.post('/product', ProductCtrl.saveProduct)
api.put('/product/:productId', ProductCtrl.updateProduct)
api.delete('/product/:productId', ProductCtrl.deleteProduct)

module.exports = api
