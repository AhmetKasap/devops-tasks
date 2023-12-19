const express =require('express')
const router = express.Router()

const index = require('./index')
router.use(index)


const admin = require('./admin')
router.use(admin)

module.exports = router