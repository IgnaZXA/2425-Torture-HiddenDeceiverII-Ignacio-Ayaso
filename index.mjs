import {preciousStonesData} from "./data/preciousStones.mjs" 
import PreciousStone from "./preciousStone.mjs";



function createPreciousStones(){
    // console.log(preciousStonesData[0]);
    // console.log("-------------------------------");
    const pStoneArray = [];
    for (let i = 0; i < preciousStonesData.length; i++) {
        const actStone = preciousStonesData[i];
        pStoneArray.push(new PreciousStone(actStone.name, actStone.description, actStone.value));
        
    }

   return pStoneArray;
}

const preciousStones = createPreciousStones();


console.log(preciousStones);
