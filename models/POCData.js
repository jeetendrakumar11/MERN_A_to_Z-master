const mongoose = require('mongoose');

const POCDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  lastYear: {
    type: String,
    required: true
  },
  mtd: {
    type: String,
    required: true
  },
  qtd: {
    type: String
  },
  ytd: {
    type: String
  },
  history: {
    type: String
  }
});

module.exports = POCData = mongoose.model('pocdata', POCDataSchema);
