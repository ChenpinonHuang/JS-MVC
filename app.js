const express = require('express');  // import express library
const app = express(); // this will boot up and instantiate an Express application and store it in the app

const path = require('path');

//set our view directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//set our routes
const routes =require('./routes.js'); // point to our routes
app.use('/', routes); 

//start our server
app.listen(process.env.PORT || 3000, port => console.log(`Listening on port ${port}`));