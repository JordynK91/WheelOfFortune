var box1 = document.getElementById('box1')
var start = document.getElementById('start')
var usedLetters = document.getElementById('usedLetters')
var wordArray = []
var blankArray = []
var usedArray = []
var submit = document.getElementById('submit')




var myWheel = new Wheel ()


function Wheel (){
	//game provides the word to guess
	start.onclick = function giveWord(){
	var words = ['javascript', 'github', 'function', 'variable', 'computer', 'array', 'stylesheet']
	var randomWord = words[Math.floor(Math.random() * words.length)]
	wordArray.push(randomWord.toString('').split(''))
	for (i=0; i<randomWord.length; i++){
		 blankArray[i] = " " + "_"+ " "}
	box1.innerHTML= blankArray.join('')
		}
	//user submits a letter
	submit.onclick = function userLetter(){
	var guess = document.getElementById('guess').value
	//check if letter matches the word
	for (i=0; i<wordArray.length; i++){
		var letter = wordArray[i].indexOf(guess)
		if (wordArray[i].indexOf(guess) != (-1)) {
			blankArray[letter] = guess
			box1.innerHTML = blankArray.join('')}
		else {usedArray.push(guess)
			usedLetters.innerHTML = usedArray
			alert(false)}
		}

		if (usedArray.length >= 5) {
			alert('you lose')
		}
		
		}
	}


//reveal letter if guess is correct
//if guesses are exhausted alert that you lost/give option to play again(which re-does function)
// if you win alert that you won

	




	
	


	




	









