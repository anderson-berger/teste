<template>
  <div class="principal" v-if="placar != null">
    <div v-if="letras[0] == null">{{ instanciarPlacar() }}</div>
     <button class="submit-btn" v-on:click="this.sortearNumero" @click="enviarNumeroSorteado">Sortear Numero</button>
     <div class="teste" >
       <div class="anel" v-if="letraSorteada != ''"></div>
       <span class="sorteadosLetra" v-if="letraSorteada != null">{{letraSorteada}}</span>
       <span class="sorteados numero" v-if="ultimoNumeroSorteado != null">{{ultimoNumeroSorteado}}</span>
    </div>
  <div>
        <table class="tabela">
      <tr>
        <th id="B">{{ letras[0] }}</th>
        <th id="I">{{ letras[1] }}</th>
        <th id="N">{{ letras[2] }}</th>
        <th id="G">{{ letras[3] }}</th>
        <th id="O">{{ letras[4] }}</th>
      </tr>
    </table>
    <table>
      <tr>
        <td id="1">{{ B[0] }}</td>
        <td id="8">{{ B[7] }}</td>
        <td id="16">{{ I[0] }}</td>
        <td id="23">{{ I[7] }}</td>
        <td id="31">{{ N[0] }}</td>
        <td id="38">{{ N[7] }}</td>
        <td id="46">{{ G[0] }}</td>
        <td id="53">{{ G[7] }}</td>
        <td id="61">{{ O[0] }}</td>
        <td id="68">{{ O[7] }}</td>
      </tr>
      <tr>
        <td id="2">{{ B[1] }}</td>
        <td id="9">{{ B[8] }}</td>
        <td id="17">{{ I[1] }}</td>
        <td id="24">{{ I[8] }}</td>
        <td id="32">{{ N[1] }}</td>
        <td id="39">{{ N[8] }}</td>
        <td id="47">{{ G[1] }}</td>
        <td id="54">{{ G[8] }}</td>
        <td id="62">{{ O[1] }}</td>
        <td id="69">{{ O[8] }}</td>
      </tr>
      <tr>
        <td id="3">{{ B[2] }}</td>
        <td id="10">{{ B[9] }}</td>
        <td id="18">{{ I[2] }}</td>
        <td id="25">{{ I[9] }}</td>
        <td id="33">{{ N[2] }}</td>
        <td id="40">{{ N[9] }}</td>
        <td id="48">{{ G[2] }}</td>
        <td id="55">{{ G[9] }}</td>
        <td id="63">{{ O[2] }}</td>
        <td id="70">{{ O[9] }}</td>
      </tr>
      <tr>
        <td id="4">{{ B[3] }}</td>
        <td id="11">{{ B[10] }}</td>
        <td id="19">{{ I[3] }}</td>
        <td id="26">{{ I[10] }}</td>
        <td id="34">{{ N[3] }}</td>
        <td id="41">{{ N[10] }}</td>
        <td id="49">{{ G[3] }}</td>
        <td id="56">{{ G[10] }}</td>
        <td id="64">{{ O[3] }}</td>
        <td id="71">{{ O[10] }}</td>
      </tr>
      <tr>
        <td id="5">{{ B[4] }}</td>
        <td id="12">{{ B[11] }}</td>
        <td id="20">{{ I[4] }}</td>
        <td id="27">{{ I[11] }}</td>
        <td id="35">{{ N[4] }}</td>
        <td id="42">{{ N[11] }}</td>
        <td id="50">{{ G[4] }}</td>
        <td id="57">{{ G[11] }}</td>
        <td id="65">{{ O[4] }}</td>
        <td id="72">{{ O[11] }}</td>
      </tr>
      <tr>
        <td id="6">{{ B[5] }}</td>
        <td id="13">{{ B[12] }}</td>
        <td id="21">{{ I[5] }}</td>
        <td id="28">{{ I[12] }}</td>
        <td id="36">{{ N[5] }}</td>
        <td id="43">{{ N[12] }}</td>
        <td id="51">{{ G[5] }}</td>
        <td id="58">{{ G[12] }}</td>
        <td id="66">{{ O[5] }}</td>
        <td id="73">{{ O[12] }}</td>
      </tr>
      <tr>
        <td id="7">{{ B[6] }}</td>
        <td id="14">{{ B[13] }}</td>
        <td id="22">{{ I[6] }}</td>
        <td id="29">{{ I[13] }}</td>
        <td id="37">{{ N[6] }}</td>
        <td id="44">{{ N[13] }}</td>
        <td id="52">{{ G[6] }}</td>
        <td id="59">{{ G[13] }}</td>
        <td id="67">{{ O[6] }}</td>
        <td id="74">{{ O[13] }}</td>
      </tr>
    </table>
    <table class="tabela">
      <tr>
        <th id="15">{{ B[14] }}</th>
        <th id="30">{{ I[14] }}</th>
        <th id="45">{{ N[14] }}</th>
        <th id="60">{{ G[14] }}</th>
        <th id="75">{{ O[14] }}</th>
      </tr>
    </table>
  </div>
    
     
     
     

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
      penultimoNumeroSorteado: "",
    };
  },
  watch: {
    placar() {
      this.instanciarPlacar();
    },
    letraSorteada(){
      this.corDaLetra();
    }
  },
  components: {},

  methods: {
    enviarNumeroSorteado() {
      this.$emit("enviar-ultimo-numero-sorteado", this.ultimoNumeroSorteado, this.letraSorteada);
      
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
      this.penultimoNumeroSorteado = this.ultimoNumeroSorteado;
      this.ultimoNumeroSorteado = this.placar.ultimoNumeroSorteado + "";
      this.letraSorteada = this.placar.letraSorteada;
      this.enviarUltimoNumeroSorteado = this.ultimoNumeroSorteado;
      
      
      this.marcaPlacar();

    },
    corDaLetra(){
       if(this.letraSorteada === "B"){
        let corDaLetraSorteada = document.querySelector(".sorteadosLetra");
        corDaLetraSorteada.style.color = "#e61d1d";
      }else  if(this.letraSorteada === "I"){
        let corDaLetraSorteada = document.querySelector(".sorteadosLetra");
        corDaLetraSorteada.style.color = "#272ae6";
      }else  if(this.letraSorteada === "N"){
        let corDaLetraSorteada = document.querySelector(".sorteadosLetra");
        corDaLetraSorteada.style.color = "#a6a809";
      }else  if(this.letraSorteada === "G"){
        let corDaLetraSorteada = document.querySelector(".sorteadosLetra");
        corDaLetraSorteada.style.color = "#06832b";
      }else  if(this.letraSorteada === "O"){
        let corDaLetraSorteada = document.querySelector(".sorteadosLetra");
        corDaLetraSorteada.style.color = "#da1bd0";
      }
    },
    marcaPlacar(){
      if(this.ultimoNumeroSorteado != ""){
        let aux
        if(this.penultimoNumeroSorteado != ""){
          aux = document.getElementById(this.penultimoNumeroSorteado);
          aux.style.background = "mediumseagreen";
        }
        aux = document.getElementById(this.ultimoNumeroSorteado);
        aux.style.background = "cyan";
      }

    },
  },
};
</script>

