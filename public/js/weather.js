var APIKEY = "ad4e109e5b7a1f3554d123fbf819c27f";

// var cityInput = document.getElementByID("cityInput").value;

// console.log(">>>>>>weather api js page accessed<<<<<<");

// document.getElementByID("citystateBtn").addEventListener('click',search());

// function search() {
// router.get("/fetch_response", async (req, res) => {
//     console.log("<<<<<<<inside the search function>>>>>>");
//     const url = `https://api.openweathermap.org/response/2.5/weather?q=` + {cityInput} + `&appid=${APIKEY}`;
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

$("#citystateBtn").on("click", function (e) {
    e.preventDefault();
    $("#tablebody").empty();  

    const cityInput = $("#cityInput").value;

    const queryURL = `https://api.openweathermap.org/response/2.5/weather?q=${cityInput}&appid=${APIKEY}`;

$.ajax({
  url: queryURL,
  error: function() {
    alert('Please enter a valid city name');
}
})
.then(function (response) {
  if (response.length === 0) {
    let noCity = "Please enter a real place bish";
    $("#tablebody").empty();
    $("#tablebody").append(noCity);
    $(document).ready(function(){
    });
  }

  const cityArray = [];
    // FOR any results, display as such:
    for (let i = 0; i < response.length; i++) {
      console.log(response)
      cityArray.push(response[i]);
      console.log(response)

      let makeCityOutput =
        `<span class="cityStuff">City: </span>` +
        response[i].main +
        "<br>" +
        `<span class="cityStuff">The conditions from </span>` +
        response[i].description +
        "<br><br>" +
        `<img style="display=center src="$" width="200" height="300">` +
        "<br><br><br>";
        console.log(response)

      let html = `<tr><td> ${makeCityOutput} </td></tr>`;
      $("#tablebody").append(html);
    }
  })});