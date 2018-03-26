const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: String,
    url: String,
    description: String
})

// Exports model to be used by api.js
module.exports = mongoose.model('project', projectSchema);
