var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var prompt = require('prompt');
var randomLetter = function () {
	return alphabet[Math.floor(Math.random() * 26)];
};
var n;
var error = {
	'a': "It is at your left pinky",
	'b': "It is one row below and two spaces to the right from your left index finger",
	'c': "It is one row below and to the right of your left middle finger",
	'd': "It is at your left middle finger",
	'e': "It is one row above your left middle finger",
	'f': "It is at your left index finger",
	'g': "It is one space to the right of your left index finger",
	'h': "It is one space to the left of your right index finger",
	'i': "It is one row above your right middle finger",
	'j': "It is at your right index finger",
	'k': "It is at your right middle finger",
	'l': "it is at your right ring finger",
	'm': "It is one row below and to the right of your right index finger",
	'n': "It is one row below and to the left of your right index finger",
	'o': "It is one row above your right ring finger",
	'p': "It is one row above your right pinky",
	'q': "It is one row above your left pinky",
	'r': "It is one row above your left index finger",
	's': "It is at your left ring finger",
	't': "It is one row above and one space to the right of your left index finger",
	'u': "It is one row above your right index finger",
	'v': "It is one row below and to the right of your left index finger",
	'w': "It is one row above your left ring finger",
	'x': "It is one row below and to the right of your left ring finger",
	'y': "It is one row above and one space to the left of your right index finger",
	'z': "It is one row below and to the right of your left pinky"
}

console.log('Welcome to typechecker!\nIt\'s easy to play.\nFirst type the length that you would like your test strings to be.\nThen just type the character that follows the number.\nWhen you\'re ready to stop, type \'done\'.');
prompt.start();

prompt.get(['string length'], function (err,result) {
	n = Number(result['string length']);
	test(1);
})

function test (i) {
	var j;
	var testLetter = i.toString();
	for (j = 0; j < n; j++) {
		testLetter += randomLetter();
	}

	prompt.get([{name: testLetter, hidden: true}], function(err, result) {
		var check = i.toString() + result[testLetter];
		if (testLetter === check) {
			console.log('you typed "' + result[testLetter] + '". Good job!');
			test(i + 1);
		} else if ('done' === result[testLetter]) {
			console.log('goodbye!');
		} else {
			wrongAnswer(result[testLetter], testLetter.slice(i.toString().length), i);

		}
	});
}

function wrongAnswer (typed, solution, index) {
	var k;
	var arr = [];
	console.log('You typed "' + typed + '".');
	for (k = 0; k < solution.length; k++) {
		arr = arr.concat(solution[k]);
	}
	arr.forEach( function (elem, ind) {
		if (elem !== typed[ind]) {
			console.log("You missed the " + elem + ".  " + error[elem] + '.');
		}
	});
	arr = [];
	test(index + 1);
}
