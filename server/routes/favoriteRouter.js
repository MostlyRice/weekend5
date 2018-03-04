const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const favoritesSchemaModule = require('../modules/schemaModule');

let favoritesSchema = favoritesSchemaModule;
let Favorite = mongoose.model('Favorite', favoritesSchema);


module.exports = router;