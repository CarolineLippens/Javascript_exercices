function testWhile(){
    do{
        phrase= prompt('inserez une phrase contenant un p');
        
    } while (phrase.indexOf('p') == -1)
    alert (phrase);
}