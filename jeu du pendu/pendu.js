const mot = ['b','o','n','j','o','u','r',];
let lettresafficher = []; //le tableau ou les lettres validées vont se mettre
let valeurentree;
let flag = 0; //flag est une valeur qui va definir si une lettre entrée est bonne ou mauvaise et définir le type d'alert à envoyer
let lettreentree=document.getElementById('lettre'); //on prend la valeur des 2 boutons, ajouter la lettre puis valider
const pressOk = document.getElementById('submit'); // bouton pour presser ok


//Eventlistener
pressOk.addEventListener('click', function(valeurentree){ // evenement de click
	
	if(mot.length != lettresafficher.length){ //si le la longueur du mot n'est pas égal à la reponse alors on lance la fonction du pendu pour demander les lettres
		valeurentree = document.getElementById('lettre').value;
		fonctionpendu(valeurentree);
	}
	// input.setAttribute('value', null);
});


//Fonction fonction pendu
let fonctionpendu = (valeurentree) => {

	flag = 0;
	for(let i=0; i<mot.length; i++){
		if(valeurentree == mot[i]){
			lettresafficher.splice(i, 0, valeurentree); // .splice modifie les éléments d'un tableau. (remplacer et supprimer ou ne pas supprimer) tab.splice(début, nbASupprimer[, élem1[, élem2[, ...]]])
			let span = document.getElementById(`lettre` + i); // le tableau reprend les lettres du mot de 1 à 6
			span.innerHTML = valeurentree;  //The innerHTML property sets or returns the HTML content (inner HTML) of an element. la lettre va s'inscrire dans le span
			   
   			if (flag == 0) {
   				alert("Tu en a trouvé une, bravo, cherche encore");
   			}	
   
			flag = 1;
		}
	}
	if(flag == 0){
		alert("bip c'est faux t'a perdu");
	}
	if(mot.length == lettresafficher.length){
		alert("Vous avez trouver le mot gg")
	}
}

