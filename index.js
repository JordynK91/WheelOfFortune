var box1 = document.getElementById('box1')
var start = document.getElementById('start')
var usedLetters = document.getElementById('usedLetters')
var wordArray = []
var usedArray = []
var blankArray = []
var blankArray2 = []
var submit = document.getElementById('submit')
var hintbox = document.getElementById('hintbox')
var hint1 = "an object-oriented computer programming language commonly used to create interactive effects within web browser"
var hint2 = "push it. push it real good"
var hint3 = "conjunction junction, what's your _____?"
var hint4 = "a symbolic name that represents a value"
var hint5 = "Radiohead's Ok ______"
var hint6 = "they are surrounded by brackets"
var hint7 = "if this tech term had a favorite mountain range, it would be the cascades"
var header = document.getElementById('header')


var myWheel = new Wheel ()


function Wheel (){
//starts the game
	start.onclick = function giveWord(){
		var words = ['JAVASCRIPT', 'GITHUB', 'FUNCTION', 'VARIABLE', 'COMPUTER', 'ARRAY', 'STYLESHEET']
		var hints = [hint1, hint2, hint3, hint4, hint5, hint6, hint7]
		var random = Math.floor(Math.random() * words.length)
		var randomWord = words[random]
		var randomHint = hints[random]
		wordArray.push(randomWord.toString('').split(''))
		console.log(wordArray)
		for (i=0; i<randomWord.length; i++)  
			{blankArray[i] = (" " + "_"+ " ")
		}
			box1.innerHTML= blankArray.join('') //displays the word to guess
			hintbox.innerHTML = randomHint   //displays the hint

	}
//what happens when the user submits a letter
	submit.onclick = function checkLetter(){
		var stuff = wordArray[0]
		//if there's a match
		for (i=0; i<stuff.length; i++){
			var guess = document.getElementById('guess').value.toUpperCase('')
			if (guess === stuff[i]){
				blankArray2.push(guess)
				if (blankArray[i] = stuff[i]){
						blankArray[i] = guess
					}
				}
			//if the player guess the whoel word!
			else if ((blankArray2.length) == (stuff.length)){
					console.log('you win')
					} 
			//displays the matching letters		
			box1.innerHTML = blankArray.join('') 
			}
		
		//if there's not a match
		 if (stuff.includes(guess) == false){
			usedArray.push(guess) 
			usedLetters.innerHTML = usedArray	
			//if the user lost
			if (usedArray.length >= 5) {
					console.log('you lose')
			}
		}
			
	}	
}
		 
	


	



	




	
	


	




	









