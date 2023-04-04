const router = require('express').Router()

const productServices = require('./products.services')

router.route('/')
  .get(productServices.getAllProducts)

router.route('/:id')
  .get(productServices.getProductById)

module.exports = router