const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Product = require('./models/products.models')
const routeProducts = require('./routes/product.routes')

const app = express();

app.use(bodyParser.json())

app.use('/api/products' , routeProducts)

mongoose.connect('mongodb+srv://yuva6542060:S87XbEscGJ6VHjMM@backenddb.rdu0q7v.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB')
  .then(() => {
    console.log('Connected to MongoDB database');
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
          console.log(`Server is running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });


app.get('/',(req,res)=>{
  res.send("This is message from the server ")
})