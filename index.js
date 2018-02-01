var box1 = document.getElementById('box1')
var start = document.getElementById('start')
var blankArray = []

var myWheel = new Wheel ()

function Wheel (){
	start.onclick = function(){
	var words = ['javascript', 'github', 'function', 'variable', 'computer', 'array']
	var randomWord = words[Math.floor(Math.random() * words.length)]
	for (i=0; i<randomWord.length; i++){
		blankArray.push(' '+'_'+' ')}
	box1.innerHTML= blankArray.join('')
		}
	}









