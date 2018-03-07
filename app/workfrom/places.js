const request = require('request-promise');

function getPlacesByZipCode(zipcode) {
    request({
        uri: 'http://api.workfrom.co/places/postal/01803',
        qs: {
            appid: 'p9Q03LK3GbnwVQGL'
        },
        json: true
    }).
    then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    });
}

module.exports = {
    getPlacesByZipCode
};