// // const fetch = require("node-fetch");
// const APIKEY = "d19d0c16157ce3486e364b59c5b2484e";
// var searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || []


// //save to local storage
// $("#citystateBtn").click(function (event){
//     event.preventDefault()
//     let cityInput = $("#cityInput").val();
//     console.log("local storage search input: ", cityInput);
//     var checkArray = searchHistory.includes(cityInput);

//     if (checkArray === false) {
//         searchHistory.push(cityInput);
//         localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
// //adding searched items to a list
//     } else {
//         searchHistory.push(cityInput);
//         localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
    
//         var historyButton = $("<a>").attr({
//           class: "list-group-item list-group-item-action",
//           href: "#",
//         })
    
//     historyButton.text(cityInput);
//     $("#searchList").append(historyButton);

//     currentWeather(cityInput);
//     searchButtonHandler(cityInput);

//     }});





// //calling API for current weather
// function currentWeather(cityInput) {
//     console.log("current weather search input: ", cityInput);
//     var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=" + APIKEY +"&units=imperial";
//      console.log("current weather api url: ", weatherURL)
//     $.ajax({
//         //get data from api
//         url: weatherURL,
//         method:"GET"
//     }).then(function (data) {
//             console.log("current weather data: ",data);
//     })   
// }





    


// var cityInput = document.getElementByID('cityInput').value;

// document.getElementByID('citystateBtn').addEventListener('click',search);

// console.log(">>>>>>weather api js page accessed<<<<<<");

// function search() {
// router.get("/fetch_data", async (req, res) => {
//     console.log("<<<<<<<inside the search function>>>>>>");
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${APIKEY}`;
//     const options = {   
//         "method": "GET",
//     }
    
//     const response = await fetch(url, options)
//     .then(res => res.json())
//     .catch(e => {
//         console.error({
//             "message": "no",
//             error: e,
//         });
//     });
//     console.log(response);
//     res.json(response);

// })};