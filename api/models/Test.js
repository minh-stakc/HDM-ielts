const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    title: String,
    text: String,
    photos: String,
    answer: String,
    info: String,
    author: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
});

const TestModel = mongoose.model('Test', testSchema);

module.exports = TestModel;