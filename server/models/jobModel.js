const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reqString = {
  type: String,
  required: true
};

const jobSchema = new Schema({
  companyName: reqString,
  title: reqString,
  status: reqString
});

module.exports = mongoose.model('Job', jobSchema);