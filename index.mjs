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



const preciousStones = createPreciousStones();
const weapons = createWeapons();
const characters = createCharacters(preciousStones, weapons);


// /**
//  * 
//  * @returns 
//  */
// function createPreciousStones(){
//     const pStoneArray = [];
//     for (let i = 0; i < preciousStonesData.length; i++) {
//         const actStone = preciousStonesData[i];
//         pStoneArray.push(new PreciousStone(actStone.name, actStone.description, actStone.value));
        
//     }

//    return pStoneArray;
// }

// /**
//  * 
//  * @returns 
//  */
// function createWeapons(){
//     const weaponsArray = [];
//     for (let i = 0; i < weaponsData.length; i++) {
//         const actWeapon= weaponsData[i];
//         weaponsArray.push(new Weapon(actWeapon.name, actWeapon.description, actWeapon.num_die_damage, actWeapon.type, actWeapon.quality));
        
//     }

//    return weaponsArray;
// }

// function createCharacters(){
//     const charactersArray = [];
//     for (let i = 0; i < charactersData.length; i++) {
//         const actCharacter= charactersData[i];
        
//         const newCharacter = new Character(actCharacter.name, actCharacter.occupation, actCharacter.gold, actCharacter.life, actCharacter.weapon, actCharacter.pouch);
        

        
//         // Equiparle un arma aleatoria al personaje.
//         equipCharacter(newCharacter, charactersArray);

//         // Rellenar bolsa
//         fillPouch(newCharacter);

//         charactersArray.push(newCharacter);
//     }

//    return charactersArray;
// }

// /**
//  * 
//  * @param {*} character 
//  * @param {*} charactersArray 
//  */
// function equipCharacter(character, charactersArray){

//     // 1º Hacer una lista de las armas que han sido equipadas
//     const notEquippedWeapons = [];


//     for(let i = 0; i < weapons.length; i++){
//         notEquippedWeapons.push(weapons[i]);
//     }

//     //Descartar las ya equipadas
//     for(let i = 0; i < notEquippedWeapons.length; i++){
//         const actWeapon = notEquippedWeapons[i];
//         for(let j = 0; j < charactersArray.length; j++){
//             if(actWeapon.name === charactersArray[j].weapon.name){
//                 // Este arma ha sido equipada, se borra de la lista de armas no equipadas
//                 notEquippedWeapons.splice(i, 1);
//             }
//         }
//     }

//     // 2º Teniendo ya la lista de armas a equipar, primero miraremos si en esta lista hay algún arma que pueda equipar el character:
//     const chOccupation = character.occupation.toLowerCase();

//     let canEquipp = false;

//     switch(chOccupation){
//         case("thug"):
//             canEquipp = isAThugWeaponOnArray(notEquippedWeapons);
//         break;

//         case("priest"):
//             canEquipp = isAPriestWeaponOnArray(notEquippedWeapons);

//         break;

//         case("peasant"):
//             canEquipp = isAPeasantWeaponOnArray(notEquippedWeapons);

//         break;
//     }

    
//     // 3º Una vez comprobado que sí hay en la lista algún arama equipable para este character, la buscamos de forma aleatoria.
//     if(canEquipp){
//         let weaponFound = false;
//         while(!weaponFound){
//             let rndWeapon = Math.floor(Math.random() * notEquippedWeapons.length); // [0, n-1] n: length
//             const selectedWeapon = notEquippedWeapons[rndWeapon];
//             const weaponType = selectedWeapon.name.substring( selectedWeapon.name.indexOf(" ") + 1, selectedWeapon.name.length).toLowerCase();

//             switch(chOccupation){

//                 case("thug"):
//                     if(weaponType === "bow" || weaponType === "longbow"){
//                         weaponFound = true;
//                     }
//                 break;
        
//                 case("priest"):
//                     if(selectedWeapon.type.toLowerCase() === "arcane"){
//                         weaponFound = true;
//                     }

//                 break;
        
//                 case("peasant"):
//                     if((weaponType === "wand") && (selectedWeapon.type.toLowerCase() === "common")){
//                         weaponFound = true;
//                     }
//                 break;
//             }


