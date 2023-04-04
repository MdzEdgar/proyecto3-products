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

const getProductById = (req, res) => {
  const id =Number(req.params.id)
  productControllers.findProductById(id)
    .then(data => {
      if(!data) {
        return res.status(404).json({message: `Product with id ${id}, not found`})
      }
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(400).json({message: 'Bad request', err})
    })
}

module.exports = {
  getAllProducts,
  getProductById
}