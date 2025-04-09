export default class Character{

    constructor(name, occupation, gold, life, weapon, pouch){
        this.name = name;               // Nombre del personaje
        this.occupation = occupation;   // Profesión del personaje
        this.gold = gold;               // Número de monedas de oro del personaje
        this.life = life;               // Los puntos de vida del personaje.
        this.weapon = weapon;           // Arma equipada. Contrendrá el objeto de la clase Weapon
        this.pouch = pouch;             // Bolsa del equipaje. Contendrá un array de objetos P
    }
}