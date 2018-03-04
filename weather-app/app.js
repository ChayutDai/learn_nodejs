const request = require('request');
const yargs = require('yargs');

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

//console.log(argv);
var encodeAddress = encodeURIComponent(argv.address);
//console.log(encodeAddress);

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&key=AIzaSyDYQoPjyO-5fuW9V7wwLeUsIdXbdGOV4YY`,
    json: true
},(error, response, body) => {
  //  console.log(JSON.stringify(response,undefined,2));
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longtitude: ${body.results[0].geometry.location.lng}`);
});