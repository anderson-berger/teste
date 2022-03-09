
import Placar from "./Placar";
import Jogador from "./Jogador";


export default class Bingo {

  static qtdNumerosTotal = 75;

  constructor({ placar}) {
    this.jogador = [];
    this.placar = placar;
  }

  static comecar() {
    let placar = new Placar(Bingo.qtdNumerosTotal);
    placar.inicializarPlacar();
    const bingo = new Bingo({placar});
    return bingo;
  }

  cadastrarJogador(nome,qtdCartelas){
    this.jogador.push(new Jogador(nome, qtdCartelas))
    console.log("passou aqui")
  }
}
