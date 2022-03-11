
<template>
  <div class="principal">
    <b-card
      img-src="https://placekitten.com/300/300"
      img-alt="Card image"
      img-left
      class="mb-3"
    >
      <b-card-text>
        Some quick example text to build on the card and make up the bulk of the
        card's content.
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  
  props: ["jogador"],
  data(){
      return{
          id_value: "",
          nome_value: ""
      }
  },

  methods:{
      istanciarJogador(){
          this.id_value = this.jogador.id;
          this.nome_value = this.jogador.nome;
      }
  }
};
</script>

<style scoped>
</style>