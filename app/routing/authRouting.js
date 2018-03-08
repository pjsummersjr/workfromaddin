const express = require('express');
const authConfig = require('../config/authConfig');

const Logger = require('bunyan');

const log = new Logger('auth-router');

const router = express.Router();

router.get('/', function(err, res, req){
    
});

exports.module = router;