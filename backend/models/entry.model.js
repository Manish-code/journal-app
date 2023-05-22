const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const entrySchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;
