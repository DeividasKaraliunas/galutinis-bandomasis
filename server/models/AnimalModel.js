const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AnimalSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    birthDate: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('AnimalModel', AnimalSchema);