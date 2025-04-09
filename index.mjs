import {preciousStonesData} from "./data/preciousStones.mjs" 
import { weaponsData } from "./data/weapons.mjs";
import PreciousStone from "./preciousStone.mjs";
import Weapon from "./weapon.mjs";


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


const preciousStones = createPreciousStones();
const weapons = createWeapons();


console.log(weapons);
