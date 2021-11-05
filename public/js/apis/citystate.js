var searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || []
// var $searchInput = $("#searchInput").val();

//Function to save to local storage
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