const mongoose = require('mongoose');
// Creating the Schema
const AuthorSchema = new mongoose.Schema({
  author: {type: String, required: true, minlength:3},
}, {timestamps:{createdAt: 'createdAt', updatedAt: 'updatedAt'}})

// Registering the Schema as a Model
mongoose.model('Author', AuthorSchema)
