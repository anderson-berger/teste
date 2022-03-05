import Jogador from "./Jogador";
import Mestre from "./Mestre";

export default class Bingo {
  constructor({ local, mestre, jogadores }) {
    this.numeros = [];
    this.local = local;
    this.mestre = mestre;
    this.jogadores = jogadores;
  }

  get ultimoNumeroSorteado(){
      return this.numeros[this.numeros.length -1]
  }

  static comecar() {
    const local = "Botafogo";
    const mestre = new Mestre("Anderson");
    const pedro = new Jogador("pedro")
    pedro.comprarCartela()    
    const luis= new Jogador("luis")
    luis.comprarCartela()
    luis.comprarCartela()

    const jogadores = [pedro,luis ];
    const bingo = new Bingo({ local, mestre, jogadores });
    return bingo;
  }

  comecarPartida() {}

  sortear(){
      
    const numero = Math.floor(Math.random() * 99);
    this.numeros.push(numero); 
  }
}
