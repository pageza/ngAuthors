// Requiring mongoose for funcationality
// const mongoose = require('mongoose');
// require the the controllers from "../controller/<file names>"
const author = require('../controllers/Authors');
const path = require('path')


module.exports = (app) => {
    // This is where all the routes go, calling on functions from the controllers
    app.get('/authors', (req, res) => {
        author.allAuthors(req,res)
    });

    app.get('/authors/:id', (req, res) => {
        author.oneAuthor(req,res)
    });

    app.post('/authors', (req, res) => {
        author.createAuthor(req,res)
    });

    app.put('/authors/:id', (req, res) => {
        author.editAuthor(req,res)
    });

    app.delete('/authors/:id', (req, res) => {
        author.destroyAuthor(req,res)
    });
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    })
}
