const router = require('express').Router()

const productServices = require('./products.services')

router.route('/')
  .get(productServices.getAllProducts)



module.exports = router