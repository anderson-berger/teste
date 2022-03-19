<template>
  <div>
      <div class="alinhar-cartelas">
        <table class="cartela">
            <tr>
                <th class="thBingo">B</th>
                <th class="thBingo">I</th>
                <th class="thBingo">N</th>
                <th class="thBingo">G</th>
                <th class="thBingo">O</th>
            </tr>
            <tr>
                <td :class="`${cartela.B[0]}`">{{cartela.B[0]}}</td>
                <td :class="`${cartela.I[0]}`">{{cartela.I[0]}}</td>
                <td :class="`${cartela.N[0]}`">{{cartela.N[0]}}</td>
                <td :class="`${cartela.G[0]}`">{{cartela.G[0]}}</td>
                <td :class="`${cartela.O[0]}`">{{cartela.O[0]}}</td>
            </tr>
            <tr>
                <td :class="`${cartela.B[1]}`">{{cartela.B[1]}}</td>
                <td :class="`${cartela.I[1]}`">{{cartela.I[1]}}</td>
                <td :class="`${cartela.N[1]}`">{{cartela.N[1]}}</td>
                <td :class="`${cartela.G[1]}`">{{cartela.G[1]}}</td>
                <td :class="`${cartela.O[1]}`">{{cartela.O[1]}}</td>
            </tr>
            <tr>
                <td :class="`${cartela.B[2]}`">{{cartela.B[2]}}</td>
                <td :class="`${cartela.I[2]}`">{{cartela.I[2]}}</td>
                <td :class="`${cartela.N[2]}`">FREE</td>
                <td :class="`${cartela.G[2]}`">{{cartela.G[2]}}</td>
                <td :class="`${cartela.O[2]}`">{{cartela.O[2]}}</td>
            </tr>
            <tr>
                <td :class="`${cartela.B[3]}`">{{cartela.B[3]}}</td>
                <td :class="`${cartela.I[3]}`">{{cartela.I[3]}}</td>
                <td :class="`${cartela.N[3]}`">{{cartela.N[3]}}</td>
                <td :class="`${cartela.G[3]}`">{{cartela.G[3]}}</td>
                <td :class="`${cartela.O[3]}`">{{cartela.O[3]}}</td>
            </tr>
            <tr>
                <td :class="`${cartela.B[4]}`">{{cartela.B[4]}}</td>
                <td :class="`${cartela.I[4]}`">{{cartela.I[4]}}</td>
                <td :class="`${cartela.N[4]}`">{{cartela.N[4]}}</td>
                <td :class="`${cartela.G[4]}`">{{cartela.G[4]}}</td>
                <td :class="`${cartela.O[4]}`">{{cartela.O[4]}}</td>
            </tr>
        </table>
      </div>
        </div>
</template>

<script>
import Cartela from '@/Model/Cartela';

export default {
  name: "CartelaManage",
  props: {cartela : Cartela,
  ultimoNumeroSorteado: String,
  letraSorteada:String, 
  },

 data() {
    return {
      
    };
  },
  
 
    methods:{
       
    },

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

tr td {
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