<style scoped>
.principal{
   
 
  
  
  min-height: 0vh;
  max-height: 0vh;
  
 
}
.teste {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  min-height: 0vh;
  max-height: 0vh;
}

.tabela {
  border-collapse: inherit;
  margin-left: 85px;
}

td {
  border: 2px solid;
  max-width: 33.5px;
  min-width: 33.5px;
  font-weight: bold;
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
  display: block;
  position: relative;
  background-color: rgb(0, 0, 0);
  border-radius: 10px;
  color: #fcba03;
  font-weight: bold;
  border: 2px solid rgb(169, 224, 17);
  padding: 10px 10px 10px 10px;
  font-size: 16px;
  margin: 0px 0px 9px 90px;
  cursor: pointer;
  transition: 0.5s;
}
.submit-btn:hover {
  background-color:transparent;
  border: 2px solid rgb(8, 8, 8);
  color: #222;
}
.anel {
  position: absolute;
  display: inline-block;
  margin: -100px 0px 0px 70px;
  width: 70px;
  height: 70px;
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

#B{
  background: #e61d1d;
}
#I{
  background: #272ae6;
}
#N{
  background: #a6a809;
}
#G{
  background: #06832b;
}
#O{
  background: #da1bd0;
}


.anel:before {
  position: absolute;
  display: block;
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
  font-size: 30px;
  
  display: block;
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 0px;
  animation: text 3s ease-in-out infinite;
}

@keyframes text {
  150% {
    color: black;
  }
}

.sorteadosLetra {
  
  color: #222;
  font-weight: bold;
  margin: -100px 0px 0px 70px;
}

.numero {
  
  font-weight: bold;
  margin: -100px 0px 0px 5px;
}

.placar {
  display: inline-block;
}




</style>