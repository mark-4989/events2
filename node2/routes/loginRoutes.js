import express from 'express'
import { actualLogin, createLogin, getUser, otpgen, otpvery, updateProfile } from '../action/login.js'
import { localVar } from '../middle/midleWare.js'

const router =express.Router()

router.post('/',createLogin) //register user
router.post('/a/',actualLogin) //login

router.get('/a/:userName',getUser) //gets user with username
router.get('/gen', localVar, otpgen ) //generates random otp
router.get('/ver', otpvery ) //verify generated otp
router.get('/reset',) //reset password

router.put('/userup/:id',updateProfile ) //update user profile
router.put('/reset') //use to reset password

export default router;