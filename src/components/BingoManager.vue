
<template>
  <b-container fluid>
    <b-row>
      <b-col md="4">
        <div v-if="bingo">
          <placar-manage Placar="this.bingo.placar instanciarPlacar" instanciarPlacar></placar-manage>
          
          
        </div>
      </b-col>

      <b-col md="4">
        <div>
          <button @click="comecar()">Comerçar</button>
        </div>
      </b-col>

      <b-col md="4">
      </b-col>
    </b-row>
    <b-row>
      
    </b-row>
  </b-container>
</template>

<script>
import Bingo from "../Model/Bingo";
import PlacarManage from "./PlacarManage.vue";


export default {
  data() {
    return {
      bingo: null,
      
    };
  },

  components: {
    PlacarManage
  },

  methods: {
    comecar() {
      let bingo = Bingo.comecar();

      this.bingo = bingo;
    },
    /*cadastrar() {
      this.bingo.cadastrarJogador(this.nome, parseInt(this.qtd, 8));
    },
  
    sortear() {
      this.bingo.placar.sortearNumero();
    },*/
  },
};
</script>

<style>

</style>
