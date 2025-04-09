export default class Character{

    constructor(name, occupation, gold, life, weapon, pouch){
        this.name = name;               // Nombre del personaje
        this.occupation = occupation;   // Profesión del personaje
        this.gold = gold;               // Número de monedas de oro del personaje
        this.life = life;               // Los puntos de vida del personaje.
        this.weapon = weapon;           // Arma equipada. Contrendrá el objeto de la clase Weapon
        this.pouch = pouch;             // Bolsa del equipaje. Contendrá un array de objetos P
    }

    // Simular un ataque de un personaje a otro
    attack(enemy){

        let weaponDamage = 0;
        
        for(let i = 0; i < this.weapon.numDieDamage; i++){
            let d6 = Math.floor(Math.random() * 6) + 1; [0, 5] + 1 --> [1, 6]
            weaponDamage += d6;
        }


        enemy.life -= weaponDamage;
        this.weapon.quality -= 3;

        return weaponDamage;
    }


}