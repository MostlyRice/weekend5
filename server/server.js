const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const swapiRouter = require('./routers/swapiRouter');


/** ---------- MIDDLEWARE ---------- **/
app.use(express.static('server/public/'));
app.use(bodyParser.json());

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/swapi', swapiRouter);

/** ---------- MONGOOSE ------------ **/
// CHANGE DATABASE NAME AS NEEDED FOR YOUR PROJECT
const mongoose = require('mongoose');
const databaseUrl = 'mongodb://localhost:27017/swapi';

/* ---------- CONNECT TO mongoDB ------------ */
mongoose.connect(databaseUrl);

/* ---------- OUTPUT FROM CONNECTION EVENTS ------------ */
mongoose.connection.on('connected', () => {
    console.log('mongoose is connected');    
});

mongoose.connection.on('error', () => {
    console.log('mongoose connection failed'); 
});


/** ---------- START SERVER ---------- **/
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});