// get weather based on browser location
// background should change based on type of weather
// add icon for different weather types
$(document).ready(function() {
	// use browser navigator function to get coords
	if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(function(position) {
	// define lat and lon coords
	var lat = position.coords.latitude;
	console.log(lat);
	var lon = position.coords.longitude;
	// get weather info from API
	$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=00aa0b765416223320ed222e153187e3", function(response) {
		var name = response.name;
		var farenheit = Math.floor(response.main.temp) + " F";
		var celsius = Math.floor(((response.main.temp - 32) * 5/9)) + " C";
		var icon = response.weather.icon;
		$("#locale").html(name);
		$("#degrees").html(farenheit);
		$("#degrees").click(function() {
			// change from F to C
			if ($("#degrees").html() !== celsius) {
				$("#degrees").html(celsius);
			} else {
					$("#degrees").html(farenheit);
			}
		}); // end of F to C
		if (farenheit <= 32) {
			$(".temp").css("color", "#3366cc");
			$("#icon").html("<img src='http://openweathermap.org/img/w/13d.png'>");
			} else if (farenheit > 32 && farenheit <= 80) {
					$(".temp").css("color", "#321204");
					$("#icon").html("<img src='http://openweathermap.org/img/w/04d.png'>");
				} else {
						$(".temp").css("color", "#ffff4d");
						$("#icon").html("<img src='http://openweathermap.org/img/w/01d.png'>");
					}
		}); // end json response
	});
	} else {
		// msg if geolocation not enabled
		alert("Geolocation disabled. Please enable geolocation to use app.");
		} // end of geolocation function
}); // end of script
