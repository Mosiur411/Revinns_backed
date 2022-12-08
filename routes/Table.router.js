const { Router } = require('express')
const { createTable, getTable, deleteTable, updateTable } = require('../controllers/table.controller')
const TableRoutes = Router()

TableRoutes.post('/', createTable)
TableRoutes.put('/', updateTable)
TableRoutes.delete('/', deleteTable)
TableRoutes.get('/', getTable)

module.exports = {
    TableRoutes
}