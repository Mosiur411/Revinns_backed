const cors = require('cors');
const express = require('express');
const { connectDatabase } = require('./db/conn');
const app = express();
const port = process.env.PORT || 8080;
const { productRoutes } = require('./routes/product.router');
const { TableRoutes } = require('./routes/Table.router');
require('dotenv').config();


// middlewares
app.use(cors());
app.use(express.json());


// router 
app.use('/v1/product', productRoutes)
app.use('/v1/table', TableRoutes)






// database
const mongodb_uri = process.env.ENV !== 'dev' ? process.env.PROD_DB : process.env.DEV_DB
connectDatabase(mongodb_uri)
app.get('/', (req, res) => {
    res.send("hlw")
})

app.listen(port, function () {
    console.log(`You are listening to the port ${port}`);
})