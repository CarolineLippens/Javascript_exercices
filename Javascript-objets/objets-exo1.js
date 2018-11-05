let nbrADeviner;
let Character = {
	name: "Kaito",
	age : 34,
	items_to_give : ["un paquet de frites","une pomme moisie","un écrou trouvé par terre", "un vieux string usagé"],
	weapon : ["Linguee","thompson machine gun of futur","a fucking beautiful smile"],

	//giveItem : function(){	
	//	console.log( character.items_to_give[Math.floor(Math.random()*3)] );	
	//}
	
}
//giveItem()
//console.log(character.items_to_give[Math.floor(Math.random()*3)]); //-> ça marche
getRandomArbitrary = (min, max) => {
return Math.round(Math.random() * (max - min) + min);
}
nbrADeviner = getRandomArbitrary(0, 3);
//console.log(nbrADeviner)

selectObj = () => {
    return console.log(Character.items_to_give[nbrADeviner])
}

console.log("il lui donna") + selectObj()
//
//Crée un tableau avec des objets à vendre (épée, hache, sceptre, etc.)
//
//Caractéristique de chaque objet :
//faire une fonction pour afficher tout les objets
//faire une fonction pour afficher les objets disponibles
//faire une fonction pour afficher les objets dont le niveau minimum est de 10

let shop = {"items_to_sell" :[{
	title: "la tête de poulet maudite",
	physic: 6,
	magic: 27,
	minLevel: 12,
	available: true,
}
,
{
	title: "La hache émoussée pas efficace",
	physic: 13,
	magic: 1,
	minLevel: 3,
	available: true,
}
,
{
	title: "Le chapeau parlant de poudlard",
	physic: 0,
	magic: 36,
	minLevel: 22,
	available: false,
}
,
{
	title: "l'épée qui gueule du Justin Bieber",
	physic: 1,
	magic: 0,
	minLevel: 1,
	available: true,
}
,
{
	title: "le spectre fisteur",
	physic: 65,
	magic: 0,
	minLevel: 45,
	available: false,
}
]
}

let afficher = () => {
for (let i=0; i<shop.length; i++){
	let affiche = "";
	for (let key in shop [i]){
		affiche += '\n' + shop[i][key];
	}

console.log (affiche);

}
}
afficher();



let shoping = () => {
	let disponible;
	for (let i in shop.items_to_sell) {
	disponible = shop.items_to_sell[i].available;
	if (disponible==true) {
	console.log(shop.items_to_sell[i]);
	}
	}
	}
	
	shoping();
	

	let niveau = () => {
		let minimum;
		for (let i in shop.items_to_sell) {
		minimum = shop.items_to_sell[i].minLevel;
		if (minimum>10) {
		console.log(shop.items_to_sell[i]);
		}
		}
		}
		
		niveau();
		

		