// particle.js

particlesJS.load("particles-js", "Script/config.json", function () {
	console.log("callback - particles.js config loaded");
});

// Drop down animatio of menu bar (only for screen width < 786px)

$(document).ready(function () {
	$(".menu-icon").on("click", function () {
		$("nav ul").toggleClass("showing");
	});
});

$(document).ready(function () {
	$(".menu a").on("click", function () {
		$("nav ul").removeClass("showing");
	});
});

// Hamburger animation (only for screen width < 786px)

$(document).ready(function () {
	$(".wrapper-menu").click(function () {
		$(this).toggleClass("open");
	});
});

$(document).ready(function () {
	$(".menu a").click(function () {
		$(".wrapper-menu").removeClass("open");
	});
});

// Game 

let userscore = 0;
let botscore = 0;
const result = document.querySelector("#result");
const score = document.querySelector("#score");
const userbox = document.querySelector("#user");
const botbox = document.querySelector("#bot");

// comparing the choices using conditions

function compare(choice1, choice2) {
	if (choice1 === "rock") {
		userbox.innerHTML = `<span class="iconify" data-icon="la:hand-rock"></span>`;
		if (choice2 === "paper") {
			botbox.innerHTML = `<span class="iconify" data-icon="la:hand-paper"></span>`;
			botscore++;
			return "Bot";
		} else if (choice2 === "scissors") {
			botbox.innerHTML = `<span class="iconify" data-icon="la:hand-scissors"></span>`;
			userscore++;
			return "User";
		} else {
			botbox.innerHTML = `<span class="iconify" data-icon="la:hand-rock"></span>`;
			return "Its a tie!!!";
		}
	} else if (choice1 === "paper") {
		userbox.innerHTML = `<span class="iconify" data-icon="la:hand-paper"></span>`;
		if (choice2 === "scissors") {
			botbox.innerHTML = `<span class="iconify" data-icon="la:hand-scissors"></span>`;
			botscore++;
			return "Bot";
		} else if (choice2 === "rock") {
			botbox.innerHTML = `<span class="iconify" data-icon="la:hand-rock"></span>`;
			userscore++;
			return "User";
		} else {
			botbox.innerHTML = `<span class="iconify" data-icon="la:hand-paper"></span>`;
			return "Its a tie!!!";
		}
	} else if (choice1 === "scissors") {
		userbox.innerHTML = `<span class="iconify" data-icon="la:hand-scissors"></span>`;
		if (choice2 === "rock") {
			botbox.innerHTML = `<span class="iconify" data-icon="la:hand-rock"></span>`;
			botscore++;
			return "Bot";
		} else if (choice2 === "paper") {
			botbox.innerHTML = `<span class="iconify" data-icon="la:hand-paper"></span>`;
			userscore++;
			return "User";
		} else {
			botbox.innerHTML = `<span class="iconify" data-icon="la:hand-scissors"></span>`;
			return "Its a tie!!!";
		}
	}
}

function rpsgame(choice) {
	let userchoice = choice;
	let botchoice = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
	let winner = compare(userchoice, botchoice);
	result.classList = "result";

	if (winner === "User") {
		result.innerHTML = winner + " wins";
		result.classList.add("win");
	} else if (winner === "Bot") {
		result.innerHTML = winner + " wins";
		result.classList.add("lose");
	} else {
		result.innerHTML = winner;
		result.classList.add("tie");
	}
	score.innerHTML = `<div class="score-box user-score">USER: ${userscore} </div>
    <div class="score-box bot-score">COMPUTER: ${botscore} </div>`;
}