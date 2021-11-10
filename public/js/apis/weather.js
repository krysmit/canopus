const router = require('express').Router();
const fetch = require("node-fetch");
const APIKEY = "d19d0c16157ce3486e364b59c5b2484e";
var searchcity = document.getElementByID('searchcity').value;

document.getElementByID('citystateBtn').addEventListener('click',search);

console.log(">>>>>>weather api js page accessed<<<<<<")

function search() {
router.get("/fetch_data", async (req, res) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchcity}&appid=${APIKEY}`;
    const options = {   
        "method": "GET",
    }
    
    const response = await fetch(url, options)
    .then(res => res.json())
    .catch(e => {
        console.error({
            "message": "no",
            error: e,
        });
    });
    console.log(response);
    res.json(response);

})};

module.exports = router;