const express = require('express')
const router = express.Router()
const pesertaController = require('../controllers/peserta.controller')

router.get('/', pesertaController.getPeserta)

module.exports = router;