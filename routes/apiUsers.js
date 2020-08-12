const express = require('express');
const apiUserRouter =  express.Router();

const bodyParser = require('body-parser')


apiUserRouter.use(bodyParser.json())

apiUserRouter.route('/')
    .get((req,res)=>{
        res.statusCode=200;
        res.end('Done')
    })

apiUserRouter.route('/:userId')
    .get((req, res)=>{
        res.statusCode=200;
        res.end(req.params.userId)
    })


module.exports = apiUserRouter;