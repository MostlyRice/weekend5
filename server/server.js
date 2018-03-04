const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const favoritesRouter = require('./routes/favorites-router');


/** ---------- MIDDLEWARE ---------- **/
app.use(express.static('server/public/'));
app.use(bodyParser.json());

/** ---------- EXPRESS ROUTES ---------- **/
// MATCH ROUTER NAMES WITH REQUIRED AS NEEDED FOR YOUR PROJECT
app.use('/favorites', favoritesRouter);

/** ---------- MONGOOSE ------------ **/
// CHANGE DATABASE NAME AS NEEDED FOR YOUR PROJECT
const mongoose = require('mongoose');
const databaseUrl = 'mongodb://localhost:27017/swapi';

/* ---------- CONNECT TO mongoDB ------------ */
mongoose.connect(databaseUrl);

/* ---------- OUTPUT FROM CONNECTION EVENTS ------------ */
mongoose.connection.on('connected', () => {
    console.log('Mongoose Locked and Loaded!');    
});

mongoose.connection.on('error', () => {
    console.log('Mongoose failed to connect!'); 
});


/** ---------- START SERVER ---------- **/
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () =>  {
    console.log('Listening on port: ', app.get('port'));
});