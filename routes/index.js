const express = require('express')
const router = express.Router()

// Welcome Pager
router.get('/', (req, res) => res.render('welcome'));


module.exports = router
