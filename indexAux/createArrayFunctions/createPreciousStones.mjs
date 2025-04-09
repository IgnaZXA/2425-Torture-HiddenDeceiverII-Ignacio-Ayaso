import PreciousStone from "../../preciousStone.mjs";
import {preciousStonesData} from "../../data/preciousStones.mjs" 


/**
 * 
 * @returns 
 */
export function createPreciousStones(){
    const pStoneArray = [];
    for (let i = 0; i < preciousStonesData.length; i++) {
        const actStone = preciousStonesData[i];
        pStoneArray.push(new PreciousStone(actStone.name, actStone.description, actStone.value));
        
    }

   return pStoneArray;
}