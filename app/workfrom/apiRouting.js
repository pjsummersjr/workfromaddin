const express = require('express');
const router = express.Router();

const places = require('./places');
const workFromAppId = 'p9Q03LK3GbnwVQGL';

router.use(function timelog(req, res, next){
    console.log('Route request time: ', Date.now());
    next();
});

router.get('/zip/:zip', 
    function(req, res){
        places.getPlacesByZipCode(req.params.zip, workFromAppId)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.send(err);
        });
    }
);

module.exports = router;