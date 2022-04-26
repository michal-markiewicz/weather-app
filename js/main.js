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

geocoding("Paris");

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
    console.log(data);
    const currentDateHtml = document.getElementById('current-date');

    const currentDateTimestampMs = data.current.dt * 1000;
    const currentDate = new Date(currentDateTimestampMs);
    currentDateHtml.textContent = currentDate.toLocaleString("en-US", {"dateStyle" : "full"});

    const currentWeatherHtml = document.getElementById('current-weather');

    currentWeatherHtml.textContent = `Current weather: ${Math.round(data.current.temp)} celsius, ${data.current.weather[0].main.toLowerCase()}`;

    const weeklyWeatherHtml = document.getElementById('weekly-weather-table');
    weeklyWeatherHtml.innerHTML = `
    <thead>
    <tr>
        <th>Date</th>
        <th>Temperature</th>
        <th>Conditions</th>
        <th class="mobile-hidden">Wind speed</th>
        <th class="mobile-hidden">Wind direction</th>
    </tr>
    </thead>
    <tbody>
    ${data.daily.map((day) => {
        return `
        <tr>
            <td>${day.dt}</td>
            <td>${Math.round(day.temp.day)} celsius</td>
            <td>${day.weather[0].main.toLowerCase()}</td>
            <td class="mobile-hidden">${day.wind_speed}</td>
            <td class="mobile-hidden">${day.wind_deg}</td>
        </tr>
    `
    }).join('')}
    </tbody>
`;
}












