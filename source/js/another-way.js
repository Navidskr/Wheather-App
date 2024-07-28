
let citiesData = [
    { city: 'Tehran', temp: 12, weather: 'sunny', humidity: 23, windSpeed: 22 },
    { city: 'Shiraz', temp: 9, weather: 'windy', humidity: 20, windSpeed: 10 },
    { city: 'Tabriz', temp: 1, weather: 'rainy', humidity: 12, windSpeed: 11 },
    { city: 'Mashhad', temp: 20, weather: 'sunny', humidity: 43, windSpeed: 15 },
    { city: 'Isfahan', temp: 18, weather: 'cloudy', humidity: 15, windSpeed: 30 }
]

let $ = document
let searchBtn = $.getElementById('search')
let searchBar = $.querySelector('.search-bar')

searchBtn.addEventListener('click', function () {
    let searchBarValue = searchBar.value
    let mainCitiesData = citiesData.find(function(item){
            return item.city === searchBarValue
        })
        console.log(mainCitiesData)

    if (mainCitiesData) {
        $.querySelector('.city').innerHTML = mainCitiesData.city
        $.querySelector('.temp').innerHTML = mainCitiesData.temp + 'C'
        $.querySelector('.description').innerHTML = mainCitiesData.weather
        $.querySelector('.humidity').innerHTML = 'Humidity :' + mainCitiesData.humidity
        $.querySelector('.wind').innerHTML = 'Wind Spedd :' + mainCitiesData.windSpeed + "km/h"
        $.querySelector('.weather').classList.remove('loading')

    } else {
        alert("Your city is not found")
    }
})