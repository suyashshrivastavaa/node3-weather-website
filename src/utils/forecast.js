const request = require('request')

const forecast = (lat, long, callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=26d2f05063ad1fca9f5638325c920c70&query='+lat+','+long+'&units=f'


    request({ url, json: true }, (error, {body}) => {
        const data1 = body.current.temperature
        const data2 = body.current.feelslike
        if (error) {
            callback('Unable to connect to weather service', undefined)
        }
        else if(body.error)
        {
            callback("unable to find location", undefined)
        }
        else {
            console.log(body)
            callback(undefined,
                body.current.weather_descriptions[0] + ". It is currently " + data1 + " degrees out. The humidity is " +body.current.humidity  + " .It feels like " + data2 + " degrees out.",
                   
                ) 
            }
        })
    }


module.exports = forecast