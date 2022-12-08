const { ProductModel } = require("../models/ProductSchema");
const createProduct = async (req, res) => {
    try {
        const data = req.body;
        const product = await ProductModel(data)
        if (!product) return res.status(404).json({ error: "Product not exists" })
        const result = await product.save()
        return res.status(200).json({ message: result })
    } catch (err) {
        return res.status(500).json({ message: err })
    }
}
const updateProduct = async (req, res) => {
    try {
        const prodId = req.query.prodId
        const data = req.body
        if (data) {
            const product = await ProductModel.findByIdAndUpdate(prodId, data, { new: true })
            if (!product) return res.status(404).json({ error: "Product not exists" })
            const result = await product.save()
            return res.status(200).json({ result })
        }

    } catch (err) {
        const errorMessage = errorMessageFormatter(err)
        return res.status(500).json(errorMessage)
    }
}
const deleteProduct = async (req, res) => {
    try {
        const prodId = req.query.prodId
        if (!prodId) return res.status(403).json({ error: 'Product does not exists.' })
        const deleted = await ProductModel.deleteOne({ _id: prodId })
        return res.status(200).json({ deleted })
    } catch (err) {
        const errorMessage = errorMessageFormatter(err)
        return res.status(500).json(errorMessage)
    }
}
const getProduct = async (req, res) => {
    try {
        const result = await ProductModel.find()
        return res.status(200).json(result)
    } catch (err) {
        const errorMessage = errorMessageFormatter(err)
        return res.status(500).json(errorMessage)
    }

}
module.exports = { createProduct, updateProduct, deleteProduct, getProduct }