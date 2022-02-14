const express = require('express')
const router = express.Router()
const materiController = require('../controllers/materi.controller')

router.get('/', materiController.getMateri)
router.post('/add', materiController.postMateri)

module.exports = router;