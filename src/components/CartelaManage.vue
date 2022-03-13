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
                <td id = "B">{{cartela.B[0]}}</td>
                <td id = "B">{{cartela.I[0]}}</td>
                <td id = "B">{{cartela.N[0]}}</td>
                <td id = "B">{{cartela.G[0]}}</td>
                <td id = "B">{{cartela.O[0]}}</td>
            </tr>
            <tr>
                <td id = "B">{{cartela.B[1]}}</td>
                <td id = "B">{{cartela.I[1]}}</td>
                <td id = "B">{{cartela.N[1]}}</td>
                <td id = "B">{{cartela.G[1]}}</td>
                <td id = "B">{{cartela.O[1]}}</td>
            </tr>
            <tr>
                <td id = "B">{{cartela.B[2]}}</td>
                <td id = "B">{{cartela.I[2]}}</td>
                <td id = "B">FREE</td>
                <td id = "B">{{cartela.G[2]}}</td>
                <td id = "B">{{cartela.O[2]}}</td>
            </tr>
            <tr>
                <td id = "B">{{cartela.B[3]}}</td>
                <td id = "B">{{cartela.I[3]}}</td>
                <td id = "B">{{cartela.N[3]}}</td>
                <td id = "B">{{cartela.G[3]}}</td>
                <td id = "B">{{cartela.O[3]}}</td>
            </tr>
            <tr>
                <td id = "B">{{cartela.B[4]}}</td>
                <td id = "B">{{cartela.I[4]}}</td>
                <td id = "B">{{cartela.N[4]}}</td>
                <td id = "B">{{cartela.G[4]}}</td>
                <td id = "B">{{cartela.O[4]}}</td>
            </tr>
        </table>
      </div>
        </div>
</template>

<script>

export default {
  name: "CartelaManage",
  props: {cartelas : []
  
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