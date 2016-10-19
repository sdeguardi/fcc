var result = "";

function calc() {
	result = eval(result);
}

function inputVal(input) {
	switch (input) {
		case "AC":
			result = "";
			break;
		case "C":
			result = result.slice(0, result.length - 1);
			break;
		case "=":
			result = eval(result);
			break;
		default:
			result += input;
	}
	$("#screen").val(result);
}

$("button").click(function() {
	var currInput = $(this).attr("value");
	inputVal(currInput);
});
