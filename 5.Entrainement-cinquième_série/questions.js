/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    let tailleString = texte.length;
    return(tailleString)
}
var remplaceECar = function (texte) {
    let result = texte.replace('Ce', 'C ');
    return result;
}
var concatString = function (texte1, texte2) {
    let concatString = texte1+texte2;
    return(concatString)
}
var afficherCar5 = function (texte) {
    let afficherCar5 = 'Ces exercices sont super!';
    return(afficherCar5.substr(4,1));
}
var afficher9Car = function (texte) {
    let afficher9Car = "Je dirait même qu'ils sont excellent";
    return(afficher9Car.substr(0,9));
}
var majusculeString = function (texte) {
    let majusculeString=texte;
    return(majusculeString.toUpperCase());
}
var minusculeString = function (texte) {
    let minusculeString=texte;
    return(minusculeString.toLowerCase());
}
var SupprEspaceString = function (texte) {
        return(texte.trim())
}
var IsString = function (texte) {
    let result = typeof(texte);
    if (result === 'string'){
    return true;
    }
    }

var AfficherExtensionString = function (texte) {
let re = /(?:\.([^.]+))?$/;
let AfficherExtensionString = re.exec(texte)[1];  // donnera "txt"
return AfficherExtensionString
}
var NombreEspaceString = function (texte) {
    
    let NombreEspaceString = (texte.split(" ").length - 1);
    return(NombreEspaceString)

}
var InverseString = function (texte) {
    return texte.split("").reverse().join("");
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    
return(Math.pow(x, y));

}
var valeurAbsolue = function (nombre) {
return(Math.abs(nombre));
}
var valeurAbsolueArray = function (array) {
    
    let result = [];

    for (i=0; i<array.length; i++){
        let abs = Math.abs(array[i]);
        result.push(abs);
    }
    return result;
    }
var sufaceCercle = function (rayon) {
    let air= (rayon*rayon)*Math.PI;
    return (Math.round(air))

}
var hypothenuse = function (ab, ac) {
    
    let hypo= (ab*ab)+(ac*ac);
    return(Math.sqrt(hypo))
}
var calculIMC = function (poids, taille) {

    let imcC = poids / Math.pow(taille, 2);
    let IMC = imcC.toFixed(2);

    return(parseFloat(IMC));
   // if (IMC<16.5){
   //     return("dénutrition ou famine");
   // }
   // else if (16.5 <= IMC && IMC < 18.5){
   //     return("maigreur");
   // }
   // else if (18.5 <= IMC && IMC < 25){
   //     return("corpulence normale");
   // }
   // else if (25 <= IMC && IMC < 30){
   //     return("surpoids");
   // }
   // else if (25 <= IMC && IMC < 30){
   //     return("obésité modérée");
   // }
   // else if (30 <= IMC && IMC < 35){
   //     return("obésité sévère");
   // }
   // else if ( 35 <= IMC && IMC < 40){
   //     return("obésité morbide");
   // }               
    }
