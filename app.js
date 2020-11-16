const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

//Goal; Use both destructuring and property shorthand in weather app

//1. use object destructuring in app.js ,geocode.js, forecast.js
//2. use property shorthand in forecast.js and geocode.js
//3. test your work and make sure app still works 

const address = process.argv[2]

if(!address){
    console.log("Please Provide A Location")
}else{
    // Step 1: Get address and turn into coordinates
    geocode(address, (error, {latitude, longitude,location}={})=>{ 
        if(error){return console.log(error)}
        // Step 2:  Provide Coordinates to forecast
        forecast(latitude, longitude, (error, forecastData) => {
            if(error){
                return console.log(error)
            }
            // Step 3: Proide Location and Weather of that location
            console.log(location)
            console.log(forecastData)
        })
    })
}
