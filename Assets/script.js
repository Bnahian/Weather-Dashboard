// Functions
var cities =[];
var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#search");
var citiesEl = document.querySelector(".cities-list");
var searchbtnEl = document.querySelector("#searchbtn");
var GUVIndex= 0;
var uvbodyEl = document.createElement("div");
var weather5El = document.querySelector(".weather5"); 
var citieslistEl = document.getElementsByTagName("li");
var weatherrowEl = document.querySelector(".weather-row");
var forecastEl = document.querySelector(".forecast-row");
var searchHistoryArray = []


var formSubmitHandler = function (event) {
    event.preventDefault();
    // get city name value from input element
    var cityname = cityNameInputEl.value.trim();

    // Set city name in local storage and generate history buttons
    if (cityname) {
        searchHistoryArray.push(cityname);
        localStorage.setItem("weatherSearch", JSON.stringify(searchHistoryArray));
        var searchHistoryEl = document.createElement('button');
        searchHistoryEl.className = "btn";
        searchHistoryEl.setAttribute("data-city", cityname)
        searchHistoryEl.innerHTML = cityname;
        historyButtonsEl.appendChild(searchHistoryEl);
        historyCardEl.removeAttribute("style")
        getWeatherInfo(cityname);
        cityNameInputEl.value = "";
    }
    else {
        alert("Please enter a City name");
    }

}

// Get weather information from OpenWeather




