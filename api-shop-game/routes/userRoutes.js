import express from 'express'
import { getUser, getUsers, deleteUser } from '../controllers/userControllers.js'

const router = express.Router()

router.get("/", getUsers)

router.get('/:Id', getUser)
router.route("/delete/:id").delete(deleteUser)
export default router