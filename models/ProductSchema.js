const { default: mongoose } = require("mongoose")

const ProductSchema = mongoose.Schema({
    ProductID: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        min: [5, 'min 6 digit'],
        max: [50, 'max 6 digit'],
    },
    Description: {
        type: String,
        trim: true,
        required: true,
        min: [5, 'min 6 digit'],
        max: [100, 'max 6 digit'],
    },
    UnitPrice: {
        type: Number,
        trim: true,
        required: true
    },
    Quantity: {
        type: Number,
        trim: true,
        required: true
    },
}, { timestamps: true })


module.exports = {
    ProductModel: mongoose.model('Product', ProductSchema)
}