var express = require('express');

var routes = function(Book){

    //Create router
    var bookRouter = express.Router();

    //Create route for Book and add/implement get method (Root method)
    bookRouter.route('/')
        .post(function(req,res){
            var book = new Book(req.body);
            book.save();
            res.status(201).send(book);
        })
        .get(function(req,res){

            var query = {};

            if(req.query.genre)
            {
                query.genre = req.query.genre;
            }
            Book.find(query, function(err,books){
                if(err)
                    res.status(500).send(err);
                else
                    res.json(books);
            });
        });
    //Create middleware to handle Bood ID request and validate if bookID exists; Then assign book to Req object
    bookRouter.use('/:bookId',function(req,res,next){
        Book.findById(req.params.bookId,function(err,book){
                if(err)
                {
                    res.status(500).send(err);
                }
                else if(book)
                {
                    req.book = book;
                    next();
                }
                else
                {
                    res.status(404).send('Book not found');
                }
        });

    });
    //Create route to handle BookID parameter/path & implement Get, Post, Put, Patch & Remove
    bookRouter.route('/:bookId')
        .get(function(req,res){

            res.json(req.book);
        })
        .put(function(req,res){
                req.book.title = req.body.title;
                req.book.genre = req.body.genre;
                req.book.author = req.body.author;
                req.book.read = req.body.read;
                req.book.save(function(err){
                    if(err)
                    {
                        res.status(500).send(err);
                    }
                    else
                    {
                        res.status(202).send(req.book);
                    }
                });
           
        })
        .patch(function(req,res){
            if(req.body._id)
                delete req.body._id;

            for(var p in req.body)
            {
                req.book[p] = req.body[p];
            }

            req.book.save(function(err){
                if(err)
                {
                    res.status(500).send(err);
                }
                else
                {
                    res.status(202).send(req.book);
                }
            });
        })
        .delete(function(req,res){
            req.book.remove(function(err){
                if(err)
                {
                    res.status(500).send(err);
                }
                else
                {
                    res.status(204).send('Removed!!');
                }
            });
        });

    return bookRouter;
};

module.exports = routes;