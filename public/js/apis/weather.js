var cityInput = document.getElementByID('cityInput').value;

document.getElementByID('citystateBtn').addEventListener('click',search);

console.log(">>>>>>weather api js page accessed<<<<<<");

function search() {
router.get("/fetch_data", async (req, res) => {
    console.log("<<<<<<<inside the search function>>>>>>");
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${APIKEY}`;
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