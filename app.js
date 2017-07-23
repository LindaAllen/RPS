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
		return "You won!";
	} else {
		return "You lost";
	}

}