const { default: mongoose } = require("mongoose")

const TableSchema = mongoose.Schema({
    TableNumber: {
        type: Number,
        trim: true,
        required: true,
        unique: true,
    },
    total: {
        type: Number,
        default: 0
    }
}, { timestamps: true })




module.exports = {
    TableModel: mongoose.model('table', TableSchema)
}