const mongoose = require('mongoose');
// Creating the Schema
const AuthorSchema = new mongoose.Schema({
  author: {
    type: String,
    required: [true, 'An author is required'],
    minlength:[3, 'Author name must be more than 3 letters'],
  }
}, {timestamps:{createdAt: 'createdAt', updatedAt: 'updatedAt'}})

// Registering the Schema as a Model
mongoose.model('Author', AuthorSchema)
