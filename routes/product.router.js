const { Router } = require('express')
const { createProduct, updateProduct, deleteProduct, getProduct } = require('../controllers/product.controller')
const productRoutes = Router()


productRoutes.post('/', createProduct)
productRoutes.put('/', updateProduct)
productRoutes.delete('/', deleteProduct)
productRoutes.get('/', getProduct)


module.exports = {
    productRoutes
}