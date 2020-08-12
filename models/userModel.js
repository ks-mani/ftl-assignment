const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  id:{
    type: String,
    required: true,
  },
  realName:{
    type: String,
    required: true
  },
  tz:{
    type: String,
    default:'',
    required: true
  }
},{ timestamps: true });

let UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
