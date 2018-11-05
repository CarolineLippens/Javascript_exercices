var CreationTableauLangages = function () {
    let fruits = [ 'Html', 'CSS', 'Java', 'PHP' ];
    return fruits
}

var CreationTableauNombres = function () {
let chiffres = [ 0, 1, 2, 3, 4, 5 ];
return chiffres
}

var RemplacementElement = function (langages) {
    let fruits = [ 'Html', 'CSS', 'Java', 'PHP' ];
    fruits.splice(2,1,'Javascript');
    return fruits
}

var AjoutElementLangages = function (langages) {
    let fruits = [ 'Html', 'CSS', 'Java', 'PHP' ];
    fruits.splice(2,1,'Javascript');
    fruits.splice(4,0,'Ruby','Python');
    return fruits
}

var AjoutElementNombres = function (nombres) {
    
    let une = nombres.unshift(-1);
    let deux = nombres.unshift(-2);
    return nombres

}

var SuppressionPremierElement = function (langages) {
    let fruits = [ 'Html', 'CSS', 'Javascript', 'PHP', 'Ruby', 'Python' ];
    fruits.splice(0,1);
 
    return fruits
}

var SuppressionDernierElement = function (langages) {
    let fruits = ['CSS', 'Javascript', 'PHP', 'Ruby', 'Python' ];
    let popped = fruits.pop();
    return fruits
}

var ConversionChaineTableau = function (reseaux_sociaux_chaine) {
    let reseaux_sociaux = reseaux_sociaux_chaine.split(",");
    return reseaux_sociaux;
}

var ConversionTableauChaine = function (langages) {
    return(langages.toString());
}

var TriTableau = function (reseaux_sociaux) {
    reseaux_sociaux.sort();
return(reseaux_sociaux);
    
}

var InversionTableau = function (reseaux_sociaux){
    let reversed = reseaux_sociaux.reverse(); 
    return reversed
}