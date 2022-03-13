<template>
  <div class="mb-4 placar" v-if="placar != null">
    <div v-if="letras[0] == null">{{ instanciarPlacar() }}</div>
    <button
      class="submit-btn"
      v-on:click="this.sortearNumero"
      @click="enviarNumeroSorteado"
    >
      Sortear Numero
    </button>
    <div class="teste" v-if="letraSorteada != ''">
      <div class="anel"></div>
      <span class="sorteados letra" v-if="letraSorteada != ''">{{
        letraSorteada
      }}</span>
      <span class="sorteados numero" v-if="ultimoNumeroSorteado != null">{{
        ultimoNumeroSorteado
      }}</span>
    </div>

    <table class="tabela">
      <tr>
        <th>{{ letras[0] }}</th>
        <th>{{ letras[1] }}</th>
        <th>{{ letras[2] }}</th>
        <th>{{ letras[3] }}</th>
        <th>{{ letras[4] }}</th>
      </tr>
    </table>
    <table>
      <tr>
        <td>{{ B[0] }}</td>
        <td>{{ B[7] }}</td>
        <td>{{ I[0] }}</td>
        <td>{{ I[7] }}</td>
        <td>{{ N[0] }}</td>
        <td>{{ N[7] }}</td>
        <td>{{ G[0] }}</td>
        <td>{{ G[7] }}</td>
        <td>{{ O[0] }}</td>
        <td>{{ O[7] }}</td>
      </tr>
      <tr>
        <td>{{ B[1] }}</td>
        <td>{{ B[8] }}</td>
        <td>{{ I[1] }}</td>
        <td>{{ I[8] }}</td>
        <td>{{ N[1] }}</td>
        <td>{{ N[8] }}</td>
        <td>{{ G[1] }}</td>
        <td>{{ G[8] }}</td>
        <td>{{ O[1] }}</td>
        <td>{{ O[8] }}</td>
      </tr>
      <tr>
        <td>{{ B[2] }}</td>
        <td>{{ B[9] }}</td>
        <td>{{ I[2] }}</td>
        <td>{{ I[9] }}</td>
        <td>{{ N[2] }}</td>
        <td>{{ N[9] }}</td>
        <td>{{ G[2] }}</td>
        <td>{{ G[9] }}</td>
        <td>{{ O[2] }}</td>
        <td>{{ O[9] }}</td>
      </tr>
      <tr>
        <td>{{ B[3] }}</td>
        <td>{{ B[10] }}</td>
        <td>{{ I[3] }}</td>
        <td>{{ I[10] }}</td>
        <td>{{ N[3] }}</td>
        <td>{{ N[10] }}</td>
        <td>{{ G[3] }}</td>
        <td>{{ G[10] }}</td>
        <td>{{ O[3] }}</td>
        <td>{{ O[10] }}</td>
      </tr>
      <tr>
        <td>{{ B[4] }}</td>
        <td>{{ B[11] }}</td>
        <td>{{ I[4] }}</td>
        <td>{{ I[11] }}</td>
        <td>{{ N[4] }}</td>
        <td>{{ N[11] }}</td>
        <td>{{ G[4] }}</td>
        <td>{{ G[11] }}</td>
        <td>{{ O[4] }}</td>
        <td>{{ O[11] }}</td>
      </tr>
      <tr>
        <td>{{ B[5] }}</td>
        <td>{{ B[12] }}</td>
        <td>{{ I[5] }}</td>
        <td>{{ I[12] }}</td>
        <td>{{ N[5] }}</td>
        <td>{{ N[12] }}</td>
        <td>{{ G[5] }}</td>
        <td>{{ G[12] }}</td>
        <td>{{ O[5] }}</td>
        <td>{{ O[12] }}</td>
      </tr>
      <tr>
        <td>{{ B[6] }}</td>
        <td>{{ B[13] }}</td>
        <td>{{ I[6] }}</td>
        <td>{{ I[13] }}</td>
        <td>{{ N[6] }}</td>
        <td>{{ N[13] }}</td>
        <td>{{ G[6] }}</td>
        <td>{{ G[13] }}</td>
        <td>{{ O[6] }}</td>
        <td>{{ O[13] }}</td>
      </tr>
    </table>
    <table class="tabela">
      <tr>
        <th>{{ B[14] }}</th>
        <th>{{ I[14] }}</th>
        <th>{{ N[14] }}</th>
        <th>{{ G[14] }}</th>
        <th>{{ O[14] }}</th>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "PlacarManage",
  props: { placar: null },
  emits: ["enviarUltimoNumeroSorteado"],

  data() {
    return {
      nomeJogador: "",
      qtdCartelasJogador: "",
      letras: [],
      B: [],
      I: [],
      N: [],
      G: [],
      O: [],
      letraSorteada: "",
      ultimoNumeroSorteado: "",
    };
  },
  watch: {
    placar() {
      this.instanciarPlacar();
    },
  },
  components: {},

  methods: {
    enviarNumeroSorteado() {
      this.$emit("enviar-ultimo-numero-sorteado", this.ultimoNumeroSorteado);
    },
    instanciarPlacar() {
      (this.letraSorteada = ""), (this.ultimoNumeroSorteado = "");
      this.letras = this.placar.letras;
      this.B = this.placar.B;
      this.I = this.placar.I;
      this.N = this.placar.N;
      this.G = this.placar.G;
      this.O = this.placar.O;
    },
    sortearNumero() {
      this.placar.sortearNumero();
      this.letraSorteada = this.placar.letraSorteada;
      this.ultimoNumeroSorteado = this.placar.ultimoNumeroSorteado;
      this.enviarUltimoNumeroSorteado = this.ultimoNumeroSorteado;
    },
  },
};
</script>

<style scoped>
.teste {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  min-height: 17vh;
  max-height: 17vh;
}

.tabela {
  border-collapse: inherit;
  margin-left: 85px;
}

td {
  border: 2px solid;
  max-width: 33.5px;
  min-width: 33.5px;
}
th {
  border: 2px solid;
  max-width: 69px;
  min-width: 69px;
}

table {
  border-collapse: unset;
  margin-left: 85px;
  display: grid;
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
.anel {
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  animation: ring 2s linear infinite;
}
@keyframes ring {
  0% {
    transform: rotate(0deg);
    box-shadow: 1px 5px 2px #e65c00;
  }
  50% {
    transform: rotate(180deg);
    box-shadow: 1px 5px 2px #18b201;
  }
  100% {
    transform: rotate(360deg);
    box-shadow: 1px 5px 2px #0456c8;
  }
}

.anel::before {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
}

span {
  color: #737373;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 50px;
  animation: text 3s ease-in-out infinite;
}

@keyframes text {
  150% {
    color: black;
  }
}

.letra {
  color: #000000;
  font-weight: bold;
}

.numero {
  color: #ff0000;
  font-weight: bold;
}

.placar {
  display: inline-block;
}
</style>