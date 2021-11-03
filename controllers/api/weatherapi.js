var apiKey = "ad4e109e5b7a1f3554d123fbf819c27f";

//calling API for forecast
function searchButtonHandler(searchInput) {
    console.log("forecast search input: ", searchInput);
   //need to fill in the city name search syntax
    var weatherURL = "api.openweathermap.org/data/2.5/weather?q=" + {city} + "&appid=" + apiKey + "&units=imperial";
    console.log("forecast api url: ", weatherURL)
    $.ajax({
        //get data from api
        url: weatherURL,
        method:"GET"
    }).then(function (data) {
            console.log("forecast data: ", data);
            // var appendedDates = [];
            var appendHTML = 0;

            // <div class="card btn-primary">
            //     <h2>Temp:${weather.main}</h2>

            // $("#fiveday").html(appendHTML)
        
    })   
}