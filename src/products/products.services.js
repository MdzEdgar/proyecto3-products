const productControllers = require('./products.controllers')

const getAllProducts = (req, res) => {
  productControllers.findAllProducts()
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => {
      res.status(400).json({message: 'Bad request', err})
    })
}

module.exports = {
  getAllProducts
}