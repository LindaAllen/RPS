// LOGIC

var score = 0;
var playerChoice;

var readable = {
	'0': 'Rock',
	'1': 'Paper',
	'2': 'Scissors',
}

var cpuChoice = {
	init: function() {
		this.store = Math.floor(Math.random() * 3);
		this.text = readable[this.store];
	},
	store:'' ,
	text: '',
};

// cpuChoice.init();
// console.log('cpuchoice:', cpuchoice.store, cpuchoice.text);

var order = [0, 1, 2, 0];

var chooseWinner = function(player, cpu) {
	if(order[player] === order[cpu]) {
		return 'The game is tied. Try again?';
	}
	if(order[player] === order[cpu + 1]) {
		score++;
		return "You won!";
	} else {
		score--;
		return "You lost";
	}

}

// console.log(chooseWinner(1, 0));

// UI

var paragraph = document.querySelector('p');

var assignClick = function(tag, pos) {
	tag.addEventListener('click', function() {
playerChoice = pos;
cpuChoice.init();
paragraph.innerText = 'The computer chose: ' + cpuChoice.text;
paragraph.innerText += '\n' + chooseWinner(playerChoice, cpuChoice.store);
paragraph.innerText += '\n' + 'SCORE: ' + score;

	})

}

var images = {
	tags: document.getElementsByTagName('img'),
	init: function() {
		for (var step = 0; step < this.tags.length; step++) {
			assignClick(this.tags[step], step);
		}
	}
}

images.init();