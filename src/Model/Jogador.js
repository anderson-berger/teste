import Cartela from "./Cartela";
export default class Jogador{

    static ID = 0;

    constructor(nome){
        Jogador.ID++;
        this.id = Jogador.ID; 
        this.nome=nome
        this.cartelas = []
    }

    comprarCartela() {
        this.cartelas.push(new Cartela())
    }
}