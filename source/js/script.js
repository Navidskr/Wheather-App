let citiesData = {
    tehran: { city: 'Tehran', temp: 12, weather: 'sunny', humidity: 23, windSpeed: 22 },
    shiraz: { city: 'Shiraz', temp: 9, weather: 'windy', humidity: 20, windSpeed: 10 },
    tabriz: { city: 'Tabriz', temp: 1, weather: 'rainy', humidity: 12, windSpeed: 11 },
    mashhad: { city: 'Mashhad', temp: 20, weather: 'sunny', humidity: 43, windSpeed: 15 },
    isfahan: { city: 'Isfahan', temp: 18, weather: 'cloudy', humidity: 15, windSpeed: 30 },
}

let $ = document
let serachBtn = $.getElementById('search')
let serachBar = $.querySelector('.search-bar')

serachBtn.addEventListener('click', function () {
    let searchBarValue = serachBar.value
    let mainCitiesData = citiesData[searchBarValue]

    if (mainCitiesData) {
        $.querySelector('.city').innerHTML = mainCitiesData.city
        $.querySelector('.temp').innerHTML = mainCitiesData.temp + 'C'
        $.querySelector('.description').innerHTML = mainCitiesData.weather
        $.querySelector('.humidity').innerHTML = 'Humidity :' + mainCitiesData.humidity
        $.querySelector('.wind').innerHTML = 'Wind Spedd :' + mainCitiesData.windSpeed + "km/h"
        $.querySelector('.weather').classList.remove('loading')

    } else {

    }
})