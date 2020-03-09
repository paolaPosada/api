'use strict'
const Product = require('../models/products')

function getProduct (req, res){
  let productId = req.params.productId
  console.log(productId);
  Product.findById (productId,(err, product) => {
    if (err) return res.status(500).send({message:`Error al realizar la peticion: ${err}`})
    if (!product) return res.status(404).send({message: `El producto no existe`})
    res.send(200, {product})
  })
}

function getProducts (req, res){
  Product.find({}, (err, products) =>{
    if (err) return res.status(500).send({message:`Error al realizar la peticion: ${err}`})
    if (!products) return res.status(404).send({message: `No existen productos`})
    res.send(200, {products})
  })
}

function saveProduct( req, res){
  console.log('POST /api/product')
  console.log(req.body)

  let product = new Product()
  const {name, picture, price, category, description} = req.body;
  
  product = {name, picture, price, category, description}
  product.save((err, productStored) => {
    if(err) res.status(500).send({message: `Error al guardar la base de datos: ${err}`})
    res.status(200).send({product: productStored})
  })
}

function updateProduct (req, res){
  let productId = req.params.productId
  let update = req.body

  Product.findByIdAndUpdate(productId, update, (err,productUpdated) =>{
    if (err) return res.status(500).send({message:`Error al actualizar la peticion: ${err}`})

    res.status(200).send({product: productUpdated})

  })
}

function deleteProduct (req, res){
  let productId = req.params.productId

  Product.findById(productId, (err, product) =>{
    if (err) res.status(500).send({message: `Error al borrar el producto: ${err}`})

    product.remove(err => {
      if (err) res.status(500).send({message: `Error al borrar el producto: ${err}`})
      res.status(200).send({message: `El producto ha sido eliminado`})
    })
  })
}

module.exports = {
 getProduct,
 getProducts,
 saveProduct,
 updateProduct,
 deleteProduct
}
