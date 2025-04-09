



export function simulateAttack(characters){
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
