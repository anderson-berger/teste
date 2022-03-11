<template>
  <div >
      <h1></h1>
      
        <table>
            <tr class="letras" v-for= "letra in this.Placar.letras" :key="letra">
                <th>{{letra}}</th>
            </tr>
            <tr v-for= "B in this.Placar.B" :key="B">
                <td> {{B}}</td>
            </tr>
            <tr v-for= "I in this.I" :key="I">
                <td> {{I}}</td>
            </tr>
            <tr v-for= "N in this.N" :key="N">
                <td> {{N}}</td>
            </tr>
            <tr v-for= "G in this.G" :key="G">
                <td> {{G}}</td>
            </tr>
            <tr v-for= "O in this.B" :key="O">
                <td> {{O}}</td>
            </tr>
        </table>
        <h1>Hello</h1>
        </div>
    
</template>

<script>
import Placar from "../Model/Placar"
export default {
  name: "PlacarManage",
  props: ["Placarb"],
  data(){
      return{
         letras: [],
         B: [],
         I: [],
         N: [],
         G: [],
         O: [],
      };
  },
components:{
    Placar: this.Placar,
},
  methods:{
      instanciarPlacar(){
          this.letras = this.Placar.letras;
          this.B = this.Placar.B;
          this.I = this.Placar.I;
          this.N = this.Placar.N;
          this.G = this.Placar.G;
          this.O = this.Placar.O;
          console.log(this.Placar)
      },
  },
};
</script>

<style scoped>
.letras{
  font-size: 20px;
  display: inline-block;
  padding: 2px;
  border: solid 5px black;
  border-radius: 50%;
  margin: 2px;
  background: white;
  width: 50px;
  height: 50px;
}

</style>