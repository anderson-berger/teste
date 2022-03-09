
<template>
  <b-container fluid>
    <b-row>
      <b-col md="4">
        <div v-if="bingo">
          <span v-for="item in bingo.placar.qtdNumeros" :key="item.id"
            >{{ item }}
          </span>
        </div>
      </b-col>

      <b-col md="4">
        <div>
          <button @click="comecar()">Comerçar</button>

          <div v-if="bingo">
            <div>
              <button @click="sortear()">sortear</button>
              <p>
                Ultimo numero Sorteado:
                <span>{{ bingo.placar.ultimoNumeroSorteado }}</span>
              </p>
              <p>Placar: {{ bingo.placar.numerosSorteados }}</p>
            </div>
          </div>
        </div>
      </b-col>

      <b-col md="4">
        <div>
          <h1>tudo certo</h1>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <div v-if="bingo">
        <h1>Cadastrar jogador</h1>
        <hr />
        <div class="form-todo form-group">
          <p>
            <input
              placeholder="Nome"
              type="text"
              name="jogador"
              class="form-control"
              v-model="nome"
            />
          </p>
          <p>
            <input
              placeholder="Quantidade de cartelas"
              type="text"
              name="qtd"
              class="form-control"
              v-model="qtd"
            />
          </p>
          <button v-on:click="cadastrar" type="submit" class="btl btl-primary">cadastrar</button>
        </div>
        <h1>Hello world!!!</h1>
        <ul>
          <li v-for="item in bingo.jogador" :key="item">
            {{ item.message }} {{item.cartelas}}
          </li>
        </ul>
      </div>
    </b-row>
  </b-container>
</template>

<script>
import Bingo from "../Model/Bingo";

export default {
  data() {
    return {
      bingo: null,
      nome: "",
      qtd: "",
    };
  },
  methods: {
    cadastrar() {
      console.log("passou")
      console.log(this.nome)
      console.log(this.qtd)
      this.bingo.cadastrarJogador(this.nome, parseInt(this.qtd, 8));
    },
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
.form-control {
  width: 13%;
}
span {
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
