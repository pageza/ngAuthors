const mongoose = require('mongoose');
const mongooseBeautifulUniqueValidation = require('mongoose-beautiful-unique-validation')
const mongooseValidationErrorTransform = require('mongoose-validation-error-transform')
const fs = require('fs');
const path = require('path');

// Storing the database value for ease
const db = 'ngAuthors'

mongoose.plugin(mongooseBeautifulUniqueValidation)
mongoose.plugin(mongooseValidationErrorTransform)
// Connecting to MongoDB
mongoose.connect(
'mongodb://localhost/'+db
, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

// Putting the path to the models into a constant to use below
const models_path = path.join(__dirname+'./../models')

// Using the directory read only sync to pull the models and schemas from each model file
fs.readdirSync(models_path).forEach((file) => {
    if(file.indexOf('.js') >= 0) {
        require(models_path+'/'+file)
    }
})
