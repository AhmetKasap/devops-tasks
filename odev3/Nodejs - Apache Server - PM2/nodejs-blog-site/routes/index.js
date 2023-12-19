const express = require('express')
const router = express.Router()
const indexControllers = require('../controllers/index.controllers')

router.get('/', indexControllers.index)

router.get('/contact', indexControllers.getContact)

router.get('/categories/:category', indexControllers.getCategoriey)
router.get('/categories/:category/:id', indexControllers.categoryDetails)

router.get('/detailsPage/:detailsId', indexControllers.detailsPage)

module.exports = router
