import express from 'express'
import { addReview, productReviews, latestReviews, markHelpful, allReviews, removeReview } from '../controllers/reviewController.js'
import authUser, { authOptional } from '../middleware/auth.js'
import adminAuth from '../middleware/adminAuth.js'
import upload from '../middleware/multer.js'

const reviewRouter = express.Router()

// Public
reviewRouter.post('/list', productReviews)
reviewRouter.post('/latest', latestReviews)

// Customers and guests (a review needs a name, email and optional photo)
reviewRouter.post('/add', authOptional, upload.single('image'), addReview)
reviewRouter.post('/helpful', authUser, markHelpful)

// Admin
reviewRouter.post('/all', adminAuth, allReviews)
reviewRouter.post('/remove', adminAuth, removeReview)

export default reviewRouter
