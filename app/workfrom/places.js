const request = require('request-promise');

var baseUri = 'http://api.workfrom.co/places/';

function getPlacesByZipCode(zipcode, appid, dow) {
    var qs =  {
        appid: appid
    }
    if(dow){
        qs.dow = dow;
    }
    var requestPath = 'postal/' + zipcode;
    getPlaces(requestPath, qs).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    });
}

function getPlaces(endpoint, qs){
    var requestUri = baseUri + endpoint;
    console.log(requestUri);
    return request({
        uri: requestUri,
        qs: qs,
        json: true
    }).then ((data) => {
        return data;
    }).catch((err) => {
        throw err;
    })
}

module.exports = {
    getPlacesByZipCode
};