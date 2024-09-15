import express from 'express'
import { actualLogin, createLogin, getUser } from '../action/login.js'

const router =express.Router()

router.post('/',createLogin) //register user
router.post('/a/',actualLogin) //login

router.get('/a/:userName',getUser) //gets user with username
router.get('/gen',) //generates random otp
router.get('/ver',) //verify generated otp
router.get('/reset',) //reset password

router.put('/userup') //update user profile
router.put('/reset') //use to reset password

export default router;