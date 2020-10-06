import express from 'express'
import { getSampleData, getSampleDataById } from './controller'

const router = express.Router()

/**
 * GET /api/sample-data
 */
router.get('/sample-data', getSampleData)

/**
 * GET /api/sample-data/:id
 */
router.get('/sample-data/:id', getSampleDataById)

export default router
