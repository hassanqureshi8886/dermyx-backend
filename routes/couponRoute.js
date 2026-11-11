import express from 'express'
import { validateCoupon, listCoupons, addCoupon, removeCoupon, setCouponStatus } from '../controllers/couponController.js'
import adminAuth from '../middleware/adminAuth.js'

const couponRouter = express.Router()

couponRouter.post('/validate', validateCoupon)
couponRouter.post('/list', adminAuth, listCoupons)
couponRouter.post('/add', adminAuth, addCoupon)
couponRouter.post('/status', adminAuth, setCouponStatus)
couponRouter.post('/remove', adminAuth, removeCoupon)

export default couponRouter
