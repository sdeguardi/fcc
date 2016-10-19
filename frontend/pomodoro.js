$(document).ready(function() {
	var workTime = parseInt($("#workTime").html());
	var breakTime = parseInt($("#breakTime").html());
	var sessionTime = parseInt($("#sessionTime").html());
	
	$("#reset").click(function() {
		workTime = 25;
		breakTime = 5;
		sessionTime = 25;
		$("#workTime").html(workTime);
		$("#breakTime").html(breakTime);
		$("#sessionTime").html(sessionTime);
		$("#sessionType").html("Work");
		$("#decWork").prop("disabled", false);
		$("#incWork").prop("disabled", false);
		$("#decBreak").prop("disabled", false);
		$("#decBreak").prop("disabled", false);
		$("#reset").hide();
	});
	
	$("#decWork").click(function() {
		workTime -= 1;
		sessionTime -= 1;
		$("#workTime").html(workTime);
		$("#sessionTime").html(sessionTime);
	});
	
	$("#incWork").click(function() {
		workTime += 1;
		sessionTime += 1;
		$("#workTime").html(workTime);
		$("#sessionTime").html(sessionTime);
	});
	
	$("#decBreak").click(function() {
		breakTime -= 1;
		$("#breakTime").html(breakTime);
	});
	
	$("#incBreak").click(function() {
		breakTime += 1;
		$("#breakTime").html(breakTime);
	});
	
	$("#reset").hide();
	
	$(".timer").click(function() {
		$("#decWork").prop("disabled", true);
		$("#incWork").prop("disabled", true);
		$("#decBreak").prop("disabled", true);
		$("#decBreak").prop("disabled", true);
		var counter = setInterval(timer, 1000);
		sessionTime *= 60;
		breakTime *= 60;
		function timer() {
			$("#sessionType").html("Work");
			$("#sessionTime").html(sessionTime);
			sessionTime -= 1;
			if (sessionTime === 0) {
				clearInterval(counter);
				var breakTimeStart = setInterval(breakTimer, 1000);
				}	
				if (sessionTime % 60 >= 10) {
					$("#sessionTime").html(Math.floor(sessionTime / 60) + ":" + (sessionTime % 60));
					} else {
					$("#sessionTime").html(Math.floor(sessionTime / 60) + ":" + "0" + (sessionTime % 60));
					}
				function breakTimer() {
					$("#sessionType").html("Break");
					$("#sessionTime").html(breakTime);
					breakTime -= 1;
					if (breakTime === 0) {
						clearInterval(breakTimeStart);
						$("#reset").show();
						}
						if (breakTime % 60 >= 10) {
							$("#sessionTime").html(Math.floor(breakTime / 60) + ":" + (breakTime % 60));	
						} else {
						$("#sessionTime").html(Math.floor(breakTime / 60) + ":" + "0" + (breakTime % 60));
						}
				}
			} 
	});
});
