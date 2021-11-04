var apiKey = "ad4e109e5b7a1f3554d123fbf819c27f";
var weatherURL = "api.openweathermap.org/data/2.5/weather?q=" + {city} + "&appid=" + apiKey + "&units=imperial";

function currentWeather(searchInput) {
    console.log("current weather search input: ", searchInput);
    var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput + "&appid=" + apiKey+"&units=imperial";
     console.log("current weather api url: ", weatherURL)
    $.ajax({
        //get data from api
        url: weatherURL,
        method:"GET"
    }).then(function (data) {
            console.log("current weather data: ",data);

            var currentUV = `https://api.openweathermap.org/data/2.5/uvi?q=&lat=${lat}&lon=${lon}&appid=${key}`;

            console.log("currentUV: ", currentUV);

            var appendHTML = "";
            
                appendHTML += `<div class="card btn-primary">
                <h2>${searchInput}</h2>
                <h3>Temp:${data.main.temp}
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></h3>
                <h4>Description: ${data.weather[0].description}</h4>
                <h5>Humidity: ${data.main.humidity}</h5>
                <h6>Wind Speed: ${data.wind.speed}</h6>
                                `

            $("#weatherNow").html(appendHTML)
        

    })   
}

