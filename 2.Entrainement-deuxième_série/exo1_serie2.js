//let surface = () => {
//    let largeur = prompt("largeur");
//    let longueur = prompt("longueur");
//    let surfacetotal=largeur*longueur;
//    console.log(surfacetotal);
//}

let surface= () => {
    longueur=prompt("Longueur?");
    largeur=prompt("Largeur?");
    let result1 = parseFloat(longueur);
    let result2 = parseFloat(largeur);
    let total = result1 * result2;
    
    alert(total);
    }

    let perimetre= () => {
        longueur=prompt("Longueur?");
        largeur=prompt("Largeur?");
        let result1 = parseFloat(longueur);
        let result2 = parseFloat(largeur);
        let peri = 2*(result1+result2);
        
        alert(peri);
        }