// 1. Be able to see the weekly weather forecast for a city
// 2. Be able to see the date
// 3. Be able to see weather conditions
// 4. Be able to search for a city
// 5. Be able to see wind speed and direction

// Poczytaj więcej o CORS jak będziesz miał czas

const city = {
    name: "",
    latitude: 0,
    longitude: 0,
    currentTemperature: 0,
    currentConditions: "",
    windSpeed: 0,
    windDirection: 0
}

getCityData('Kraków');

function getCityData (city)
{
    getLatitudeLongitude(city);
    getWeather();
}

function getLatitudeLongitude (city)
{
    let apiKey = '73012e2db6d0b8ec6dc89e30e85f0ec6';
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200)
        {
            const response = JSON.parse(xhr.responseText);
            city.name = city;
            city.latitude = response[0].lat;
            city.longitude = response[0].lon;

            console.log(city.latitude, city.longitude);
        }
    }

    xhr.open('GET', `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`, false);
    xhr.send();
}

function getWeather (lat, lng)
{
    console.log(city.windSpeed, city.windDirection);
}


