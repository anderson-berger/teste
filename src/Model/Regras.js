

export default class Regras {
  
    constructor() { 
        this.numerosSorteados = [];
        this.temGanhador = false;
        this.numerosGanhadores = [];  
    }

    conferirCartelasDoJogador(numeroSorteado, jogador){
        
        if(this.numerosSorteados.indexOf(numeroSorteado) < 0){
            this.numerosSorteados.push(numeroSorteado);
        }
        let cartelas = jogador.cartelas;

        for(let i=0; i<cartelas.length; i++){
            this.conferirCartela(cartelas[i]);
        }
        
        
        
    }

    conferirCartela(cartela){
        if(this.temGanhador == false){
            this.regrasParaGanharPorColuna(cartela.B);
        }
         if(this.temGanhador === false){
            this.regrasParaGanharPorColuna(cartela.I);
        }
         if(this.temGanhador === false){
            this.regrasParaGanharPorColuna(cartela.N);
        }
        if(this.temGanhador == false){
            this.regrasParaGanharPorColuna(cartela.G); 
        }
        if(this.temGanhador == false){
            this.regrasParaGanharPorColuna(cartela.O); 
        }

        if(this.temGanhador === false){
            for(let i=0; i< cartela.B.length; i++){
                this.regrasParaGanharPorLinha(cartela);
            }
        }

        if(this.temGanhador === false){
            this.regrasParaGanharDeCimaParaBaixo(cartela);
        }

        if(this.temGanhador === false){
            this.regrasParaGanharDeBaixoParaCima(cartela);
        }
    }

    regrasParaGanharPorColuna(array){
        this.numerosGanhadores = [];
        for(let a=0; a<array.length;a++){
            if(this.numerosSorteados.indexOf(array[a] + "") < 0 && array[a] != null){
                return;
            }
            if(array[a] != null){
                this.numerosGanhadores.push(array[a]);
            }
        }
        this.temGanhador = true;
    }

    regrasParaGanharPorLinha(cartela){
        for(let a=0; a<cartela.B.length;a++){
            if(!this.temGanhador){
                this.numerosGanhadores = [];
            }else{return}
            if(this.numerosSorteados.indexOf(cartela.B[a] + "") >= 0){
                if(this.numerosSorteados.indexOf(cartela.I[a] + "") >= 0){
                    console.log()
                    if(this.numerosSorteados.indexOf(cartela.N[a] + "") >= 0 || this.numerosSorteados.indexOf(cartela.N[a] + "") === "" || cartela.N[a] == null){
                        if(this.numerosSorteados.indexOf(cartela.G[a] + "") >= 0){
                            if(this.numerosSorteados.indexOf(cartela.O[a] + "") >= 0){
                                this.numerosGanhadores.push(cartela.B[a] + "");
                                this.numerosGanhadores.push(cartela.I[a] + "");
                                if(cartela.N[a] != null){
                                    this.numerosGanhadores.push(cartela.N[a] + "");
                                }
                                this.numerosGanhadores.push(cartela.G[a] + "");
                                this.numerosGanhadores.push(cartela.O[a] + "");
                                this.temGanhador = true;
                                return
                            }
                        }

                    }
                }
            }
        }
    }
    regrasParaGanharDeCimaParaBaixo(cartela){
        console.log("entrou")
        this.numerosGanhadores = [];
        if(this.numerosSorteados.indexOf(cartela.B[0] + "") >= 0) {
            console.log("B");
            if(this.numerosSorteados.indexOf(cartela.I[1] + "") >= 0){
                console.log("I");
                if(this.numerosSorteados.indexOf(cartela.G[3] + "") >= 0){
                    console.log("G");
                    if(this.numerosSorteados.indexOf(cartela.O[4] + "") >= 0){
                        console.log("O");
                        this.numerosGanhadores.push(cartela.B[0]);
                        this.numerosGanhadores.push(cartela.I[1]);
                        this.numerosGanhadores.push(cartela.G[3]);
                        this.numerosGanhadores.push(cartela.O[4]);
                        this.temGanhador = true;
                        return
                    }
                }
            }
        }
    } 
    
    regrasParaGanharDeBaixoParaCima(cartela){
        console.log("entrou")
        this.numerosGanhadores = [];
        if(this.numerosSorteados.indexOf(cartela.B[4] + "") >= 0) {
            console.log("B");
            if(this.numerosSorteados.indexOf(cartela.I[3] + "") >= 0){
                console.log("I");
                if(this.numerosSorteados.indexOf(cartela.G[1] + "") >= 0){
                    console.log("G");
                    if(this.numerosSorteados.indexOf(cartela.O[0] + "") >= 0){
                        console.log("O");
                        this.numerosGanhadores.push(cartela.B[4]);
                        this.numerosGanhadores.push(cartela.I[3]);
                        this.numerosGanhadores.push(cartela.G[1]);
                        this.numerosGanhadores.push(cartela.O[0]);
                        this.temGanhador = true;
                        return
                    }
                }
            }
        }
    }    
}