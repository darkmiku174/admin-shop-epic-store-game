import express from 'express'
import { getCart, getCarts, deleteCart } from '../controllers/cartControllers.js'

const router = express.Router()

router.get("/", getCarts)

router.get('/:Id', getCart)
router.route("/delete/:id").delete(deleteCart)
export default router