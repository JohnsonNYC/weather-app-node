const request = require('request')

const geocode = (address, callback)=>{
    // Step 1: Provide API
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoiam9obnNvbmtvIiwiYSI6ImNraGdmNmhnYzBkN3oycW9iaGRmeDlkaDgifQ.U2gERqsk_eECbTMxQwJuxQ&limit=1'
    // Step 2: Parse API and Error handle
    request({url: url, json:true}, (error, response)=>{
        // Step 3: Callback(error, data) - do something when there is an error and do something when data is present
        if(error){
            callback('Unable to connect to location services!', undefined)
        }else if(response.body.features.length===0){
            callback('Unable to find location. Try another search', undefined)
        } else{
            //Step 4. When response, provide callback with the data wanted from API
            callback(undefined,{
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode