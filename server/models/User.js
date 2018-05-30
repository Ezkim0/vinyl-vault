var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  email: {type: String, required: true},
  name: {type: String, required: false},
  googleid: {type: String, required: false},
  imageUrl: {type: String, required: false},
  
  vinyls: { type: [{ type: Schema.Types.ObjectId, ref: 'Vinyl' }], default: []},
  
  // common
  created: { type: Date, required: true, default: Date.now},
  modified: {type: Date, required: true, default: Date.now},
});

/**
 * Methods
 */
UserSchema.methods = {

};

/**
 * Statics
 */
UserSchema.statics = {
  
};

module.exports = mongoose.model('User', UserSchema);