//             if(weaponFound) {
//                 character.weapon = selectedWeapon;
//             }
//         }
//     }
// }

// function isAThugWeaponOnArray(weaponList){
//     for(let i = 0; i < weaponList.length; i++){
//         const typeWeapon = weaponList[i].name.substring( weaponList[i].name.indexOf(" ") + 1, weaponList[i].name.length).toLowerCase();

//         if(typeWeapon === "bow" || typeWeapon === "longbow"){
//             return true;
//         }
//     }   
//     return false;
// }

// function isAPriestWeaponOnArray(weaponList){
//     for(let i = 0; i < weaponList.length; i++){
//         const typeWeapon = weaponList[i].type.toLowerCase();
//         if(typeWeapon === "arcane"){
//             return true;
//         }
//     }   
//     return false;
// }

// function isAPeasantWeaponOnArray(weaponList){
//     for(let i = 0; i < weaponList.length; i++){
//         const weapon = weaponList[i];
//         const typeWeapon = weaponList[i].name.substring( weaponList[i].name.indexOf(" ") + 1, weaponList[i].name.length).toLowerCase();

//         if(typeWeapon === "wand" && (weapon.type.toLowerCase() === "common")){
//             return true;
//         }
//     }   
//     return false;
// }

// /**
//  * 
//  * @param {*} character 
//  */
// function fillPouch(character){

//     const affordableStones = [];

//     //1º Crear lista con referencia a todas las piedras preciosas que inicialmente puede permitirse el character:
//     for(let i = 0; i < preciousStones.length; i++){
//         if(preciousStones[i].value <= character.gold){
//             affordableStones.push(preciousStones[i]);
//         }
//     }

//     //Mejora: Función que busque cual es la piedra con menor valor que se puede permitir el player incluir ese valor como el gold minimo que debe tener el player para comprar una piedra
//     let cheapestStoneValue = preciousStones[0].value;
//     for(let i = 0; i < affordableStones.length; i++){
//         if(affordableStones[i].value < cheapestStoneValue){
//             cheapestStoneValue = affordableStones[i].value;
//         }
//     }


//     // Mientras pueda el character permitirse un tipo de piedra
//     while((affordableStones.length > 0) && (character.gold >= cheapestStoneValue)){
//         // Comprar una piedra
//         let randInd = Math.floor(Math.random() * affordableStones.length);
//         const stoneSelected = affordableStones[randInd];

//         character.pouch.push(new PreciousStone(stoneSelected.name, stoneSelected.description, stoneSelected.value));
//         character.gold -= stoneSelected.value; // El precio a pagar por la piedra

//         // Comprobar si hay algún tipo de piedra que después de comprar una piedra ya no pueda permitirse
//         for (let i = 0; i < affordableStones.length; i++) {
//             const actAffordableStone = affordableStones[i];

//             // Si no se puede permitir esta piedra se borra de las opcciones de compra
//             if(character.gold < actAffordableStone.value){
//                 affordableStones.splice(i, 1);
//                 i--;
//             }
//         }
//     }
// }



// Se mostrará la lista de personajes 
function characterList(){
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


function simulateAttack(){
    console.log("\n\n\n\n\n\nATTACK");

    const charAtt = characters[0];
    const charDef = characters[1];
    
    console.log("ATTACKER:");
    console.log(charAtt.name + " " + charAtt.life + " " + charAtt.weapon.name + " " + charAtt.weapon.numDieDamage + " " + charAtt.weapon.quality);
    
    console.log("DEFENDER:");
    console.log(charDef.name + " " + charDef.life + " " + charDef.weapon.name + " " + charDef.weapon.numDieDamage + " " + charDef.weapon.quality);
    
    console.log("\n\nTHE ATTACK");
    
    charAtt.attack(charDef);
    
    console.log("\n\nAFTER THE ATTACK");
    console.log(charAtt.name + " " + charAtt.life + " " + charAtt.weapon.name + " " + charAtt.weapon.numDieDamage + " " + charAtt.weapon.quality);
    console.log(charDef.name + " " + charDef.life + " " + charDef.weapon.name + " " + charDef.weapon.numDieDamage + " " + charDef.weapon.quality);
}



characterList();

simulateAttack();


