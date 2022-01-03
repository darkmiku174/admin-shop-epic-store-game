import express from 'express'
import { getOrder, getOrderList, addOrder, deleteOrder } from '../controllers/orderControllers.js'

const router = express.Router()

router.get("/", getOrderList)
router.get('/:Id', getOrder)
router.post("/add", addOrder)
router.route("/delete/:id").get(getOrder).delete(deleteOrder)


export default router