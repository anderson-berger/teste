
<template>
  <div class="principal" v-if="this.jogadores.length > 0" >
    <div v-for="(jogador, index) in jogadores" v-bind:key="index">
      <b-card
        img-src="https://pickaface.net/gallery/avatar/unr_profesorgenerico1_170329_1619_9pmc8o.png"
        img-alt="Card image"
        img-left
        class="mb-3"
    >
      <b-card-text>
        <h1 class="nome-jogador">{{jogador.nome}}</h1>
        <div class="alinhar-cartelas" v-for="(cartela, index ) in jogador.cartelas" v-bind:key="index">
          <cartela-manage :cartela="cartela" :ultimoNumeroSorteado="ultimoNumeroSorteado" :letraSorteada="letraSorteada"></cartela-manage>
        </div>
      </b-card-text>
    </b-card>
  </div>  
  </div>
</template>

<script>
import CartelaManage from "./CartelaManage.vue";

export default {

  props: { jogadores: [],
  ultimoNumeroSorteado: String,
  letraSorteada: String},

  data() {
    return {
    };
  },

  watch:{
   ultimoNumeroSorteado(){
    if(this.ultimoNumeroSorteado != ""){ 
       this.marcaNumeroSorteado();
    }
   }
  },

  components: {
    CartelaManage,
  },

  methods: {
    instanciarJogadores(){
      this.nomeJogador = this.jogadores
    },
    marcaNumeroSorteado(){
        var aux = document.getElementsByClassName(this.ultimoNumeroSorteado);
        for(let i=0; i<aux.length;i++){
          aux[i].style.background = "mediumseagreen";
        }  
    },

  },
};
</script>

<style scoped>
  .nome-jogador{
    text-decoration: underline;
  }
</style>