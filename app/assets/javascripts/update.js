// var fetch = function(){
// 	$.ajax({
// 		url: '/games/ajax', 
// 		dataType: 'json', 
// 		method: 'get',

// 		success: function(data){
// 			console.log(data);
// 		},
// 		error: function(data){
// 			console.log('error');
// 		}
// 	})
// };

// $(function(){
// 	setInterval(function() {
// 		fetch();
// 		}, 3000);
// });


function Game(id, in_session){
	var hash = this.add();
	this.id = hash["id"];
	this.in_session = hash["in_session"];
}

function GameView(){
	//ajax call to listen for in_session
}

GameView.prototype.initialize() {
	// display Join // on click, make ajax, render whirleybird
	// Start Button // on click, make ajax to change game to insession and create round with word
	// call render from a PlayerView to create ul
}

GameView.prototype = {
	beginRound: function(){
	// make ajax request to fill Round with data 
	},
	finishRound = function(){
	// render results
	// render New Round Button (and listener)
	},
	renderWaiting = function(){
	// render whirlybird
	// this is called by on.click on join.button
	},

}

function PlayerView(){
}

PlayerView.prototype = {
	fetch = function(){
		$.ajax({
		url: '/games/players', 
		dataType: 'json', 
		method: 'get',
			success: function(data){
				if ( data[:status] === 'more_players' ) { // IS THIS HOW TO DO THIS? 
				console.log(data[:players]);
				} else {
				console.log('waiting for the players to show up');
				};
			},
			error: function(data){
				console.log('error');
			},
		},
	},
	setFetch = function(){
	setInterval(function() {
		this.fetch();
		}, 1000);
	},
	render = function(){
	// renders table
	},
}


function Player(){
	var hash = this.add();
	this.game = hash["game"];  // ***** ASK TOMORROW ******
	this.score = hash["score"];
	this.id = hash["id"];
}

Player.prototype.render(){
	// creates tr
}

function Round(){
	var hash = this.add();
	this.game = hash["game"];  // ***** ASK TOMORROW ******
	this.word = hash["word"];
	this.id = hash["id"];
}

Round.prototype.add = function() {
	// Make the AJAX call to create a new round
	// returns json data on succeess
}

function RoundView(round){
	// store the relevant dom elements as this.variables
	// this.wordElement = $("<div>").text(round.word);
}

RoundView.prototype = {
	renderWaiting: function(){
	// render whirlybird
	// this is called by on.click on submit.button
	// starts setter
	},
	renderInput: function(){
	// appends input 
	// append submit button
	},
	fetch: function(){
	//ajax listens to see if everyone has submitted
	},
	setFetch: function(){
	setInterval(function() {
		this.fetch();
		}, 1000);
	},
}

function Definition(){
	var hash = this.add()
	this.round_id = hash["round_id"]; // ***** ASK TOMORROW ******
	this.content = hash["content"];
	this.id = hash["id"];
}

Definition.prototype = {
	render: function(){
	// render li
	// add event listeners
	},
}


function DefinitionView(){

}

DefinitionView.prototype = {
	setFetch: function(){
	setInterval(function() {
		this.fetch();
		}, 1000);
	},
	fetch: function(){
	//ajax listesn to see if everyone has submitted?
	},
	render: function(){
	// render ul
	},
}

// We don't have a picks and picksView because we are
// rendering them in results 











