
import Placar from "./Placar";
import Jogador from "./Jogador";
import Regras from "./Regras";
import Ganhador from "./Ganhador";


export default class Bingo {

  static qtdNumerosTotal = 75;

  constructor() {
    this.jogadores = [];
    this.placar = null;
    this.regras = null;
    this.ganhador = null;
  }

  static comecar() {
    
    const bingo = new Bingo();
    bingo.regras = new Regras();
    return bingo;
  }

  instanciarPlacar(){
    let placar = new Placar();
    placar.inicializarPlacar();
    this.placar = placar;
}

  cadastrarJogador(nome,qtdCartelas){
   let aux = new Jogador(nome, qtdCartelas)
   aux.inicializarCartelas(qtdCartelas);
   this.jogador.push(aux)
  }

  conferirVencedor(numeroSorteado){
    for(let i=0; i< this.jogadores.length; i++){
      this.regras.conferirCartelasDoJogador(numeroSorteado, this.jogadores[i]);
      
      if(this.regras.temGanhador === true){
        this.ganhador = new Ganhador(this.jogadores[i].nome, this.regras.numerosGanhadores)
        i = this.jogadores.length;
      }
    }
   
  }
}


