<template>
  <div>
    <button @click="comecar()">Comerçar</button>
    <div v-if="bingo">
      <button @click="sortear()">sortear</button>
      <p>{{ bingo.local }}</p>
      <p>Mestre: {{ bingo.mestre.nome }} Ultimo numero Sorteado: {{bingo.ultimoNumeroSorteado}}</p>
      <p>{{ bingo.numeros }}</p>
      <ul>
        <li v-for="(jogador, index) of bingo.jogadores" :key="index">
          {{ jogador.nome }}
          {{ jogador.cartelas }}
        </li>
      </ul>
    </div>
  </div>
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
      const bingo = Bingo.comecar();

      this.bingo = bingo;
    },
     sortear() {
      this.bingo.sortear();
    },
  },
};
</script>

<style></style>
