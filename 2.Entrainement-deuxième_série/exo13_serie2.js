let calculimc= () => {
let taille = prompt("quelle est votre taille?")
let poids = prompt("Quel est votre poid?");
let imcC = poids / Math.pow(taille, 2);
let IMC = imcC.toFixed(2);
alert(IMC);

if (IMC<16.5){
    alert("dénutrition ou famine");
}
else if (16.5 <= IMC && IMC < 18.5){
    alert("maigreur");
}
else if (18.5 <= IMC && IMC < 25){
    alert("corpulence normale");
}
else if (25 <= IMC && IMC < 30){
    alert("surpoids");
}
else if (25 <= IMC && IMC < 30){
    alert("obésité modérée");
}
else if (30 <= IMC && IMC < 35){
    alert("obésité sévère");
}
else if ( 35 <= IMC && IMC < 40){
    alert("obésité morbide");
}               
}
    

   // - moins de 16,5 : dénutrition ou famine
   // - 16,5 <= IMC < 18,5 : maigreur
   // - 18,5 <= IMC < 25 : corpulence normale
   // - 25 <= IMC < 30 : surpoids
   // - 30 <= IMC < 35 : obésité modérée
   // - 35 <= IMC < 40 : obésité sévère
   // - plus de 40 : obésité morbide