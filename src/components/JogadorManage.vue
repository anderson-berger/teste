
<template>
  <div class="principal" v-if="this.jogadores.length > 0" >
    <div v-for="(jogador, index) in jogadores" v-bind:key="index">
    <b-card
      img-src="https://placekitten.com/300/300"
      img-alt="Card image"
      img-left
      class="mb-3"
    >
      <b-card-text>
        <h1 class="nome-jogador">{{jogador.nome}}</h1>
        <cartela-manage :cartelas="jogador.cartelas"></cartela-manage>
      </b-card-text>
    </b-card>
  </div>  
  </div>
</template>

<script>
import CartelaManage from "./CartelaManage.vue";

export default {

  props: { jogadores: [] },

  data() {
    return {
      nomeJogador: "",
      qtdCartelasJogador: "",
      cartelas:[],
    };
  },

  watch:{
    cartelas(){

    }

  },
  components: {
    CartelaManage,
  },

  methods: {
    instanciarJogadores(){
      this.nomeJogador = this.jogadores
    }

  },
};
</script>

<style scoped>
  .nome-jogador{
    text-decoration: underline;
  }
</style>