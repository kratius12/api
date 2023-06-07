const express = require('express');
const moviesRouter = require('./moviesRouter');
const commentsRouter = require('./commentsRouter');

function routerApi(app){
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/movies', moviesRouter);
    router.use('/comments', commentsRouter);       
}

module.exports = routerApi;