const request = require('request');
const yargs = require('yargs');

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

geocode.geocodeAddress(argv.address,(errorMessage,results)=>{
    if(errorMessage){
        console.log(errorMessage);
    }else{
      //  console.log(JSON.stringify(results, undefined,2));
        weather.getWeather(results.latitude,results.longtitude,(errorMessage,weatherResults)=>{
            if(errorMessage){
                console.log(errorMessage);
            }else{
                console.log(`Address : ${results.address}`);
             //   console.log(JSON.stringify(weatherResults, undefined,2));
                console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}`);
            }
        });
    }
});
//console.log(argv);
//be63d0ebd6ceb08d0695a1e56a328d62

//lat,lng,callback

