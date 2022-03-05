import Cartela from "./Cartela";
export default class Jogador{

    constructor(nome){
        this.nome=nome
        this.cartelas = []
    }

    comprarCartela() {
        this.cartelas.push(new Cartela())
    }
}