let conversionTemperature= () => {
    let reponse = prompt("\n0.Fin du programme"+
                         "\n1.De Celsius vers Fahrenheit"+
                        "\n2.De Celsius vers Kelvin"+
                        "\n3.De Fahrenheit vers Celsius"+
                        "\n4.De Fahrenheit vers Kelvin"+
                        "\n5.De Kelvin vers Celsius"+
                        "\n6.De Kelvin vers Fahrenheit");
    let chiffre = prompt("entrez votre le nombre à convertir");
    switch(reponse){
    case'1':
    result1= (chiffre * 9.5) +32;
    alert(result1);
    break;
    case'2':
    result2= (chiffre) + 273.15
    alert(result2);
    break;
    case'3':
    result3= (chiffre - 32) / (9/5);
    alert(result3);
    break;
    case'4':
    result4= ((chiffre-32) * (5*9)) + 273.15;
    alert(result4);
    break;
    case'5':
    result5= chiffre-273.15;
    alert(result5);
    break;
    case'6':
    result6= (chiffre*9/5)-459.67;
    alert(result6);
    break;
    default:
    alert("wtf man");
                   
    }
    }

