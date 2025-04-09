import { weaponsData } from "../../data/weapons.mjs";
import Weapon from "../../weapon.mjs";


/**
 * 
 * @returns 
 */
export function createWeapons(){
    const weaponsArray = [];
    for (let i = 0; i < weaponsData.length; i++) {
        const actWeapon= weaponsData[i];
        weaponsArray.push(new Weapon(actWeapon.name, actWeapon.description, actWeapon.num_die_damage, actWeapon.type, actWeapon.quality));
        
    }

   return weaponsArray;
}