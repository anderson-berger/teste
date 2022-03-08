
import Placar from "./Placar";

export default class Bingo {
  constructor({ placar}) {

    this.placar = placar;
  }

  static comecar() {
    let placar = new Placar(99);
    placar.inicializarPlacar();
    const bingo = new Bingo({placar});
    return bingo;
  }
}
