
<template>
  <b-container >
    <b-row >
      <b-col md="4" >
        <div  v-if="bingo">
           
            <span v-for="item in bingo.placar.qtdNumeros" :key="item.id">{{item}} </span>
          
        </div>
      </b-col>

      <b-col md="4">
        <div>
          <button @click="comecar()">Comerçar</button>

          <div v-if="bingo">
            <button @click="sortear()">sortear</button>
            <p>
              Ultimo numero Sorteado: <span>{{ bingo.placar.ultimoNumeroSorteado }}</span>
            </p>
            <p>Placar: {{ bingo.placar.numerosSorteados }}</p>
          </div>
        </div>
      </b-col>

      <b-col md="4">
        <div>
          <h1>tudo certo</h1>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Bingo from "../Model/Bingo";

export default {
  data() {
    return {
      bingo: null,
    };
  },
  methods: {
    comecar() {
      let bingo = Bingo.comecar();

      this.bingo = bingo;
    },
    sortear() {
      this.bingo.placar.sortearNumero();
    },
  },
};
</script>

<style>
span{
  font-size: 20px;
  display: inline-block;
  padding: 2px;
  border: solid 5px black;
  border-radius: 50%;
  margin: 2px;
  background:white;
  width: 50px;
  height: 50px;
}
</style>
