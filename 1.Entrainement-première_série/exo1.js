
//alert("Hello !");
//alert("Hello, c'est moi !");
//prompt("M’entendez-vous ?");
//console.log("M’entendez-vous ?");
//document.write('<h2>Mon super titre</h2>');
//var age = 23;
//
//alert(age);
//
//userAge = prompt("Quel est ton âge ?");
//
//alert(userAge);

//exo 1
//Définir une variable et l'afficher dans une boîte de dialogue.
//age=23
//document.write(age);

//exo2
//Définir trois variables : nom, prenom et ville. Les afficher comme sur l'image correspondant à l'exercice.
//nom="Lippens";
//prenom="caro";
//ville="Bruxelles";
//alert("nom: ",nom, prenom, ville);

//exo3
//Afficher une boîte de dialogue permettant de saisir son prénom. Afficher dans une boîte de dialogue "Bonjour, " suivi du prénom saisi.
//var age=prompt("quel est ton age?");
//prompt("waw " + age);

//exo4
//Refaire l’exercice 2 en demandant le nom, le prénom et la ville à l’utilisateur.
//var nom=prompt("quel est ton nom?");
//var prenom=prompt("quel est ton prénom?");
//var ville=prompt("quel est ta ville?");
//alert("tu t'appelles " + prenom + nom + "et tu habites à " + ville);

//exo5
//Demander à l’utilisateur deux nombres à virgule. Ne garder que la partie entière du premier .
//Les multiplier et afficher le résultat dans une boîte de dialogue.
//var num_1= prompt("donnez un nombre à virgule");
//var num_2= prompt("un deuxième svp :)");
//num_3=parseInt(num_1, 10);
//var final=(num_3 * num_2);
//alert(final);

//exo6
//let nbr = () => {
//    let premier_nombre = document.getElementById("premier_nombre").value;
//    let deuxieme_nombre =document.getElementById("deuxieme_nombre").value;
//    premier_nombre = parseInt(premier_nombre);
//    let totalNbr = premier_nombre%deuxieme_nombre;
//    alert("le résultat donnera " + totalNbr + " !");
//    }

//exo7
//Demander à l’utilisateur sa pointure et son année de naissance. Créer une fonction qui fait les calculs suivants :
//Multiplier la pointure par 2
//Ajouter 5 au résultat
//Multiplier le tout par 50
//Soustraire l’année de naissance
//Ajouter au tout 1766
//La fonction doit retourner le résultat. Tester avec votre date de naissance et votre pointure. Attention : n'utiliser une seule variable « resultat ».

//var pointure= prompt("quelle est ta pointure?");
//var annee = prompt("En quelle année es tu né?");
//pointure= pointure*2;
//pointure=pointure+5;
//pointure=pointure*50;
//pointure=pointure-annee;
//pointure= pointure+1766;
//alert(pointure);
//4120

//exo8
//Demander à l’utilisateur de saisir son âge. S’il a plus de 18 ans, afficher " Vous êtes majeur ". Sinon afficher " Vous êtes mineur ".
//age=prompt("Quel age avez vous?");
//if (age>=18) {
//    alert("vous êtes majeur! Bravo mon grand!");
//} else { 
//    alert("Vous êtes mineur mon petit")
//}