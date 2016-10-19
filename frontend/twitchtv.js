// this pen does not produce any results due to the missing API client-id

$(document).ready(function (){
	// define users for json request
	var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
	var results = $("#results");
	
	for (var i = 0; i < users.length; i++) {
	$.getJSON('https://api.twitch.tv/kraken/streams/' + users[i] + '?callback=?', function(data) {
		// define vars used in results
		var name = data.name;
		var logo = data.logo;
		var url = data.url;
		var status = data.status;
		var message = data.message;
		var link = $('<a href="' + url + '" target="_blank"></a>');
		results.children().remove();
		results.append(logo);
		results.append(name);
		results.append(status);
		link.append(results);
		results.append(link);
		
		$("#all").on("click", function() {
			// show all users from users array
		});
		$("#online").on("click", function() {
			// show online users
		});
		$("#offline").on("click", function() {
			// show offline users
		});
	});
	}
});
