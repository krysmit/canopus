// const fetch = require("node-fetch");
const APIKEY = "d19d0c16157ce3486e364b59c5b2484e";

var searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || []

$("#search-style").click(function (event){
    event.preventDefault()
    let searchInput = $("#searchInput").val();
    console.log("local storage search input: ", searchInput);
    var checkArray = searchHistory.includes(searchInput);

    if (checkArray === false) {
        searchHistory.push(searchInput);
        localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
//adding searched items to a list
    } else {
        searchHistory.push(searchInput);
        localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
    
        var historyButton = $("<a>").attr({
          class: "list-group-item list-group-item-action",
          href: "#",
        })
    
    historyButton.text(searchInput);
    $("#searchList").append(historyButton);

    currentWeather(searchInput);
    searchButtonHandler(searchInput);

    }});





// var searchcity = document.getElementByID('searchcity').value;

// document.getElementByID('citystateBtn').addEventListener('click',search);

// console.log(">>>>>>weather api js page accessed<<<<<<");

// function search() {
// router.get("/fetch_data", async (req, res) => {
//     console.log("<<<<<<<inside the search function>>>>>>");
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchcity}&appid=${APIKEY}`;
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