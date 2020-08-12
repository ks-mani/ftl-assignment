const express = require('express');
const apiUserRouter = express.Router();

const UserModel = require('../models/userModel.js');
const ActivityModel = require('../models/activityModel.js')

const bodyParser = require('body-parser')


apiUserRouter.use(bodyParser.json())

apiUserRouter.route('/')
    .get((req,res)=>{
        UserModel.find({},"id real_name tz",(err, doc)=>{
            res.json(doc)
        });
    })
    .post((req, res) => {
        const members = req.body.members;
        members.forEach(element => {
            const userObj = {
                id: element.id,
                real_name: element.real_name,
                tz: element.tz
            }
            UserModel.create(userObj)
            .then((query)=>{
                const actObj = {
                    id: element.id,
                    activity_period: element.activity_period
                }
                ActivityModel.create(actObj)
                    .then((quer)=>{
                        // console.log(`${quer.id} Added Succefully`);
                    })
                    .catch((err)=>{
                        res.end('An Error Occurred')
                    })
            })
            .catch(()=>{
                res.end("An Error Occurred")
            })
        });
        //res.end("Got it ")
    })

apiUserRouter.route('/:userId')
    .get((req, res) => {
        ActivityModel.findOne({id: req.params.userId},"id activity_period",(err, doc)=>{
            res.statusCode = 200;
            res.json(doc)
        });        
    })


module.exports = apiUserRouter;