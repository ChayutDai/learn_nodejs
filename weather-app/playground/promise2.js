const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve,reject)=>{
        var encodeAddress = encodeURIComponent(address);
    
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&key=AIzaSyDYQoPjyO-5fuW9V7wwLeUsIdXbdGOV4YY`,
            json: true
        },(error, response, body) => {
        //  console.log(JSON.stringify(response,undefined,2));
        if(error){
            reject('Unable to connect to Google servers.');  
        }else if(body.status === 'ZERO_RESULTS'){
            reject('Unable to find that address.'); 
        }else if(body.status === 'OK'){
            resolve({
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longtitude: body.results[0].geometry.location.lng
            });    
        }    
        }); 
    });
};

geocodeAddress('199146').then((location)=> {
    console.log(JSON.stringify(location, undefined,2));
},(errorMessage) => {
    console.log(errorMessage);
})