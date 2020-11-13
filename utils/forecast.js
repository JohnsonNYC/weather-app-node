const request = require('request')
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js √
// 2. Require the function in app.js and call it as shown below√
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const forecast = (lat, long, callback) => {
    //Step1: Provide API 
    const url = `http://api.weatherstack.com/current?access_key=86982a8f6ad39f3c75b4653de2efb51f&query=${long},${lat}&units=f`
    // Step2: Parse and error handle API
    request({url:url, json:true}, (error, response )=>{
        //Step 3: Callback(error,response) Do something when error is present. Do something when response is present 
        if(error){
            callback('Unable to connect to weather service',undefined)
        }else if(response.body.error){
            callback('Unable to find location',undefined)
        }else{ 
            //Step 4:
            callback(undefined, response.body.current.weather_descriptions[0])
        }
    })
}


module.exports = forecast