const mongoose = require('mongoose');

const closetSchema = new mongoose.Schema({
  name: String
});
module.exports = mongoose.model('closet', closetSchema);
