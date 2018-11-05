let nbr = () => {
    let premier_nombre = document.getElementById("premier_nombre").value;
    let deuxieme_nombre = document.getElementById("deuxieme_nombre").value;
    let totalNbr = Math.floor(premier_nombre)*deuxieme_nombre;
    alert("le résultat donnera " + totalNbr + " !");
    }