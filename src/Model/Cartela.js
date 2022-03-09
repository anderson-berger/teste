import Bingo from "./Bingo";

export default class Cartela{

    constructor(){

        this.qtdNumeroPorColuna = 5;
        this.B = [];
        this.I = [];
        this.N = [];
        this.G = [];
        this.O = [];
    }

    criarCartela(){   
        if(Bingo.qtdNumerosTotal % this.qtdNumeroPorColuna  === 0){ 

            let aux = Bingo.qtdNumerosTotal / this.qtdNumeroPorColuna;
            let max = aux + 1;
            let min = aux - aux + 1;
            this.escolherNumerosAleatorios(this.B, max, min);

             max = aux * 2 + 1;
             min = aux * 2 - aux + 1;
            this.escolherNumerosAleatorios(this.I, max, min);

            max = aux * 3 + 1;
            min = aux * 3 - aux + 1;
            this.escolherNumerosAleatorios(this.N, max, min);

            max = aux * 4 + 1;
            min = aux * 4 - aux + 1;
            this.escolherNumerosAleatorios(this.G, max, min);

            max = aux * 5 + 1;
            min = aux * 5 - aux + 1;
            this.escolherNumerosAleatorios(this.O, max, min);
        } 
    }

    escolherNumerosAleatorios(array, max, min){
        for(let i=0; i<5; i++){
            let aux = Math.floor(Math.random() * (max - min) + min);
            if(array.indexOf(aux) >= 0){
                i--;
            }else{
                array.push(aux)
                console.log(array)
            }  
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