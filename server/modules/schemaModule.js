const mongoose = require('mongoose');

let favoritesSchema = new mongoose.Schema({
        url: {type: String, unique: true},
        name: {type: String},
        title: {type: String, default: false},
    // people
        birth_year: {type: String},
        gender: {type: String},
    // films
        opening_crawl: {type: String},
    // SHARED STARSHIP & VEHICLE FIELDS
        manufacturer: {type: String},
        passengers: {type: String},
        capacity: {type: String},
    // planets
        population: {type: String},
        climate: {type: String},
    // species
        language: {type: String},
        classification: {type: String},
    // favorite
        favorited: {type: Boolean, default: false}
})

module.exports = favoritesSchema;