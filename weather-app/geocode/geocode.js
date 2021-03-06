const request = require('request');

var geocodeAddress = (address,callback) => {

    var encodeAddress = encodeURIComponent(address);
    
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&key=AIzaSyDYQoPjyO-5fuW9V7wwLeUsIdXbdGOV4YY`,
        json: true
    },(error, response, body) => {
      //  console.log(JSON.stringify(response,undefined,2));
      if(error){
        callback('Unable to connect to Google servers.');  
      }else if(body.status === 'ZERO_RESULTS'){
        callback('Unable to find that address.'); 
      }else if(body.status === 'OK'){
        callback(undefined,{
            address: body.results[0].formatted_address,
            latitude: body.results[0].geometry.location.lat,
            longtitude: body.results[0].geometry.location.lng
        });    
      }
        
    }); 
};

module.exports.geocodeAddress = geocodeAddress;