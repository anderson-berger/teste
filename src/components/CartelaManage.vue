<template>
  <div>
      <div class="alinhar-cartelas" v-for="(cartela, index ) in cartelas" v-bind:key="index">
        <table class="cartela">
            <tr>
                <th class="thBingo">B</th>
                <th class="thBingo">I</th>
                <th class="thBingo">N</th>
                <th class="thBingo">G</th>
                <th class="thBingo">O</th>
            </tr>
            <tr>
                <td id = "1">{{cartela.B[0]}}</td>
                <td id = "6">{{cartela.I[0]}}</td>
                <td id = "11">{{cartela.N[0]}}</td>
                <td id = "16">{{cartela.G[0]}}</td>
                <td id = "21">{{cartela.O[0]}}</td>
            </tr>
            <tr>
                <td id = "2">{{cartela.B[1]}}</td>
                <td id = "7">{{cartela.I[1]}}</td>
                <td id = "12">{{cartela.N[1]}}</td>
                <td id = "17">{{cartela.G[1]}}</td>
                <td id = "22">{{cartela.O[1]}}</td>
            </tr>
            <tr>
                <td id = "3">{{cartela.B[2]}}</td>
                <td id = "8">{{cartela.I[2]}}</td>
                <td id = "13">FREE</td>
                <td id = "18">{{cartela.G[2]}}</td>
                <td id = "23">{{cartela.O[2]}}</td>
            </tr>
            <tr>
                <td id = "4">{{cartela.B[3]}}</td>
                <td id = "9">{{cartela.I[3]}}</td>
                <td id = "14">{{cartela.N[3]}}</td>
                <td id = "19">{{cartela.G[3]}}</td>
                <td id = "24">{{cartela.O[3]}}</td>
            </tr>
            <tr>
                <td id = "5">{{cartela.B[4]}}</td>
                <td id = "10">{{cartela.I[4]}}</td>
                <td id = "15">{{cartela.N[4]}}</td>
                <td id = "20">{{cartela.G[4]}}</td>
                <td id = "25">{{cartela.O[4]}}</td>
            </tr>
        </table>
      </div>
        </div>
</template>

<script>

export default {
  name: "CartelaManage",
  props: {cartelas : [],
  ultimoNumeroSorteado: Number,
  letraSorteada:String, 
  },

 data() {
    return {
      
    };
  },
   watch:{
   numeroSorteado(){

   }
  },
 
    methods:{
        marcaNumeroSorteado(){
        switch (this.letraSorteada){
            case 'B':
                for(let i=0; i< this.cartelas.length; i++){
                    
                }
            break;
            case 'I':

            break;
            case 'N':

            break;
            case 'G':

            break;
            case 'O':

            break;
            default :
            console.log("No case")
        }
    },
}
}
</script>

<style>

.thBingo {
    background: #808080;
    color:white;
    border: 2px solid black;
}

th{
    border: 2px solid;
    max-width: 69px;
    min-width: 69px;
}

#B {
    border: 2px solid;    
}

.cartela {
    margin-bottom: 10px;
    margin-left: 10px;
}

.card-img-left {
    max-height: 300px;
}

.alinhar-cartelas {
    float: left;
}

</style>