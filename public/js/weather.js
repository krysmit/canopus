var APIKEY = "d19d0c16157ce3486e364b59c5b2484e";

$("#citystateBtn").on("click", function (e) {
    e.preventDefault();
    $("#tablebody").empty();  

    const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=${APIKEY}`;

$.ajax({
  url: queryURL,
  error: function() {
    alert('Please enter a valid city name');
}
})
.then(function (data) {
  if (data.length === 0) {
    let noCity = "Please enter a real place bish";
    $("#tablebody").empty();
    $("#tablebody").append(noCity);
    $(document).ready(function(){
    });
    console.log(JSON.stringify(data));
  }
    // FOR any results, display as such:
    else {
      const cityArray = [];
      console.log(data)
      cityArray.push(data);
      console.log(data)

      let makeCityOutput =
        `<span class="cityStuff">City: </span>` +
        data.main +
        "<br>" +
        `<span class="cityStuff">The conditions from </span>` +
        data.description +
        "<br><br>" +
        `<img style="display=center src="$" width="200" height="300">` +
        "<br><br><br>";
        console.log(data)

      let html = `<tr><td> ${makeCityOutput} </td></tr>`;
      $("#tablebody").append(html);
    }
  })});