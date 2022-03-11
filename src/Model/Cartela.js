import Bingo from "./Bingo";

export default class Cartela {

    constructor() {
        this.B = [];
        this.I = [];
        this.N = [];
        this.G = [];
        this.O = [];
    }

    criarCartela() {
        let qtdNumeroPorColuna = 5;
        if (Bingo.qtdNumerosTotal % qtdNumeroPorColuna === 0) {

            let aux = Bingo.qtdNumerosTotal / qtdNumeroPorColuna;
            let max = aux + 1;
            let min = aux - aux + 1;
            this.escolherNumerosAleatorios(this.B, max, min);

            max = aux * 2 + 1;
            min = aux * 2 - aux + 1;
            this.escolherNumerosAleatorios(this.I, max, min);

            max = aux * 3 + 1;
            min = aux * 3 - aux + 1;
            this.escolherNumerosAleatorios(this.N, max, min);
            this.espacoEmBranco(this.N)

            max = aux * 4 + 1;
            min = aux * 4 - aux + 1;
            this.escolherNumerosAleatorios(this.G, max, min);

            max = aux * 5 + 1;
            min = aux * 5 - aux + 1;
            this.escolherNumerosAleatorios(this.O, max, min);
        }
    }

    escolherNumerosAleatorios(array, max, min) {
        for (let i = 0; i < 5; i++) {
            let aux = Math.floor(Math.random() * (max - min) + min);
            if (array.indexOf(aux) >= 0) {
                i--;
            } else {
                array.push(aux)
            }
        }
    }

    espacoEmBranco(array) {
        array[2] = null;
    }

     desenharCartela  ()  {
        return <div>
        <table>
            <tr>
                <th>B</th>
                <th>I</th>
                <th>N</th>
                <th>G</th>
                <th>O</th>
            </tr>
            <tr>
                <td id = "B">${this.B[0]}</td>
                <td id = "B">${this.B[1]}</td>
                <td id = "B">${this.B[2]}</td>
                <td id = "B">${this.B[3]}</td>
                <td id = "B">${this.B[4]}</td>
            </tr>
            <tr>
                <td id = "B">${this.I[0]}</td>
                <td id = "B">${this.I[1]}</td>
                <td id = "B">${this.I[2]}</td>
                <td id = "B">${this.I[3]}</td>
                <td id = "B">${this.I[4]}</td>
            </tr>
            <tr>
                <td id = "B">${this.N[0]}</td>
                <td id = "B">${this.N[1]}</td>
                <td id = "B">${this.N[2]}</td>
                <td id = "B">${this.N[3]}</td>
                <td id = "B">${this.N[4]}</td>
            </tr>
            <tr>
                <td id = "B">${this.G[0]}</td>
                <td id = "B">${this.G[1]}</td>
                <td id = "B">${this.G[2]}</td>
                <td id = "B">${this.G[3]}</td>
                <td id = "B">${this.G[4]}</td>
            </tr>
            <tr>
                <td id = "B">${this.O[0]}</td>
                <td id = "B">${this.O[1]}</td>
                <td id = "B">${this.O[2]}</td>
                <td id = "B">${this.O[3]}</td>
                <td id = "B">${this.O[4]}</td>
            </tr>
        </table>
        <br></br>
        </div>
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