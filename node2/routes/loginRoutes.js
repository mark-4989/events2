import express from 'express'
import { createLogin } from '../action/login.js'

const router =express.Router()

router.post('/',createLogin)

export default router;