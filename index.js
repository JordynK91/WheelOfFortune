var box1 = document.getElementById('box1')
var start = document.getElementById('start')
var usedLetters = document.getElementById('usedLetters')
var wordArray = []
var usedArray = []
var blankArray = []
var blankArray2 = []
var submit = document.getElementById('submit')


var myWheel = new Wheel ()


function Wheel (){

start.onclick = function giveWord(){
		var words = ['javascript', 'github', 'function', 'variable', 'computer', 'array', 'stylesheet']
		var randomWord = words[Math.floor(Math.random() * words.length)]
		wordArray.push(randomWord.toString('').split(''))
		console.log(wordArray)
		for (i=0; i<randomWord.length; i++){
	 		blankArray[i] = " " + "_"+ " "}
			box1.innerHTML= blankArray.join('')}

submit.onclick = function userLetter(){
	var stuff = wordArray[0]
		for (i=0; i<stuff.length; i++){
				var guess = document.getElementById('guess').value
				if (guess === stuff[i]){
					blankArray2.push(i)
					if (blankArray[i] = stuff[i]){
							blankArray[i] = guess}
					box1.innerHTML = blankArray.join('')
					
				}
				}



			//else {usedArray.push(guess)
			//	usedLetters.innerHTML = usedArray
			//	alert(false)
			
		}
	}


	
		
//winning and losing
		//if (usedArray.length >= 5) {
		//	alert('you lose')
		//}

	
//}


	




	
	


	




	









