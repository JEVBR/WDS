const express = require('express')
const router = express.Router()

// const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// router.get('/', async (req, res) => {
//   let books
//   try {
//     books = await Book.find().sort({ createdAt: 'desc' }).limit(10).exec()
//   } catch {
//     books = []
//   }
//   res.render('index', { books: books })
// })


// Welcome Page
 router.get('/', (req, res) => res.render('welcome'));

// Dashboard
// router.get('/dashboard', ensureAuthenticated, (req, res) =>
//   res.render('dashboard', {
//     user: req.user
//   })
// );

module.exports = router
