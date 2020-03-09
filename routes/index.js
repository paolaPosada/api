'use strict'

const express = require('express')
const {getProduct, getProducts, saveProduct, updateProduct, deleteProduct} = require('../controllers/products')
const productCtrl= require('../controllers/products')
const userCtrl = require('../controllers/user')
const auth = require('../middlewares/auth')
const api = express.Router()


api.get('/product',getProducts)
api.get('/product/:productId', getProduct)
api.post('/product', auth, productCtrl.saveProduct)
api.put('/product/:productId', auth, productCtrl.updateProduct)
api.delete('/product/:productId', auth, productCtrl.deleteProduct)
api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)

api.get('/private', auth, (req, res) =>{
    res.status(200).send({message:`Tienes acceso`})
})
module.exports = api
