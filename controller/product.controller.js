const Product = require('../models/products.models')

const getProducts = async (req,res)=>{
    try{
      console.log("getProducts is called")
      const products = await Product.find({})
      res.status(200).send(products)
    }
    catch(error){
      res.status(500).send(error)
    }
}
  
const getProduct  = async (req,res)=>{
    try{
        console.log("getProduct is called")
        const { id } = req.params
        const product = await Product.findById(id)
        res.send(product).status(200)
    }
    catch(err){
        res.sendStatus(500).send(err)
    }
}

const postProduct = async (req,res)=>{
    try{
      console.log("Post function is called")
      const product = await Product.create(req.body)
      res.status(200).send(product) 
    }
    catch(error){
      res.status(500).send(error)
    }
  }
  
const putProduct = async (req,res)=>{
      
    try{
      const {id} = req.params;
      const product = await Product.findByIdAndUpdate(id,req.body)
      if(!product){
        res.status(404).json({message : "Product Not Found"})
      }
      const updatedProduct = await Product.findById(id)
      res.status(200).send(updatedProduct)
    }
    catch(error){
      res.status(500).send(error)
    }
  }
  
const deleteProduct = async (req,res)=>{
    try{
      const { id } = req.params
      const product = await Product.findByIdAndDelete(id)
  
      if(!product){
        res.status(404).json({message : "Product Not Found"})
      }
      res.status(200).json({message : "Product deleted Successfully"})
    }
    catch(error){
      res.status(500).send(error)
    }
  }


module.exports = {
    getProducts,
    getProduct,
    postProduct,
    putProduct,
    deleteProduct
}