import express from 'express'
import { getColections, getCollection, deleteCollection } from '../controllers/collectionControllers.js'

const router = express.Router()

router.get("/", getColections)

router.get('/:Id', getCollection)
router.route("/delete/:id").delete(deleteCollection)
export default router