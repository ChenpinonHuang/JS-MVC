const router = require('express').Router();



//set the resource routes
(require('./routes/pages'))(router);

module.exports = router;




