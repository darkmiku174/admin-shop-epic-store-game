import express from 'express'
// import { getProduct, getProductList, getProductLike, addProduct, deleteProduct, getProductByTrademark } from '../controllers/productControllers.js'
import {getGameList, addGame } from '../controllers/gameControllers.js'

const router = express.Router()

router.get("/", getGameList)
router.post("/add", addGame)
// router.get("/search", getProductLike)
// router.get('/:Id', getProduct)
// router.route("/delete/:id").get(getProduct).delete(deleteProduct)
// router.get("/trademark/:id", getProductByTrademark)


export default router