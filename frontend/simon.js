ound  = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
var redSound    = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
var yellowSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
var blueSound   = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');

var game = [];
var user = [];
var rand = 1;
var count = 0;
var counter = 0;
var userCount = 0;
var num = 0;
var turnOn = 0;

$("#green").click(function() {
	green();
	user.push(1);
	userGo();
});

$("#red").click(function() {
	red();
	user.push(2);
	userGo();	
});

$("#yellow").click(function() {
	yellow();
	user.push(3);
	userGo();	
});

$("#blue").click(function() {
	blue();
	user.push(4);
	userGo();	
});

function green() {
	reset();
	$("#green").toggleClass("clkGn");
	greenSound.play();
}
function red() {
	reset();
	$("#red").toggleClass("clkRed");
	redSound.play();
}
function yellow() {
	reset();
	$("#yellow").toggleClass("clkYlw");
	yellowSound.play();
}
function blue() {
	reset()
	$("#blue").toggleClass("clkBlue");
	blueSound.play();
}

function reset() {
	$("#green").removeClass("clkGn");
	$("#red").removeClass("clkRed");
	$("#yellow").removeClass("clkYlw");
	$("#blue").removeClass("clkBlue");			
}

$("#startGame").click(function() {
	if (startCount > 0) {
		$(".green").removeClass("gnWin");
		$(".red").removeClass("redWin");
		$(".yellow").removeClass("ylWin");
		$(".blue").removeClass("blueWin");
		$(".start-btn").css("margin-left", "20px");
		$(".start-btn").css("background", "green");
		num = 0;
		game = [];
		user = [];
		count = 0;
		counter = 0;
		userCount = 0;
		$("#counter").text(1);	
		comp();
		}
});

var strictCount = -1;
var startCount = -1;


$("#strict").click(function(){
	$(".strict-btn").css("margin-left", "20px");
	$(".strict-btn").css("background", "green");
	strictCount *= -1;
});

$("#onoff").click(function(){
	$(".onoff").css("margin-left", "20px");
	$(".onoff").css("background", "green");
	startCount *= -1;
	turnOn = 1;
	if (startCount < 0) {
		num = 0;
		game = [];
		user = [];
		count = 0;
		counter = 0;
		userCount = 0;
		reset();
		$("#counter").text("--");
		$(".green").removeClass("gnlsrr");
		$(".red").removeClass("redlsr");
		$(".yellow").removeClass("ylwlsr");
		$(".blue").removeClass("bluelsr");
		$(".green").removeClass("gnWin");
		$(".red").removeClass("redWin");
		$(".yellow").removeClass("ylwWin");
		$(".blue").removeClass("blueWin");
	}
});

function comp() {
	var x = 1;
	function clear() {
		clearInterval(comp);
	}
	if (count > 0) {
		x = 0;
	}
	var comp = setInterval(function() {
			reset();
			random();
			pattern();
			count++;
			if (count === counter + 1) {
				clear();
				setTimeout(function() {
					reset();
				}, 500);
			}
		 }, 750 * x);
};

function random() {
	rand = Math.floor((Math.random() * 4) + 1);
	game.push(rand);
	return rand;
}

function pattern() {
	if (rand === 1) {
		green();
	} else if (rand === 2) {
		red();
	} else if (rand === 3) {
		yellow();
	} else if (rand === 4) {
		blue();
	}
}

function userGo() {
	if (user[userCount] === game[userCount] && game.length === 20 && user.length === game.length) {
		$(".green").addClass("gnWin");
		$(".red").addClass("redWin");
		$(".yellow").addClass("ylwWin");
		$(".blue").addClass("blueWin");
		$("#counter").text("WIN!");
	} else if (user.length === game.length && user[userCount] === game[userCount]) {
		user = [];
		userCount = 0;
		setTimeout(function() {
			counter++;
			$("#counter").text(counter + 1);			
			reset();
			check();
		}, 500);
	}

	else if (user[userCount] === game[userCount]) {
		userCount++;
		setTimeout(function() {
			reset();
		}, 500);
	}

	else if (strictCount > 0) {
		game = [];
		user = [];
		count = 0;
		counter = 0;
		n = 0;
		$("#counter").text("XXX");
		$(".green").addClass("gnlsr");
		$(".red").addClass("redlsr");
		$(".yellow").addClass("ylwlsr");
		$(".blue").addClass("bluelsr");
		setTimeout(function() {
			$("#counter").text(1);
			$(".green").removeClass("gnlsr");
			$(".red").removeClass("redlsr");
			$(".yellow").removeClass("ylwlsr");
			$(".blue").removeClass("bluelsr");
			comp();
		}, 1750);
	} else {
			num = 0;
			$("#counter").text("XXX");
			$(".green").addClass("grnlsr");
			$(".red").addClass("redlsr");
			$(".yellow").addClass("ylwlsr");
			$(".blue").addClass("bluelsr");
		setTimeout(function() {
			$(".green").removeClass("gnlsr");
			$(".red").removeClass("redlsr");
			$(".yellow").removeClass("ylwlsr");
			$(".blue").removeClass("bluelsr");
			$("#count").text(counter + 1);
			checkRepeat();
		}, 750);
	}
}

function repeat() {
	if ( game[num] === 1 ) {
		green();
		num++;
	}
	else if ( game[num] === 2) {
		red();
		num++;
	}
	else if ( game[num] === 3) {
		yellow();
		num++;
	}
	else if (game[num] === 4) {
		blue();
		num++;
	}	
}

function check() {
	function clear() {
		clearInterval(timeFunction);
	}
	var timeFunction = setInterval(function() {
		reset();
		if ( num !== game.length ) {
			repeat();
		}
		else if ( num === game.length ) {
			user = [];
			userCount = 0;
			num = 0;
			clear();
			comp();
		}
	}, 750);
}

function checkRepeat() {
	function clear() {
		clearInterval(timeFunction);
	}
	var timeFunction = setInterval(function() {
		reset();
		if ( num !== game.length ) {
			repeat();
		}
		else if ( num === game.length ) {
			user = [];
			userCount = 0;
			num = 0;
			clear();
		}
	}, 750);
}

function turnOff() {
	if (turnOn === 1) {
		turnOn = 0;
		$("#counter").text("OFF");
		$(".start-btn").css("margin-right", "20px");
		$(".start-btn").css("background", "red");
		$(".strict-btn").css("margin-right", "20px");
		$(".strict-btn").css("background", "red");
		$(".onoff").css("margin-right", "20px");
		$(".onoff").css("background", "red");
	}
}

