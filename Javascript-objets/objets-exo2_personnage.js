
perso = {
	name: "Kaito",
	Level: 32,
	life: 100
}

weapon = {
damage : 236,
name: "épée de l'oeil sec",

}

adversaire = {
	name: Pito,
	Level: 36,
	life: 30000,

	}
weaponadv = {
	damage : 300,
	name : "griffes empoisonnées"
}


	 attack = () => {
	
	let weaponletdamage;
	

	weaponletdamage = (weapon.damage) * (perso.Level);
	console.log(perso.name + " attaque avec l'arme " + weapon.name + ". les dégats sont " + weaponletdamage )
	
	}
	
	attack();
	

	//crée un objet "character" qui possèe le propriétés suivantes :
	//name (string)
	//level (int)
	//life (int)
	//weapon (object)
	//attack (function)
	//receiveDamage (function)
	//l'objet "weapon" possèe les propriétés suivantes :
	//name (string)
	//damage (int)
	//crée un objet "opponentCharacter" a partir de character
	//
	//crée un objet "mainCharacter" a partir de character
	//
	//Appeler la fonction "attack" de "mainCharacter" afin qu'il attaque "opponentCharacter"
	//
	//la fonction doit afficher dans la console (ligne par lige)
	//(le nom du personnage) attaque (nom de l'adversaire)
	//avec l'arme (nom de l'arme)
	//et lui inflige (niveau du personnage multiplié par le damage de l'arme) de dégats
	//(nom de l'adversaire) a maintenant (life de l'adversaire) de vie