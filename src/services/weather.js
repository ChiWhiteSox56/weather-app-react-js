export function getWeather() {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?id=5128581&appid=${API_KEY}`)
        .then(data => data.json())
}