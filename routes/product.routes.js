const express = require('express')
const router = express.Router()

const prod  = require('../controller/product.controller.js')

router.get('/:id' , prod.getProduct)
router.get('/' , prod.getProducts)

router.post('/' , prod.postProduct)

router.put('/:id' , prod.putProduct)

router.delete('/:id' , prod.deleteProduct)

module.exports = router