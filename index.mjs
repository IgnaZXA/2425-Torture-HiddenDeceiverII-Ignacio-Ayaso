import {preciousStonesData} from "./data/preciousStones.mjs" 
import { weaponsData } from "./data/weapons.mjs";
import { charactersData } from "./data/characters.mjs"
import PreciousStone from "./preciousStone.mjs";
import Weapon from "./weapon.mjs";
import Character from "./character.mjs";



const preciousStones = createPreciousStones();
const weapons = createWeapons();
const characters = createCharacters();


/**
 * 
 * @returns 
 */
function createPreciousStones(){
    const pStoneArray = [];
    for (let i = 0; i < preciousStonesData.length; i++) {
        const actStone = preciousStonesData[i];
        pStoneArray.push(new PreciousStone(actStone.name, actStone.description, actStone.value));
        
    }

   return pStoneArray;
}

/**
 * 
 * @returns 
 */
function createWeapons(){
    const weaponsArray = [];
    for (let i = 0; i < weaponsData.length; i++) {
        const actWeapon= weaponsData[i];
        weaponsArray.push(new Weapon(actWeapon.name, actWeapon.description, actWeapon.num_die_damage, actWeapon.type, actWeapon.quality));
        
    }

   return weaponsArray;
}

function createCharacters(){
    const charactersArray = [];
    for (let i = 0; i < charactersData.length; i++) {
        const actCharacter= charactersData[i];
        
        const newCharacter = new Character(actCharacter.name, actCharacter.occupation, actCharacter.gold, actCharacter.life, actCharacter.weapon, actCharacter.pouch);
        
        // Equiparle un arma aleatoria al personaje.
        // equipCharacter(newCharacter, charactersArray);

        // Rellenar bolsa
        fillPouch(newCharacter);
        
        
        charactersArray.push(newCharacter);
    }

   return charactersArray;
}

/**
 * 
 * @param {*} character 
 * @param {*} charactersArray 
 */
function equipCharacter(character, charactersArray){

    // 1º Hacer una lista de las armas que han sido equipadas
    const weaponsEquipped = [];

    for (let i = 0; i < charactersArray.length; i++) {
        const actCharacter = charactersArray[i];
        
        if(actCharacter.weapon !== null){
            weaponsEquipped.push(actCharacter.weapon);
        }
        
    }

    //2º Dependiendo del tipo de character, se podrá escoger un arma u otra no equipada.
    let weaponFound = false;
    let weapon = null;
    while(!weaponFound){
        let randIndex = Math.floor(Math.random(weapons.length));   
        weapon = weapons[randIndex];

        let typeWeapon = weapon.name.substring(weapon.name.indexOf(" ") + 1, weapon.name.length);

        switch(character.occupation.toLowerCase()){
            case("thug"):
                if(typeWeapon.toLowerCase() === "bow" || typeWeapon.toLowerCase() === "longbow"){
                    if(weaponsEquipped.indexOf(weapon) === -1){
                        weaponFound = true;
                    }
                }

            break;

            case("priest"):
                if((weapon.type.toLowerCase() === "arcane")){
                    if(weaponsEquipped.indexOf(weapon) === -1){
                        weaponFound = true;
                    }
                }
            break;

            case("peasant"):
                if( (typeWeapon.toLowerCase() === "wand") && (weapon.type.toLowerCase() === "common")){
                    if(weaponsEquipped.indexOf(weapon) === -1){
                        weaponFound = true;
                    }
                }
            break;
        }
    }

    character.weapon = weapon;
}

/**
 * 
 * @param {*} character 
 */
function fillPouch(character){

    const affordableStones = [];

    //1º Crear lista con referencia a todas las piedras preciosas que inicialmente puede permitirse el character:
    for(let i = 0; i < preciousStones.length; i++){
        if(preciousStones[i].value <= character.gold){
            affordableStones.push(preciousStones[i]);
        }
    }


    //Mejora: Función que busque cual es la piedra con menor valor que se puede permitir el player incluir ese valor como el gold minimo que debe tener el player para comprar una piedra
    let cheaperStoneValue = preciousStones[0].value;
    for(let i = 0; i < affordableStones.length; i++){
        if(affordableStones[i].value < cheaperStoneValue){
            cheaperStoneValue = affordableStones[i].value;
        }
    }


    // Mientras pueda el character permitirse un tipo de piedra
    while((affordableStones.length > 0) && (character.gold >= cheaperStoneValue)){
        // Comprar una piedra
        let randInd = Math.floor(Math.random(affordableStones.length));
        const stoneSelected = affordableStones[randInd];

        // if(character.gold >= stoneSelected.value){
            character.pouch.push(new PreciousStone(stoneSelected.name, stoneSelected.description, stoneSelected.value));
            character.gold -= stoneSelected.value; // El precio a pagar por la piedra
        // }


        // Comprobar si hay algún tipo de piedra que después de comprar una piedra ya no pueda permitirse
        for (let i = 0; i < affordableStones.length; i++) {
            const actAffordableStone = affordableStones[i];

            // Si no se puede permitir esta piedra se borra de las opcciones de compra
            if(character.gold <= actAffordableStone.value){
                affordableStones.splice(i, 1);
            }

        }

    }
}

