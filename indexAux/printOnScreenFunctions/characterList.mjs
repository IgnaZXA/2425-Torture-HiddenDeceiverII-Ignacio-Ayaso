

// Se mostrará la lista de personajes 
export function characterList(characters){
    console.log("CHARACTERS LIST: ");
    console.log("----------------")
    for(let i = 0; i < characters.length; i++){
        const actChar = characters[i];
        console.log(actChar.name + "\n----------------");
        console.log("Occupation: " + actChar.occupation);
        console.log("Gold: " + actChar.gold + "\n---------" );
        console.log("weapon" + "\n------");
        //Cuando este el arma
        console.log("Name: " + actChar.weapon.name);
        console.log("Description: " + actChar.weapon.description);
        console.log("Num dies of damage: " + actChar.weapon.numDieDamage);
        console.log("Type: " + actChar.weapon.type);
        console.log("Quality: " + actChar.weapon.quality);

        ///////
        console.log("------" + "\npouch" + "\n------");
        for(let j = 0; j < actChar.pouch.length; j++){
            const actGem = actChar.pouch[j];
            console.log(actGem.name + ": " + actGem.value + " coins.");
        }
        console.log("\n");

    }

}