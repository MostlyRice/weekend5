const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const favoritesSchemaModule = require('../modules/schemaModule');

let favoritesSchema = favoritesSchemaModule;
let Favorite = mongoose.model('Favorite', favoritesSchema);

// START GET ROUTE
router.get('/', (req, res) => {
    Favorite.find({'favorited': 'true'}, (err, foundFavorites) => {
        if (err) {
            console.log('Error Finding:', err);
            res.sendStatus(500);
        }
        else {
            res.send(foundFavorites);
        }
    })
})
// END GET ROUTE

// START POST ROUTE
router.post('/', (req, res) => {
    let favoriteToAdd = new Favorite(req.body);

    favoriteToAdd.save((err, savedFavorite) => {
        if (err) {
            console.log('Error Saving:', err);
            res.sendStatus(500);
        }
        else {
            res.sendStatus(201);
        }
    })
})
// END POST ROUTE

// START DELETE ROUTE
router.delete('/:id', (req, res) => {
    let favoriteId = req.params.id;
    Favorite.findByIdAndRemove(
        {'_id': favoriteId},
        (err, removedDocument) => {
            if (err) {
                console.log('Error Deleting', err);
                res.sendStatus(500);
            }
            else {
                res.sendStatus(200);
            }
        }
    )
})
// END DELETE ROUTE

module.exports = router;