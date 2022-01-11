import express from 'express'
import { getVocherList, getVocher, addVocher } from '../controllers/vocherControllers.js'

const router = express.Router()

router.get("/", getVocherList)
router.post("/add", addVocher)
router.get('/:Id', getVocher)

export default router