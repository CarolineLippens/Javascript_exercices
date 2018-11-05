let nbr = () => {
    let pointure = document.getElementById("pointure").value;
    let annee = document.getElementById("annee").value;
    pointure= pointure*2;
    pointure=pointure+5;
    pointure=pointure*50;
    pointure=pointure-annee;
    pointure= pointure+1766;
    
    alert("le résultat donnera " + pointure + " !");

    }

