const router = require('express').Router()

const productServices = require('./products.services')

router.route('/')
  .get(productServices.getAllProducts)
  .post(productServices.postProduct)

router.route('/:id')
  .get(productServices.getProductById)
  .patch(productServices.patchProduct)

module.exports = router