const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const activityPeriodSchema = new Schema({
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    }
})

const activitySchema = new Schema({
  id:{
    type: String,
    required: true,
  },
  activityPeriod: [activityPeriodSchema]
},{ timestamps: true });

let ActivityModel = mongoose.model('Activity', activitySchema);

module.exports = ActivityModel;
