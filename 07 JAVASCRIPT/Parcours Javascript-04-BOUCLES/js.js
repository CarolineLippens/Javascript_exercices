//var increment = 0;
//while (increment <10) {
//    console.log(increment);
//    increment = increment + 1;
//}
//
//for (var i = 0; i <10; i++) {
//    console.log(i);
//}

//Exercices : Boucles
//Exercice : Pair et impair
//Ecrivez une boucle qui va itérer de 0 à 20.
//for (var t = 0; t<=20;t++){
//    console.log(t)
//}

//Pour chaque itération , il va vérifier si le nombre actuel est pair ou impair
//FAUX
//let paire = 0;
//while (paire <20) {
//    console.log(paire+" paire");
//    paire = paire + 2;
//}
//let impair = 1;
//while (impair <20) {
//    console.log(impair+" impair");
//    impair = impair + 2;
//}
// increment est égal a 10

//VRAI
//for (let i = 0; i <=20; i++) {
//    if (Number.isInteger(i/2)){
//    console.log(i+" est pair");
//    } else {
//    console.log(i+" est impair");
//    }
//    }


//Exercice : Multiplication Tables
//Écrire une boucle qui va itérer de 0 à 10
//Pour chaque itération de la boucle, il va multiplier le nombre de 9
//afficher dans la console le résultat par exemple : " 2 * 9 = 18".

//for (let i = 0; i<=10; i++){
//    console.log(i*9);
//}


//Exercice : assigner des grades
//Écrire une boucle qui va itérer de 0 à 100
//Écrire une fonction qui va retourner des grades selon les scores reçu
//si le score au dessus de 90 le grade est A
//si le score au dessus de 80 le grade est B
//si le score au dessus de 70 le grade est C
//si le score au dessus de 65 le grade est D
//si le score n'entre pas dans ces catégories le grade est F
//afficher dans la console le résultat par exemple : "Pour 82 points vous avez le grade B".

//for (let i=0; i<=100; i++){
//if (i>90){
//    s="A"
//}       
//else if (i>80){
//    s="B"
//}
//else if (i>70){
//    s="C"
//}
//else if (i<65){
//    s="D"
//}
////console.log(i,s)
//    }
//
//let score = function(i){
//    return ("tu as "+i+s)
//}
//console.log(score(90));


//let i = Math.floor(Math.random() *101 );
//if (i > 90) {
//console.log("Pour votre score " + (i) + " vous obtenez le rang A");
//}
//else if (i>80){
//console.log("Pour votre score " + (i) + " vous obtenez le rang B");
//}
//else if (i>70) {
//console.log("Pour votre score " + (i) + " vous obtenez le rang c");
//}
//else if (i>65) {
//console.log("Pour votre score " + (i) + " vous obtenez le rang D");
//}
//else {
//console.log("Pour votre score " + (i) + " vous obtenez le rang F")
//}

//Écrire une boucle qui va dessiner dans la console (ligne par ligne) le résulat suivant
//	*  
//	* *  
//	* * *  
//	* * * *  
//	* * * * *
let etoile= "*";
for (let i=0; i<=100; i++){
console.log(etoile);
etoile= etoile+"*";
}
