import express from 'express'
import { getColections, getCollection, deleteCollection, addCollection } from '../controllers/collectionControllers.js'

const router = express.Router()

router.get("/", getColections)
router.post("/add", addCollection)
router.get('/:Id', getCollection)
router.route("/delete/:id").delete(deleteCollection)
export default router