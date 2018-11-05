
let rayonvalide= () => {
    rayon = document.getElementById("rayon").value;
    let result1 = parseFloat(rayon);
    let final = Math.PI*(result1*result1);
    alert("le rayon de votre cercle est de "+final);

}