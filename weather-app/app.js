const request = require('request');
const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');

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
        console.log(JSON.stringify(results, undefined,2));
    }
});
//console.log(argv);
//be63d0ebd6ceb08d0695a1e56a328d62

const request2 = require('request');
request2({
 url: 'https://api.darksky.net/forecast/be63d0ebd6ceb08d0695a1e56a328d62/37.8267,-122.4233',
 json: true 

},(error,response,results) => {
    if(!error && response.statusCode === 200){  
        console.log(results.currently.temperature);
      }else if (response.statusCode === 400 ){
        console.log('Unable to fetch weather.'); 
      }else{
        console.log(error); 
      }
});