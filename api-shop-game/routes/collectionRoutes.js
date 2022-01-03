import express from 'express'
import {getColections, addCollection, deleteCollection, getColection } from '../controllers/collectionSchema.js'

const router = express.Router()

router.get("/", getColections)
router.post("/add", addCollection)
// router.route("/delete/:id").get(getColection).delete(deleteCollection)


export default router