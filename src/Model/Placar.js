import Bingo from "./Bingo";

export default class Placar {

    constructor() {

        this.letras = ["B", "I", "N", "G", "O"]
        this.B = [];
        this.I = [];
        this.N = [];
        this.G = [];
        this.O = [];
        this.numeroSorteado = [];
        this.letraSorteada = null;
        this.ultimoNumeroSorteado = null;

    }

    inicializarPlacar() {
        if (Bingo.qtdNumerosTotal % 5 === 0) {
            for (let i = 1; i < Bingo.qtdNumerosTotal + 1; i++) {
                if (this.B.length < (Bingo.qtdNumerosTotal / 5)) {
                    this.B.push(i);
                    this.numeroSorteado.push(i);
                } else if (this.I.length < (Bingo.qtdNumerosTotal / 5)) {
                    this.I.push(i);
                    this.numeroSorteado.push(i);
                } else if (this.N.length < (Bingo.qtdNumerosTotal / 5)) {
                    this.N.push(i);
                    this.numeroSorteado.push(i);
                } else if (this.G.length < (Bingo.qtdNumerosTotal / 5)) {
                    this.G.push(i);
                    this.numeroSorteado.push(i);
                } else if (this.O.length < (Bingo.qtdNumerosTotal / 5)) {
                    this.O.push(i);
                    this.numeroSorteado.push(i);
                }
            }
        }
    }

    sortearNumero() {
        if (this.numeroSorteado.length > 0) {
            let aux = Math.floor(Math.random() * this.numeroSorteado.length );
            if (aux < 0) {
                aux = 0;
            }
            this.ultimoNumeroSorteado = this.numeroSorteado[aux];
            this.letraDoNumero(this.ultimoNumeroSorteado);
            this.numeroSorteado.splice(this.numeroSorteado.indexOf(this.ultimoNumeroSorteado), 1);
        }
    }
    
    letraDoNumero(nSorteado){
        if(nSorteado <= Bingo.qtdNumerosTotal / 5){
            this.letraSorteada = "B";
        }else if(nSorteado > Bingo.qtdNumerosTotal / 5 && nSorteado <= Bingo.qtdNumerosTotal / 5 * 2 ){
            this.letraSorteada = "I";
        }else if(nSorteado > Bingo.qtdNumerosTotal / 5 * 2 && nSorteado <= Bingo.qtdNumerosTotal / 5 * 3 ){
            this.letraSorteada = "N";
        }else if(nSorteado > Bingo.qtdNumerosTotal / 5 * 3 && nSorteado <= Bingo.qtdNumerosTotal / 5 * 4 ){
            this.letraSorteada = "G";
        }else if(nSorteado > Bingo.qtdNumerosTotal / 5 * 4  && nSorteado <= Bingo.qtdNumerosTotal  ){
            this.letraSorteada = "O";
        }
    }
}