import express from 'express'
import { getGameList, addGame, deleteGame, getGame, updateKeyGame, updateDiscountGame } from '../controllers/gameControllers.js'

const router = express.Router()
router.get("/", getGameList)
router.post("/add", addGame)
router.route("/update/key/:id").put(updateKeyGame)
router.route("/update/discount/:id").put(updateDiscountGame)
router.get('/:Id', getGame)
router.route("/delete/:id").delete(deleteGame)

export default router