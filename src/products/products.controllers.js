const Products = require('../models/products.models')

const findAllProducts = async() => {
    const products = await Products.findAll()
}

const findProductById = async(id) => {
    //? Your code here:
}

const createProduct = async(productObj) => {
    //? Your code here:
}

const updateProduct = async(id, productObj) => {
    //? Your code here:
    
}

const deleteProduct = async(id) => {
    //? Your code here:

}

module.exports = {
    findAllProducts,
    findProductById,
    createProduct,
    updateProduct,
    deleteProduct
}
