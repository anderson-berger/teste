<template>
  <b-container fluid>
    <b-row>
      <b-col class="colPlacar" md="4">
        <div v-if="bingo && jogadores.length > 0 && this.ganhador === null" >
          <placar-manage
            :placar="placar"
            @enviar-ultimo-numero-sorteado="conferirCartela"
          ></placar-manage>
        </div>
      </b-col>

      <b-col md="4">
        <div>
          <button class="submit-btn" @click="comecar()">Comerçar</button>
          <div id="jogador-form" v-if="bingo">
            <div class="imput-container">
              <label for="nome">Nome do jogador:</label>
              <input
                type="text"
                id="nome"
                name="name"
                min="3"
                v-model="nomeJogador"
                placeholder="Digite o nome do jogador"
              />
              {{ this.nomeJogador }}
            </div>
            <div class="imput-container">
              <label for="nome">Quantidade de cartelas:</label>
              <input
                type="number"
                id="cartela"
                name="cartela"
                min="1"
                max="6"
                v-model="qtdCartelasJogador"
                placeholder="Quantas cartelas ele comprou?"
              />
              {{ qtdCartelasJogador }}
            </div>
            <button class="submit-btn" @click="cadastrarJogador()">
              Criar Jogador
            </button>
          </div>
        </div>
      </b-col>

      <b-col md="4" v-if="this.ganhador != null">
        <resultado-manager :ganhador="this.ganhador"></resultado-manager>
      </b-col>
    </b-row>

    <b-row>
      <jogador-manage :jogadores="jogadores" :ultimoNumeroSorteado="ultimoNumeroSorteado" :letraSorteada ="letraSorteada"></jogador-manage>
    </b-row>
  </b-container>
</template>

<script>
import Bingo from "../Model/Bingo";
import PlacarManage from "./PlacarManage.vue";
import JogadorManage from "./JogadorManage.vue";
import ResultadoManager from "./ResultadoManager.vue";
import Jogador from "@/Model/Jogador";

export default {
  data() {
    return {
      bingo: null,
      placar: null,
      jogadores: [],
      nomeJogador: "",
      qtdCartelasJogador: "",
      ganhador: null,
      ultimoNumeroSorteado: "",
      letraSorteada:"",
    };
  },

  components: {
    PlacarManage,
    JogadorManage,
    ResultadoManager,
  },

  methods: {
    conferirCartela(ultimoNumeroSorteado, letraSorteada) {
      
      this.ultimoNumeroSorteado = ultimoNumeroSorteado;
      this.letraSorteada = letraSorteada;
      
      this.bingo.conferirVencedor(ultimoNumeroSorteado);
      if (this.bingo.ganhador != null) {
        this.ganhador = this.bingo.ganhador;
      }
    },
    comecar() {
      let bingo = Bingo.comecar();
      this.jogadores = [],
      this.nomeJogador = "",
      this.qtdCartelasJogador = "",
      this.ganhador = null,
      this.ultimoNumeroSorteado = "",
      this.letraSorteada = "",

      bingo.instanciarPlacar();
      this.placar = bingo.placar;
      this.jogadores = bingo.jogadores;
      this.bingo = bingo;
      this.placar = this.bingo.placar;
    },

    cadastrarJogador() {
      if(this.letraSorteada === ""){
        if(this.nomeJogador != ""){
          if(this.qtdCartelasJogador >= 1 &&this.qtdCartelasJogador <= 6){
            let aux = new Jogador(this.nomeJogador, this.qtdCartelasJogador);
            aux.inicializarCartelas(this.qtdCartelasJogador);
            this.jogadores.push(aux);
          }else{
            alert("Quantidade fora do range: Minimo = 0, Maximo  = 6");
        }
        }else{
          alert("Jogador precisa de um nome");
        }
      }else{
        alert("Espere até a proxima partida");
      }
      
      
    },
  },
};
</script>

<style>
/*.colPlacar{
  justify-content: center;
  justify-content: center;
  align-items: center;

  gap: 4px;
  grid-auto-flow: cloumn;
}*/
#jogador-form {
  max-width: 400px;
  margin: 30px auto;
  text-align: start;
}
.imput-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}
label {
  font-weight: bold;
  margin-bottom: 15px;
  color: #222;
  padding: 5px 10px;
  border-left: 4px solid #fcba03;
}
.submit-btn {
  background-color: #222;
  color: #fcba03;
  font-weight: bold;
  border: 2px solid #222;
  padding: 10px;
  font-size: 16px;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.5s;
}
.submit-btn:hover {
  background-color: transparent;
  color: #222;
}
</style>