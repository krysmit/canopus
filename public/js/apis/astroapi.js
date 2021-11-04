var apiKey = "a81e0ff5a2ac49749b6d5fa89c8f26c7";

//calling API for forecast
// function searchButtonHandler(searchInput) {
//     console.log("forecast search input: ", searchInput);

   //need to fill in the city name search syntax
    var astroURL = "https://api.ipgeolocation.io/astronomy?apiKey=" + apiKey + "&location=" + {state};
    $.ajax({
        //get data from api
        url: weatherURL,
        method:"GET"
    }).then(function (data) {
            // var appendedDates = [];
            var appendHTML = 0;

            // <div class="card btn-primary">
            //     <h2>Sunset:${sunset}</h2>

            // $("#fiveday").html(appendHTML)
        
    })   
// }




// fetch('https://data.cityofchicago.org/resource/8pix-ypme.json?red=true')
//             .then(function (response) {
//                 return response.json();
//             })
//             .then(function (data) {
//                 appendData(data);
//             })
//             .catch(function (err) {
//                 console.log('error: ' + err);
//             });
//         function appendData(data) {
//             var mainContainer = document.getElementById("nearInfo");
//             for (var i = 0; i < 3; i++) {
//                 var div = document.createElement("div");
//                 div.innerHTML = 'Station: ' + data[i].station_descriptive_name + ' ' + data[i].stop_name;
//                 mainContainer.appendChild(div);
//             }
//         }

//         let map;