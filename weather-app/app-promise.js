const request = require('request');
const yargs = require('yargs');
const axios = require('axios');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const argv = yargs
    .option({
    a:{
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true
    }
})
.help()
.alias('help','h')
.argv;

var encodeAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&key=AIzaSyDYQoPjyO-5fuW9V7wwLeUsIdXbdGOV4YY`;

axios.get(geocodeUrl).then((response)=>{
    if(response.data.status === 'ZERO_RESULTS'){
        throw new Error('Unable to find that address');
    }
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    console.log(`${lat}  ${lng}`);
    var weatherUrl = `https://api.darksky.net/forecast/be63d0ebd6ceb08d0695a1e56a328d62/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
}).then((response)=>{

    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}`);
            
}).catch((e)=>{
    if(e.code === 'ENOTFOUND'){
        console.log('Unable to connect to API server');
    }else{
        console.log(e.message);
    }

});



//console.log(argv);
//be63d0ebd6ceb08d0695a1e56a328d62

//lat,lng,callback

