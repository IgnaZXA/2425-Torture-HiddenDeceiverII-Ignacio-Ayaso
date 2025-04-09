import {preciousStonesData} from "./data/preciousStones.mjs" 
import { weaponsData } from "./data/weapons.mjs";
import { charactersData } from "./data/characters.mjs"
import PreciousStone from "./preciousStone.mjs";
import Weapon from "./weapon.mjs";
import Character from "./character.mjs";
//Funciones de index en otros scripts
import { createPreciousStones } from "./indexAux/createArrayFunctions/createPreciousStones.mjs";
import { createWeapons } from "./indexAux/createArrayFunctions/createWeapons.mjs";
import { createCharacters } from "./indexAux/createArrayFunctions/createCharacters.mjs";
import { characterList } from "./indexAux/printOnScreenFunctions/characterList.mjs";
import { simulateAttack } from "./indexAux/printOnScreenFunctions/simulateAttack.mjs";



const preciousStones = createPreciousStones();
const weapons = createWeapons();
const characters = createCharacters(preciousStones, weapons);



// // Se mostrará la lista de personajes 
// function characterList(){
//     console.log("CHARACTERS LIST: ");
//     console.log("----------------")
//     for(let i = 0; i < characters.length; i++){
//         const actChar = characters[i];
//         console.log(actChar.name + "\n----------------");
//         console.log("Occupation: " + actChar.occupation);
//         console.log("Gold: " + actChar.gold + "\n---------" );
//         console.log("weapon" + "\n------");
//         //Cuando este el arma
//         console.log("Name: " + actChar.weapon.name);
//         console.log("Description: " + actChar.weapon.description);
//         console.log("Num dies of damage: " + actChar.weapon.numDieDamage);
//         console.log("Type: " + actChar.weapon.type);
//         console.log("Quality: " + actChar.weapon.quality);

//         ///////
//         console.log("------" + "\npouch" + "\n------");
//         for(let j = 0; j < actChar.pouch.length; j++){
//             const actGem = actChar.pouch[j];
//             console.log(actGem.name + ": " + actGem.value + " coins.");
//         }
//         console.log("\n");

//     }

// }


// function simulateAttack(){
//     console.log("\n\n\n\n\n\nATTACK");

//     const charAtt = characters[0];
//     const charDef = characters[1];
    
//     console.log("ATTACKER:");
//     console.log(charAtt.name + " " + charAtt.life + " " + charAtt.weapon.name + " " + charAtt.weapon.numDieDamage + " " + charAtt.weapon.quality);
    
//     console.log("DEFENDER:");
//     console.log(charDef.name + " " + charDef.life + " " + charDef.weapon.name + " " + charDef.weapon.numDieDamage + " " + charDef.weapon.quality);
    
//     console.log("\n\nTHE ATTACK");
    
//     charAtt.attack(charDef);
    
//     console.log("\n\nAFTER THE ATTACK");
//     console.log(charAtt.name + " " + charAtt.life + " " + charAtt.weapon.name + " " + charAtt.weapon.numDieDamage + " " + charAtt.weapon.quality);
//     console.log(charDef.name + " " + charDef.life + " " + charDef.weapon.name + " " + charDef.weapon.numDieDamage + " " + charDef.weapon.quality);
// }



characterList(characters);

simulateAttack(characters);


