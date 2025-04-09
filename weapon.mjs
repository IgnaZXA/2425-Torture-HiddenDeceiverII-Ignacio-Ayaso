export default class Weapon{
    constructor(name, description, numDieDamage, type, quality){
        this.name = name;                   // Nombre del arma
        this.description = description;     // Descripcción del arma
        this.numDieDamage = numDieDamage;   // El daño del arma en número de dados
        this.type = type;                   // El tipo de arma: común o arcana
        this.quality = quality;             // calidad del arma
    }
}