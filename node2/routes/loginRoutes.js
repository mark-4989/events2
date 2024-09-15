import express from 'express'
import { actualLogin, createLogin } from '../action/login.js'

const router =express.Router()

router.post('/',createLogin)
router.post('/a/',actualLogin)

router.get('/',)
router.get('/gen',)
router.get('/ver',)
router.get('/reset',)

router.put('/userup')
router.put('/reset')

export default router;