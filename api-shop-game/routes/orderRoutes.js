import express from 'express'
import { getOrder, getOrders, getReportSellGames, getOrderByStatus } from '../controllers/orderControllers.js'

const router = express.Router()

router.get("/", getOrders)
router.get("/report", getReportSellGames )
router.get("/type/:id", getOrderByStatus )
router.get('/:Id', getOrder)
// router.route("/delete/:id").delete(deleteUser)
export default router