function calculMoyenne(){
    let i;
    let resultat = 0;
    
    for(i=0; i<3; i++){
        let a = prompt('Entrez un nombre : ');
        resultat += Number(a);
    }
    alert(resultat);
    }
    
    function calculMoyenne(){
    
    let i = 0; 
    let sommeTotal =0;
    let n = prompt('Entrez un nombre entier');
    
    if(n<0){
        let moyenne = sommeTotal / i;
        alert('Le nombre d\'entrée est de : ' + i + '\nLa moyenne est de : '+ moyenne)
    }
    do{
        if(Number.isInteger(Number(n))){
            sommeTotal += Number(n);
            i++;
        }else{
            alert('Erreur: vous n\'avez pas rentré un entier')
        }
        n = prompt('Entrez un nombre entier');
    
    }while(n>=0)    
    }