import express from 'express'
import controller from './controller.js' 
const router = express.Router()

router.post('/sum-and-average',controller)

export default router