const express = require('express')
const router = express.Router()
const adminControllers = require('../controllers/admin')
const authenticationToken = require('../middlewares/admin')
const adminAuthorized =require('../middlewares/admin.ip')

router.get('/admin', adminAuthorized, adminControllers.getAdmin)
router.post('/admin', adminControllers.loginAdmin)

router.get('/addBlog', authenticationToken ,adminControllers.getBlog)
router.post('/addBlog', authenticationToken, adminControllers.postBlog)

router.get('/allBlog', authenticationToken, adminControllers.getAllBlog)

router.get('/deleteBlog/:id',authenticationToken,adminControllers.deleteBlog)

module.exports = router