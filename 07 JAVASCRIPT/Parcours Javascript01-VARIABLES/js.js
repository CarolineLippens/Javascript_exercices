//Exercice : Diseur de bonne aventure
//Exercice : Diseur de bonne aventure
//Déclarez les variables suivantes:
//
//nombre d'enfants
//nom d'une femme
//un pays
//métier
//Afficher dans la console :
//
//Vous serez X et habiterez à Y, et marié a Z avec N enfants.
//let enfant=3;
//let nom="carotte";
//let pays="Birmanie";
//let metier="vendeur de restes humains";
//document.write("Vous serez "+ metier+ "et habiterez en " + pays+" et marié a "+ nom + "avec "+ enfant+ "enfants.");



//Exercice : Bientôt vieux
//Déclarez les variables suivantes :
//
//Votre âge
//Un âge maximum, esperons tous vivre 100ans
//Une denrée alimentaire
//Votre consomation de cette denrée par jour
//Calculer le nombre de fois que vous en mangerez pour le restant de votre vie.
//
//Mettez le resultat dans la console comme ceci :
//
//Il vous reste N de X avant d'ateindre l'age de Y ans"

let age= 22;
let max= 100;
let aliment="oeufs";
let conso=0.5;
//365 jours par ans
let annees= max-age;
let jours= annees * 365;
let consototal=jours*conso;
document.write("tu mangeras encore" + consototal + aliment + "dans ta vie");


