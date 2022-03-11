import Bingo from "./Bingo";

export default class Placar {

    constructor() {
        /*this.qtdNumeros = qtdNumeros;
        this.qtdTotal = []
        this.contadorNumeros = []
        this.numerosSorteados = [];*/
        this.letras = ["B", "I", "N", "G", "O"]
        this.B = [];
        this.I = [];
        this.N = [];
        this.G = [];
        this.O = [];

    }

    inicializarPlacar() {
        if (Bingo.qtdNumerosTotal % 5 === 0) {
            for (let i = 1; i < Bingo.qtdNumerosTotal + 1; i++) {
                if (this.B.length < (Bingo.qtdNumerosTotal / 5)) {
                    this.B.push(i)
                } else if (this.I.length < (Bingo.qtdNumerosTotal / 5)) {
                    this.I.push(i)
                } else if (this.N.length < (Bingo.qtdNumerosTotal / 5)) {
                    this.N.push(i)
                } else if (this.G.length < (Bingo.qtdNumerosTotal / 5)) {
                    this.G.push(i)
                }else if (this.O.length < (Bingo.qtdNumerosTotal / 5)) {
                    this.O.push(i)
                }
            }
            console.log("B " + this.B)
            console.log("I " + this.I)
            console.log("N " + this.N)
            console.log("G " + this.G)
            console.log("O " + this.O)
        }
    }
}

/*adicionarNumeroSorteado(numero){
    this.numerosSorteados.push(numero);
}

    get ultimoNumeroSorteado(){
    return this.numerosSorteados[this.numerosSorteados.length - 1];
}

sortearNumero(){
    if (this.contadorNumeros.length > 0) {
        let aux = Math.floor(Math.random() * this.contadorNumeros.length);
        if (aux < 0) {
            aux = 0;
        }
        this.adicionarNumeroSorteado(this.contadorNumeros[aux]);
        this.contadorNumeros.splice(this.contadorNumeros.indexOf(this.contadorNumeros[aux]), 1)
    }
}
}*/