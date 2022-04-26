// 1. Be able to see the weekly weather forecast for a city
// 2. Be able to see the date
// 3. Be able to see weather conditions
// 4. Be able to search for a city
// 5. Be able to see wind speed and direction

let apiKey = '73012e2db6d0b8ec6dc89e30e85f0ec6';

function geocoding (cityName)
{
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}&limit=1`)
    .then((response) => {
        response.json()
        .then((responseBody) => {
            const lat = responseBody[0].lat;
            const lon = responseBody[0].lon;

            getWeather(lat, lon);
        })
    })
}

geocoding("Warsaw");

function getWeather (lat, lon)
{
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=${apiKey}`)
    .then((response) => {
        response.json()
        .then((responseBody) => {
            printWeather(responseBody);
        })
    })
}

function printWeather (data)
{
    const currentDateHtml = document.getElementById('current-date');
}





