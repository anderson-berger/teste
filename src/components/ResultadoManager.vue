<template>
    <div> 
            
            <h1>Nome do Ganhador: {{this.ganhador.nome}}</h1>
            <h1>Numeros sorteados: {{this.ganhador.numerosGanhadores}}</h1>
            
    </div>
</template>

<script>
import Ganhador from "@/Model/Ganhador";



export default ({
    name: "ResultadoManager",

    props: {ganhador : Ganhador
    },
})
</script>

<style scoped>

</style>
