const mongoose = require('mongoose')

const Book = require('./book')
const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
})

authorSchema.pre('remove', function(next) {
  Book.find( { author: this.id}, (err, books) => {
    if (err) {
      next(err) // pass error on to next function (in case of db error)
    } else if (books.length > 0 ) {
      next(new Error('Author still has books'))
    } else {
      next() // good to remove author
    }
  })
})

module.exports = mongoose.model('Author', authorSchema)
