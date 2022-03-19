<template>
  <div>
    <h1 class="block-effect" style="--td: 1.2s">
      <div class="block-reveal" style="--bc: #4040bf; --d: 0.1s">Ganhador: {{ganhador.nome}}</div>
      <div class="block-reveal" style="--bc: #bf4060; --d: 0.5s">
        Numeros sorteados:
      <div v-for="numero in ganhador.numerosGanhadores" :key="numero">{{numero}}</div>
      </div>
    </h1>

    <a
      href="https://abubakersaeed.netlify.app/designs/d12-block-revealing-effect"
      class="abs-site-link"
      rel="nofollow noreferrer"
      target="_blank"
      >abs/designs/d12-block-revealing-effect</a
    >
  </div>
</template>

<script>
import Ganhador from "@/Model/Ganhador";

export default {
  name: "ResultadoManager",

  props: { ganhador: Ganhador },
};
</script>

<style scoped>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  min-height: 100vh;
  padding: 20px;

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}


/* other */
.info {
  margin: 10px 0;
  text-align: center;
}

p {
  color: #2e2e2e;
  margin-bottom: 10px;
}


/* block-$ */
.block-effect {
  font-size: calc(3px + 2vw);
}

.block-reveal {
  --t: calc(var(--td) + var(--d));

  color: transparent;
  padding: 4px;

  position: relative;
  overflow: hidden;

  animation: revealBlock 0s var(--t) forwards;
}

.block-reveal::after {
  content: '';

  width: 0%;
  height: 100%;
  padding-bottom: 4px;

  position: absolute;
  top: 0;
  left: 0;

  background: var(--bc);
  animation: revealingIn var(--td) var(--d) forwards, revealingOut var(--td) var(--t) forwards;
}


/* animations */
@keyframes revealBlock {
  100% {
    color: #0f0f0f;
  }
}

@keyframes revealingIn {

  0% {
    width: 0;
  }

  100% {
    width: 100%;
  }
}

@keyframes revealingOut {

  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(100%);
  }

}

.abs-site-link {
  position: fixed;
  bottom: 20px;
  left: 20px;
  color: hsla(0, 0%, 0%, .6);
  font-size: 16px;
}
</style>
