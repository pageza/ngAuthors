const mongoose = require('mongoose')

const Author = mongoose.model('Author')

module.exports = {
    allAuthors: (req,res) => {
        Author.find()
            .then( author => res.json(author))
            .catch(err => res.json(err))
    },
    oneAuthor: (req,res) => {
        Author.findOne({_id: req.params.id})
            .then( author => res.json(author))
            .catch( err => res.json(err))
    },
    createAuthor: (req,res) => {
        const newAuthor = new Author()
        newAuthor.author = req.body.author;
        newAuthor.save()
            .then( newAuthor => res.redirect('/authors'))
            .catch( err => res.json(err))
    },
    editAuthor: (req,res) => {
        Author.updateOne({_id: req.params.id}, {
            author: req.body.author
        })
            .then( data => res.redirect('/authors'))
            .catch(err => res.json(err))
    },
    destroyAuthor: (req,res) => {
        Author.deleteOne({_id: req.params.id})
            .then(res.redirect('/authors'))
            .catch(err => res.json(err))
    }

}
