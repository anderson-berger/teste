export default class Cartela{

    constructor(qtdNumerosTotal){

        this.qtdNumerosTotal = qtdNumerosTotal ;
        this.qtdNumeroPorColuna = 5;
        this.B = [];
        this.I = [];
        this.N = [];
        this.G = [];
        this.O = [];
    }

    criarCartela(qtdTotal){
        if(qtdTotal % this.qtdNumeroPorColuna  === 0){
            let aux = this.qtdTotal / this.qtdNumeroPorColuna;
            let max = aux + 1;
            let min = aux - aux;
            this.escolherNumerosAleatorios(this.B, max, min);

             max = aux * 2 + 1;
             min = aux * 2 - aux;
            this.escolherNumerosAleatorios(this.I, aux);

            max = aux * 3 + 1;
            min = aux * 3 - aux;
            this.escolherNumerosAleatorios(this.N, aux);

            max = aux * 4 + 1;
            min = aux * 4 - aux;
            this.escolherNumerosAleatorios(this.G, aux);

            max = aux * 5 + 1;
            min = aux * 5 - aux;
            this.escolherNumerosAleatorios(this.O, aux);
        } 
    }

    escolherNumerosAleatorios(array, max, min){
        for(let i=0; i<5; i++){
            this.B.push(Math.floor(Math.random() * (max - min) + min))
        }
    }


    /*criarCartela(qtdTotal){
        if(qtdTotal % 5 === 0){
            for(let i=qtdTotal; i>0; i--){
                this.O.push(i);
                if(this.O.length() < (qtdTotal/5)){
                    if(this.O.length <= 5){
                        this.O.push(i)
                    }
                }else  if(this.G.length() < (qtdTotal/5)){
                    if(this.G.length <= 5){
                        this.G.push(i)
                    }
                }else  if(this.N.length() < (qtdTotal/5)){
                    if(this.N.length <= 5){
                        this.N.push(i)
                    }
                }else  if(this.I.length() < (qtdTotal/5)){
                    if(this.I.length <= 5){
                        this.I.push(i)
                    }
                }else  if(this.B.length() < (qtdTotal/5)){
                    if(this.B.length <= 5){
                        this.B.push(i)
                    }
                }
            }
        }
    }*/
    
}