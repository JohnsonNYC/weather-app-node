const request = require('request')

// CALLBACK NOTES
// Define function with necessary arguments and callback function 
// In request, use the call back function as it it asynchronous and works like 'return' 

// when using the function, define all parameters including the callback. 
// define the call back with the arguments that you set 
    // app.js 
    // geocode('New York ', (error, data)=>{ do something with either error or data })

const geocode = (address, callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoiam9obnNvbmtvIiwiYSI6ImNraGdmNmhnYzBkN3oycW9iaGRmeDlkaDgifQ.U2gERqsk_eECbTMxQwJuxQ&limit=1'

    request({url: url, json:true}, (error, response)=>{
        if(error){
            callback('Unable to connect to location services!', undefined)
        }else if(response.body.features.length===0){
            callback('Unable to find location. Try another search', undefined)
        } else{
            callback(undefined,{
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode