const express = require('express');
const apiUserRouter =  express.Router();

const bodyParser = require('body-parser')


apiUserRouter.use(bodyParser.json())

apiUserRouter
    .get('/', (req,res)=>{
        res.statusCode=200;
        res.end('Done')
    })


module.exports = apiUserRouter;