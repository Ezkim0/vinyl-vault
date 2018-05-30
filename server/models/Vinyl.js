var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VinylSchema = new Schema({
  artist: {type: String, required: true},
  album: {type: String, required: false},
  size: {type: String, required: false},
  thumbnail: {type: String, required: false},
  cover: {type: String, required: false},
  
  public: {type: Boolean, required: false, default: true},

  // common
  created: { type: Date, required: true, default: Date.now},
  modified: {type: Date, required: true, default: Date.now},
});

/**
 * Methods
 */
VinylSchema.methods = {

};

/**
 * Statics
 */
VinylSchema.statics = {
  
};

module.exports = mongoose.model('Vinyl', VinylSchema);