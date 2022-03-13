

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
        this.conferirCartelas(cartelas);
    }

    conferirCartelas(cartelas){
        for(let i=0; i< cartelas.length; i++){
            if(this.temGanhador == false){
                this.regrasParaGanharPorColuna(cartelas[i].B);
            }
             if(this.temGanhador === false){
                this.regrasParaGanharPorColuna(cartelas[i].I);
            }
             if(this.temGanhador === false){
                this.regrasParaGanharPorColuna(cartelas[i].N);
            }
            if(this.temGanhador == false){
                this.regrasParaGanharPorColuna(cartelas[i].G);
            }
            if(this.temGanhador == false){
                this.regrasParaGanharPorColuna(cartelas[i].O);
            }
           
        }
        console.log(this.temGanhador)
        if(this.temGanhador === false){
            for(let i=0; i< cartelas.length; i++){
                this.regrasParaGanharPorLinha(cartelas[i].B, cartelas[i].I, cartelas[i].N, cartelas[i].G, cartelas[i].O);
            }
        }
        console.log(this.temGanhador)
        if(this.temGanhador === false){
            for(let i=0; i< cartelas.length; i++){
                this.regrasParaGanharDeCimaParaBaixo(cartelas[i].B, cartelas[i].I, cartelas[i].G, cartelas[i].O);
            }
        }
        console.log(this.temGanhador)
        if(this.temGanhador === false){
            for(let i=0; i< cartelas.length; i++){
                this.regrasParaGanharDeBaixoParaCima(cartelas[i].B, cartelas[i].I, cartelas[i].G, cartelas[i].O);
            }
        }
        console.log(this.temGanhador)
        if(this.temGanhador === true){
            return true
        }
        return false
    }

    regrasParaGanharPorColuna(array){
        this.numerosGanhadores = [];
        for(let i=0; i<array.length;i++){
            if(this.numerosSorteados.indexOf(array[i]) < 0 && array[i] != ""){
                return
            }
            this.numerosGanhadores.push(array[i])
        }
        this.temGanhador = true;
    }
    regrasParaGanharPorLinha(b, i, n, g, o){
        for(let a=0; a<b.length;a++){
            if(!this.temGanhador){
                this.numerosGanhadores = [];
            }else{return}
            if(this.numerosSorteados.indexOf(b[a]) >= 0){
                if(this.numerosSorteados.indexOf(i[a]) >= 0){
                    if(this.numerosSorteados.indexOf(n[a]) >= 0 || this.numerosSorteados.indexOf(n[a]) ==''){
                        if(this.numerosSorteados.indexOf(g[a]) >= 0){
                            if(this.numerosSorteados.indexOf(o[a]) >= 0){
                                this.numerosGanhadores.push(b[a]);
                                this.numerosGanhadores.push(i[a]);
                                this.numerosGanhadores.push(n[a]);
                                this.numerosGanhadores.push(g[a]);
                                this.numerosGanhadores.push(o[a]);
                                this.temGanhador = true;
                                return
                            }
                        }

                    }
                }
            }
        }
    }

    regrasParaGanharDeCimaParaBaixo(b, i, g, o){
        this.numerosGanhadores = [];
        if(this.numerosSorteados.indexOf(b[0]) >= 0){
            if(this.numerosSorteados.indexOf(i[1]) >= 0){
                if(this.numerosSorteados.indexOf(g[3]) >= 0){
                    if(this.numerosSorteados.indexOf(o[4]) >= 0){
                        this.numerosGanhadores.push(b[0]);
                        this.numerosGanhadores.push(i[1]);
                        this.numerosGanhadores.push(g[3]);
                        this.numerosGanhadores.push(o[4]);
                        this.temGanhador = true;
                        return
                    }
                }
            }
        }
    }

    regrasParaGanharDeBaixoParaCima(b, i, g, o){
        this.numerosGanhadores = [];
        if(this.numerosSorteados.indexOf(b[4]) >= 0){
            if(this.numerosSorteados.indexOf(i[3]) >= 0){
                if(this.numerosSorteados.indexOf(g[1]) >= 0){
                    if(this.numerosSorteados.indexOf(o[0]) >= 0){
                        this.numerosGanhadores.push(b[4]);
                        this.numerosGanhadores.push(i[3]);
                        this.numerosGanhadores.push(g[1]);
                        this.numerosGanhadores.push(o[0]);
                        this.temGanhador = true;
                        return
                    }
                }
            }
        }
    }
}