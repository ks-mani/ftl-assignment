const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const activityPeriodSchema = new Schema({
    start_time: {
        type: String,
        required: true
    },
    end_time: {
        type: String,
        required: true
    }
})

const activitySchema = new Schema({
  id:{
    type: String,
    required: true,
  },
  activity_period: [activityPeriodSchema]
},{ timestamps: true });

let ActivityModel = mongoose.model('Activity', activitySchema);

module.exports = ActivityModel;
