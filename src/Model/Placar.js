
export default class Placar{

    constructor(qtdNumeros){
        this.qtdNumeros = qtdNumeros;
        this.qtdTotal = []
        this.contadorNumeros = []
        this.numerosSorteados = [];   
    }

    inicializarPlacar() {
        for(let i=1; i<=this.qtdNumeros; i++){
            this.contadorNumeros.push(i);
            this.qtdTotal.push(i);
        }
    }

    adicionarNumeroSorteado(numero){
        this.numerosSorteados.push(numero);
    }

    get ultimoNumeroSorteado(){
        return this.numerosSorteados[this.numerosSorteados.length - 1];
    }

    sortearNumero(){
        if(this.contadorNumeros.length > 0){
            let aux = Math.floor(Math.random() * this.contadorNumeros.length );
            if(aux < 0){
                aux = 0;
            }
            this.adicionarNumeroSorteado(this.contadorNumeros[aux]);
            this.contadorNumeros.splice(this.contadorNumeros.indexOf(this.contadorNumeros[aux]), 1)
        }
    }
}