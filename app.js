const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if(!address){
    console.log("Please Provide A Location")
}else{
    geocode(address, (error, data)=>{ 
        // Step 1: Get address and turn into coordinates
        if(error){return console.log(error)}
        // Step 2:  Provide Coordinates to forecast
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if(error){
                return console.log(error)
            }
            // Step 3: Proide Location and Weather of that location
            console.log(data.location)
            console.log(forecastData)
        })
    })
}
