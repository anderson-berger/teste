import Bingo from "./Bingo";
import Cartela from "./Cartela";
export default class Jogador{

    static ID = 0;

    constructor(nome, qtd){
        Jogador.ID++;
        this.qtdCartelas = qtd;
        this.id = Jogador.ID; 
        this.nome=nome
        this.cartelas = []
    }

    comprarCartela() {
        this.cartelas.push(new Cartela())
    }

    inicializarCartelas(qtd){
        for(let i=0; i<qtd; i++){
            let cartela = new Cartela(Bingo.qtdNumerosTotal);
            cartela.criarCartela
            this.cartelas.push(cartela)
            console.log(cartela);
        }
        
    }
}