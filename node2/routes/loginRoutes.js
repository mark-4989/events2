import express from 'express'
import { actualLogin, createLogin } from '../action/login.js'

const router =express.Router()

router.post('/',createLogin)
router.post('/a',actualLogin)

export default router;