// create array of quotes
var quotes = [
	{
	author: "Yoda",
	quote: "Train yourself to let go of everything you fear to lose."
	},
	{
	author: "Jim Rohn",
	quote: "Happiness is not something you postpone for the future; it is something you design for the present."
	},
	{ 
	author: "Buddha",
	quote: "What we think, we become."
	},
	{
	author: "Theodroe Roosevelt",
	quote: "Believe you can and you're half way there."
	},
	{
	author: "Vince Lombardi",
	quote: "The measure of who we are is what we do with what we have."
	}
	];
// create color array to change background of body and buttons
	var colors = ["#617373", "#e27363", "#7f5f8e", "#31698a", "#00cd66"];

// create new quote on click of new quote button
$(document).on("click", function() {
	// instantiate vars quote and color
	var quote = quotes[Math.floor(Math.random() * quotes.length)];
	var color = colors[Math.floor(Math.random() * colors.length)];
	// loop through array for quote and change colors
	for (var i = 0; i < 10; i++){
		// use jQuery to change html elements
		$("#text").text(quote.quote);
		$("#author").text(quote.author);
		$("html body").css("background-color", color);
		$(".button").css("background-color", color);
	}
	// share quote with a tweet
	$("#tweet-quote").attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + quote.quote+ '" ' + "-" + quote.author));
});
