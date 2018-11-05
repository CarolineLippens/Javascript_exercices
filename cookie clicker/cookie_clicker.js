let score = 0
let bonus = document.querySelector('#bonus');
let click = document.getElementById("cookie");
let temps = 30
let score2;
let multiplicateur = 0;

let clicker = () => {
score += 1
score = score + (1*multiplicateur) 
document.getElementById("monScore").innerText = score;
}



let augmenterMultiplicateur = () => {
if(score>50){
	score=score-50;
document.getElementById("monScore").innerText = score;
multiplicateur +=1
document.getElementById("multiplicateur").innerText = ("tu as "+multiplicateur+" usine(s)")
}
else {
	alert("Il te faut 50 cookies")
	}
}
let esclave=0;
let autoclick = () => {
	if (score >= 500) {
	score -= 500 || true
	setInterval(function () {clicker()}, 1000);
	document.getElementById('monScore').innerText = score;
	autoclick = document.getElementById('autoclick').disabled = true;
	console.log(score);
	}
	else {
	alert("Il te faut 500 cookies")
	}
	}




	let bonusTime = () => {

		if (score > 5000) {
			intervalle = setInterval(timedText, 1000);
			score = score - 5000
			bonus.disabled = true;
			bonusScore(); // ExÃ©cute la fonction bonusScore
			time(); // ExÃ©cute la fonction bonusScoreEnd aprÃ¨s X secondes
			timedText();
		} else {
			alert("il te faut 5000 cookies")
		}
	}
		
		let bonusScore = () => {
		multiplicateur = multiplicateur * 2;
		console.log(multiplicateur);
		}
		
		let bonusScoreEnd = () => {
		multiplicateur = multiplicateur / 2;
		bonus.disabled = false
		console.log(multiplicateur);
		}
	
		let time = () => {
			setTimeout(bonusScoreEnd, 30000)
		}
		let timedText = () => {
		temps = temps - 1
		if (temps == 0) {
		temps += 30
		clearInterval(intervalle);
		
		}
		document.getElementById("bonus").innerText = ("Bonus " + (temps))
		}
	
	bonusScore = () => {
		multiplicateur = multiplicateur +1* 2;
		console.log(multiplicateur);
	}