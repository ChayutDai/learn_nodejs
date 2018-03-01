const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyDYQoPjyO-5fuW9V7wwLeUsIdXbdGOV4YY',
    json: true
},(error, response, body) => {
    console.log(body);
});