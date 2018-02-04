var box1 = document.getElementById('box1')
var start = document.getElementById('wheel')
var usedLetters = document.getElementById('usedLetters')
var usedArray = []
var blankArray = []
var blankArray2 = []
var submit = document.getElementById('submit')
var hintbox = document.getElementById('hintbox')
var hint1 = "An object-oriented computer programming language commonly used to create interactive effects within web browser"
var hint2 = "Push it. Push it real good."
var hint3 = "A symbolic name that represents a value."
var hint4 = "Radiohead's Ok ______"
var hint5 = "They are surrounded by brackets."
var hint6 = "If this tech term had a favorite mountain range, it would be the Cascades"
var header = document.getElementById('header')
var restart = document.getElementById('restart')
var wordArray = []




var myWheel = new Wheel ()


function Wheel (){
//starts the game
	start.onclick = function giveWord(){
		wordArray.length = 0
		blankArray.length = 0
		blankArray2.length = 0
		usedArray.length = 0
		usedLetters.innerHTML = " "
		var words = ['JAVASCRIPT', 'GITHUB', 'VARIABLE', 'COMPUTER', 'ARRAY', 'STYLESHEET']
		var hints = [hint1, hint2, hint3, hint4, hint5, hint6]
		var random = Math.floor(Math.random() * words.length)
		var randomWord = words[random]
		var randomHint = hints[random]
		wordArray.unshift(randomWord.toString('').split(''))
		for (i=0; i<wordArray[0].length; i++)  
			{blankArray[i] = (" " + "_"+ " ")
			box1.innerHTML= blankArray.join('') //displays the word to guess
			hintbox.innerHTML = randomHint   //displays the hint
			header.innerHTML = '5 Lives Left'}
		}
//what happens when the user submits a letter
	submit.onclick = function checkLetter(){
		//if there's a match
		for (i=0; i<wordArray[0].length; i++){
			var guess = document.getElementById('guess').value.toUpperCase('')
			if (guess === wordArray[0][i]){
				blankArray2.push(i)
				if (blankArray[i] = wordArray[0][i]){
						blankArray[i] = guess
				}		
						box1.innerHTML = blankArray.join('')
						
			}	
		}		
		//if there's not a match
		 if (wordArray[0].includes(guess) == false){
			usedArray.push(guess) 
			usedLetters.innerHTML = usedArray
				header.innerHTML = ((5 - usedArray.length) +' ' + 'lives left')
				//if the player loses
				if (usedArray.length >= 5 ) {
					header.innerHTML = 'You Lose! Click the Wheel to Play Again.'
					box1.innerHTML = wordArray[0].join('')
				}
			}
		//if the player wins!	
		else if (blankArray2.length == wordArray[0].length){
			header.innerHTML = 'You Win! Click the Wheel to Play Again'
		}
	}
}
		 
	


	



	




	
	


	




	









