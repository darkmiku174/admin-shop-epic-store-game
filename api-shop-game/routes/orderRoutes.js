import express from 'express'
import { getOrder, getOrders, getReportSellGames } from '../controllers/orderControllers.js'

const router = express.Router()

router.get("/", getOrders)
router.get("/report", getReportSellGames )
router.get('/:Id', getOrder)
// router.route("/delete/:id").delete(deleteUser)
export default router