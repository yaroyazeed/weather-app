const request = require ('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/293b1565f7ceb0539c7a60b0937fa66f/'+ latitude + ', '+ longitude 
    request({ url, json : true }, (error, {body})=> {
        if (error){
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location please try different location', undefined)
        }
        else{
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' out. There is a ' + body.currently.precipProbability + '% chance of rainfall.')
        }
    })
}
module.exports = forecast
