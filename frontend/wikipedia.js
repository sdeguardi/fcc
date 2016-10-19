$(document).ready(function() {
	// once icon is clicked, show textbox
	$(".fa").on("click", function() {
		$("#submit").css("display", "inline");
		$(".textbox").css("display", "inline").addClass("animated rollIn");
		$(".fa").css("display", "none");
		$("#icontxt").css("display", "none");
		$("#random").css("display", "none");
	});
	// define vars
	var search = $(".textbox");
	var submit = $("#submit");
	var results = $("#results");
	
	// search from textbox yields results
	function request() {
		var searchValue = search.val();
		$.ajax({
        type: "GET",
        url: "http://en.wikipedia.org/w/api.php?action=query&format=json&callback=?&list=search&srsearch=" + searchValue,
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
          results.children().remove();
					
			// define variables used in API request
			for (var id in data.query.search) {
			   var infoDiv = $('<div class="info"></div>');
         var titleDiv = $('<div class="title"></div>');
         var headerDiv = $("<h2></h2>");
         var snippetDiv = $('<div class="snippet"></div>');
         var title = data.query.search[id].title;
         var snippet = data.query.search[id].snippet;
         var url = "https://en.wikipedia.org/wiki/" + title.replace(/ /g, '_');
         var link = $('<a href="' + url + '" target="_blank"></a>');
            
				// add html for sections
				headerDiv.text(title);
				snippetDiv.text(snippet);
            
				// add content from response
				titleDiv.append(headerDiv);
				infoDiv.append(titleDiv);
				infoDiv.append(snippet);
				link.append(infoDiv);
				results.append(link);
				}
			},
    });
  };
  submit.click(request);
	search.keypress(function(e) {
    if (e.keyCode == 13) {
      request();
			}
	}); // end enter button
}); // end document
