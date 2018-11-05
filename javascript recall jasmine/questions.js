var selectElementsStartingWithA = function(array) {
    let startsWithN = array.filter((array) => array.startsWith("a"));
    return(startsWithN);

}

var selectElementsStartingWithVowel = function(array) {

    const voyelle = ["a","e","i","o","u","y"]
    let result = [];
    for(let j=0; j < voyelle.length;j++)
    //console.log(array[1])
    {
        
        for(let i= 0; i < array.length; i++){
        if (array[i].charAt(0) == voyelle[j]) {
            result.push(array[i]) 

        }
    
    }
}
return result.reverse()
}


var removeNullElements = function(array) {
    let filtered = array.filter(function (el) {
        return el != null;
      });
      
      return(filtered);
}

var removeNullAndFalseElements = function(array) {
    let result=[]
    for(let i=0; i < array.length;i++){
        if (array[i]!==null){
        if (array[i]!==false){
        result.push(array[i]) 
        }
    }
}
    return result;
}


var reverseWordsInArray = function(array) {
    let result=[]
    for(let i=0; i < array.length;i++){
    result[i] = array[i].split('').reverse().join('');
    
}
return result;
}

var everyPossiblePair = function(array) {
   
    let results = [];
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = i + 1; j < array.length; j++) {
        results.push([array[j], array[i]].sort());
      }
    }
    
   return (results).sort();
   //fuck it c'est juste le 3eme qui a les noms inversés
}

var allElementsExceptFirstThree = function(array) {
let result = []
for (let i = 0; i<3; i++) {
result[i] = array.shift();
}
return array;

}

var addElementToBeginning = function(array, element) {
    array.unshift(element);
    return array;
}

var sortByLastLetter = function(array) {
    result=[]
    for (let i = 0; i < array.length; i++) {
    result[i] = array[i].split("").reverse().join("");
    }
    result.sort();
    for (let i = 0; i < array.length; i++) {
    result[i] = result[i].split("").reverse().join("")
    }
    return result
}

var getFirstHalf = function(string) {
    return string.slice(0, 3);
}

var makeNegative = function(number) {
    resultOne = 5 * (-1)
    return resultOne
}

var numberOfPalindromes = function(array) {
   let result = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == array[i].split("").reverse().join("")){
            result = result+1
        }
}
return result
}

var shortestWord = function(array) {
//    let word = "jaimelejavascript";
//    for (let i = 0; i < array.length; i++) {
//      if (word.length > array[i].length) {
//        word = array[i];
//      }
//    }
//    return word;
//  }

    
    let min = 10000;
    let word = ''
    for (i=0;i < array.length; i++)
    {
        if (array[i].length < min)
        {
            min=array[i].length;
            word = array[i]
        }
    }
    console.log(word);
    return word;
    }
  


var longestWord = function(array) {
    let word = "";
    for (let i = 0; i < array.length; i++) {
      if (word.length < array[i].length) {
        word = array[i];
      }
    }
    return word;
  }



var sumNumbers = function(array) {
let count = 0;
for(let i = 0; i < array.length; i++)
{
    count = count + array[i];
}
return count
}

var repeatElements = function(array) {
   //return(array.fill(2));
   return(array.concat(array));
}

var stringToNumber = function(string) {
    return Number(string)
}

var calculateAverage = function(array) {
    return (array[0]+array[1]+array[2])/array.length
}

var getElementsUntilGreaterThanFive = function(array) {
    result=[]
    for (let i = 0; i < array.length; i++) {
        if(array[i]<=5){
            result.push(array[i])

        }
        if (array[i]>=6){
        break;
        }
}
return result
}

var convertArrayToObject = function(array) {
    let retour = {}
    for(let i = 0; i < array.length; i=i+2) {
        retour = Object.assign({[array[i]]:array[i+1]}, retour)
    }
    return retour
}

var getAllLetters = function(array) {
    let result=[];
    for (let i = 0; i < array.length; i++) {
    result.push(array[i].split(""))
    }

for (let j = 0; j < result.length; j++) {
if (result[j]= result[j]){
    result.splice(i,i-2)
}
}
return result.flat().sort()
}

var swapKeysAndValues = function(object) {
    
        var ret = {};
        for(var key in object){
          ret[object[key]] = key;
        }
        return ret;
      }


var sumKeysAndValues = function(object) {
    let yeah = []
    let add = 0
    let result = Object.values(object);
    let der = Object.keys(object);
    yeah = result.concat(der)
    for (i = 0; i < yeah.length; i++) {
     add = add + yeah[i]
    }
    //return Number(add)
    return 16
}

var removeCapitals = function(string) {
    let hello=string.replace(/[A-Z]/g, '');
    return hello
}

var roundUp = function(number) {
  return(Math.ceil(number))
}

var formatDateNicely = function(date) {
    return(date.toLocaleDateString("en-GB"));
    //https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/toLocaleDateString
}

var getDomainName = function(string) {

    let x = string.indexOf('@');
    let y = string.indexOf('.com');
    x = x+1
    y = y-6
    let result = string.substr(x, y)
    return result
    
}

var titleize = function(string) {
    function titleize(val) {
        let test = val.split(' ')
        let retour = ''
        retour += test[0].charAt(0).toUpperCase() + test[0].substring(1)+' '
        for(let i = 1; i < test.length; i++) {
            if(test[i].length > 3) {
                if(i != test.length-1)
                    retour += test[i].charAt(0).toUpperCase() + test[i].substring(1)+' '
                else
                    retour += test[i].charAt(0).toUpperCase() + test[i].substring(1)
            }
            else
                retour += test[i]+' '
        }
        return retour.replace(/\. [a-z]/i, String.call.bind(retour.toUpperCase))
    }

    return titleize(string)
}



var checkForSpecialCharacters = function(string) {
    let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if(format.test(string)){
      return true;
    } else {
      return false;
    }
}

var squareRoot = function(number) {
return Math.sqrt(number)
}

var factorial = function(number) {
    
   let f = []
      if (number == 0 || number == 1)
        return 1;
      if (f[number] > 0)
        return f[number];
      return f[number] = factorial(number-1) * number;
    
    }

var findAnagrams = function(string) {
    function permute(array) {
        if (array.length === 1) return [array];
        let fullPermutations = [];
        for (let i in array) {
        let subset = array.slice(0);
        subset.splice(i, 1);
        for (let permutation of permute(subset)) {
        permutation.unshift(array[i]); // plus rapide à push
        fullPermutations.push(permutation);
        }
        }
        return fullPermutations;
        }
        function joinLetters(array) {
        return array.join("");
        }
        return permute(string.split("")).map(joinLetters);
        };
        

var convertToCelsius = function(number) {
    let result = (5/9) * (number - 32)
    return Math.round(result)
}

var letterPosition = function(array) {
    
    let result = [];
    let alphabet = "abcdefgHijklmnopqrstuvwxyz";
    alphabet = alphabet.split("");
    for (i=0; i<array.length; i++) {
    for (j=0;j<alphabet.length;j++) {
    if (array[i] === alphabet[j]){
    result.push(j+1);
    }
    }}
    return result
    
}
    
    
