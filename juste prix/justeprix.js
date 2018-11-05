//Exercice : Juste prix
//Déclarez les variables suivantes :
//
//Variable qui sera utilisée pour afficher un message
//Variable qui va compter le nombre d'essais
//Variable de la valeur minimum qu'on peut entrer (ici 20)
//Variable de la valeur maximale qu'on peut entrer (ici 80)
//Déclarez les fonctions suivantes :
//
//crée une fonction qui retourne un numéro aléatoire arondi entre la variable minimale et la variable maximale
//crée une fonction
//qui prends un argument pour tester si le numéro qu'on a entré est le bon
//la fonction retourne un de ces 3 messages : C'est plus, C'est moins,C'est juste tu as trouvé en X coups
//Utiliser la console ou les fonctions natives suivantes :
//
//window.prompt();
//window.alert();
//window.confirm();



let truevalor = Math.round(getRandomArbitrary (20,80))


function getRandomArbitrary(min, max) {
return Math.random() * (max - min) + min;
  }

console.log(truevalor)


let justeprix = () => {
	let valeur= prompt("entrez un chiffre entre 20 et 80");
	for (let i = 1; i < 10; i++) {
		
		
		
		if (valeur > truevalor) {
		alert ("c'est moins");
		valeur = prompt("entrez un chiffre entre 20 et 80");
   		}	
   
	  else if (valeur < truevalor) {
		alert ("c'est plus");
		valeur = prompt("entrez un chiffre entre 20 et 80");
		
					   }	
		
	
	else if (valeur = truevalor) {
		alert("bravo vous avez trouver en " + i + " coups!"); 
		break;
	}
	}
}
justeprix()
//
//
//
//let pd = "c'est moins";
//let bitches = "C'est plus";
//let baltringue = "GG mec t'as trouvé en "
//let pupute;
//let trouDBalle;
//getRandomArbitrary = (min, max) => {
//return Math.round(Math.random() * (max - min) + min);
//}
//trouDBalle = getRandomArbitrary(20, 80);
//console.log(trouDBalle);
//
//justePrix = () => {
//let vieilleQuatain = prompt("Entrez un nombre entre 20 et 80 please");
//let i;
//for (i = 0; i < 8; i++) {
//if (vieilleQuatain < trouDBalle) {
//alert(bitches);
//vieilleQuatain = prompt("Entrez un nombre entre 20 et 80 please");
//} else if (vieilleQuatain > trouDBalle){
//alert(pd);
//vieilleQuatain = prompt("Entrez un nombre entre 20 et 80 please");
//} else if (vieilleQuatain == trouDBalle){
//pupute = i + 1;
//alert(baltringue + pupute + " coups");
//break;
//} else {
//alert("tg baltringue");
//}
//}
//}
//justePrix();