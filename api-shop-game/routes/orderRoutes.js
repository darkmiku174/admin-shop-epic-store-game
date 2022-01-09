import express from 'express'
import { getOrder, getOrders } from '../controllers/orderControllers.js'

const router = express.Router()

router.get("/", getOrders)

router.get('/:Id', getOrder)
// router.route("/delete/:id").delete(deleteUser)
export default router