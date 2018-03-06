
const requestWeather = require('request');

var getWeather = (lat, lng, callback) => {
    requestWeather({
        url: `https://api.darksky.net/forecast/be63d0ebd6ceb08d0695a1e56a328d62/${lat},${lng}`,
        json: true 
       
       },(error,response,results) => {
           if(!error && response.statusCode === 200){  
               callback(undefined,{
                temperature: results.currently.temperature,
                apparentTemperature: results.currently.apparentTemperature
               });
               //console.log(results.currently.temperature);
             }else if (response.statusCode === 400 ){
               callback('Unable to fetch weather.'); 
             }else{ 
               callback('Unable to connect to darksky.net/forecast server');
            }
       });
};

module.exports.getWeather = getWeather;

