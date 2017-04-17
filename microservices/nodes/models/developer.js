var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;


var DeveloperSchema = new Schema({
  firstName : {
    type : String, required: true, trim: true
  },
  lastName : {
    type : String, required: true, trim: true
  },
  email : {
    type : String, required: true, trim: true
  },
  stateId : {
    type : Number, required: true
  },
  state : {
    id : {
      type : Number
    },
    abbreviation : {
      type : String, required: true, trim: true
    },
    name : {
      type :  String, required: true, trim: true
    }
  },
  id : {
    type : Number, required: true, unique: true
  }
});

DeveloperSchema.index({ id: 1, type: 1 }); // schema level


exports.DeveloperSchema = DeveloperSchema;
module.exports = mongoose.model('Developer', DeveloperSchema, 'developers');