const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=86982a8f6ad39f3c75b4653de2efb51f&query=37.8267,-122.423&units=f'

request({url: url, json: true}, (error, response)=>{
    const data = response.body.current
    console.log(`${data.weather_descriptions[0]}. It is currently ${data.temperature} degrees out. It feels like ${data.feelslike} degrees out.`)
})

// Challenge
// 1. Print: "It is currently 9 degrees out, it feels like 5 degrees out"
// 2. Test your work 
