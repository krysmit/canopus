var apiKey = "ad4e109e5b7a1f3554d123fbf819c27f";

//calling API for forecast
function searchButtonHandler(searchInput) {
    console.log("forecast search input: ", searchInput);
    var weatherURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchInput + "&appid=" + apiKey+"&units=imperial";
    var weatherURL = "api.openweathermap.org/data/2.5/weather?q={city name}&appid=" + apiKey + "&units=imperial";
    console.log("forecast api url: ", weatherURL)
    $.ajax({
        //get data from api
        url: weatherURL,
        method:"GET"
    }).then(function (data) {
            console.log("forecast data: ", data);
            // var appendedDates = [];
            var appendHTML = 0;

            for (let i=0; i < data.list.length; i=i+8) {
                var curr = data.list[i]
                var currDateText = curr.dt_txt
                var currDate = currDateText.split(" ")[0];
                appendHTML += `<div class="card btn-primary">
                <h2>${currDate}</h2>
                <h3>Temp:${curr.main.temp}
                <img src="https://openweathermap.org/img/wn/${curr.weather[0].icon}@2x.png" /></h3>
                <h4>Description: ${curr.weather[0].description}</h4>
                <h5>Humidity: ${curr.main.humidity}</h5>
                <h6>Wind Speed: ${curr.wind.speed}</h6>

                                `

                console.log("current date: ", currDate)
            }

            // $("#fiveday").html(appendHTML)
        
    })   
}