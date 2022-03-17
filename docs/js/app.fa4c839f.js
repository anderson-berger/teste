(function(){"use strict";var t={2480:function(t,a,r){var e=r(8935),s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("img",{attrs:{alt:"Vue logo",src:r(5844)}}),e("bingoManager")],1)},o=[],i=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("b-container",{attrs:{fluid:""}},[r("b-row",[r("b-col",{staticClass:"colPlacar",attrs:{md:"4"}},[t.bingo&&t.jogadores.length>0?r("div",[r("placar-manage",{attrs:{placar:t.placar},on:{"enviar-ultimo-numero-sorteado":t.conferirCartela}})],1):t._e()]),r("b-col",{attrs:{md:"4"}},[r("div",[r("button",{staticClass:"submit-btn",on:{click:function(a){return t.comecar()}}},[t._v("Comerçar")]),t.bingo?r("div",{attrs:{id:"jogador-form"}},[r("div",{staticClass:"imput-container"},[r("label",{attrs:{for:"nome"}},[t._v("Nome do jogador:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.nomeJogador,expression:"nomeJogador"}],attrs:{type:"text",id:"nome",name:"name",min:"3",placeholder:"Digite o nome do jogador"},domProps:{value:t.nomeJogador},on:{input:function(a){a.target.composing||(t.nomeJogador=a.target.value)}}}),t._v(" "+t._s(this.nomeJogador)+" ")]),r("div",{staticClass:"imput-container"},[r("label",{attrs:{for:"nome"}},[t._v("Quantidade de cartelas:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.qtdCartelasJogador,expression:"qtdCartelasJogador"}],attrs:{type:"number",id:"cartela",name:"cartela",min:"1",max:"6",placeholder:"Quantas cartelas ele comprou?"},domProps:{value:t.qtdCartelasJogador},on:{input:function(a){a.target.composing||(t.qtdCartelasJogador=a.target.value)}}}),t._v(" "+t._s(t.qtdCartelasJogador)+" ")]),r("button",{staticClass:"submit-btn",on:{click:function(a){return t.cadastrarJogador()}}},[t._v(" Criar Jogador ")])]):t._e()])]),null!=this.ganhador?r("b-col",{attrs:{md:"4"}},[r("resultado-manager",{attrs:{ganhador:this.ganhador}})],1):t._e()],1),r("b-row",[r("jogador-manage",{attrs:{jogadores:t.jogadores,ultimoNumeroSorteado:t.ultimoNumeroSorteado,letraSorteada:t.letraSorteada}})],1)],1)},d=[],n=r(3796);class l{constructor(){this.letras=["B","I","N","G","O"],this.B=[],this.I=[],this.N=[],this.G=[],this.O=[],this.numeroSorteado=[],this.letraSorteada=null,this.ultimoNumeroSorteado=null}inicializarPlacar(){if(_.qtdNumerosTotal%5===0)for(let t=1;t<_.qtdNumerosTotal+1;t++)this.B.length<_.qtdNumerosTotal/5?(this.B.push(t),this.numeroSorteado.push(t)):this.I.length<_.qtdNumerosTotal/5?(this.I.push(t),this.numeroSorteado.push(t)):this.N.length<_.qtdNumerosTotal/5?(this.N.push(t),this.numeroSorteado.push(t)):this.G.length<_.qtdNumerosTotal/5?(this.G.push(t),this.numeroSorteado.push(t)):this.O.length<_.qtdNumerosTotal/5&&(this.O.push(t),this.numeroSorteado.push(t))}sortearNumero(){if(this.numeroSorteado.length>0){let t=Math.floor(Math.random()*this.numeroSorteado.length);t<0&&(t=0),this.ultimoNumeroSorteado=this.numeroSorteado[t],this.letraDoNumero(this.ultimoNumeroSorteado),this.numeroSorteado.splice(this.numeroSorteado.indexOf(this.ultimoNumeroSorteado),1)}}letraDoNumero(t){t<=_.qtdNumerosTotal/5?this.letraSorteada="B":t>_.qtdNumerosTotal/5&&t<=_.qtdNumerosTotal/5*2?this.letraSorteada="I":t>_.qtdNumerosTotal/5*2&&t<=_.qtdNumerosTotal/5*3?this.letraSorteada="N":t>_.qtdNumerosTotal/5*3&&t<=_.qtdNumerosTotal/5*4?this.letraSorteada="G":t>_.qtdNumerosTotal/5*4&&t<=_.qtdNumerosTotal&&(this.letraSorteada="O")}}class h{constructor(){this.B=[],this.I=[],this.N=[],this.G=[],this.O=[]}criarCartela(){let t=5;if(_.qtdNumerosTotal%t===0){let a=_.qtdNumerosTotal/t,r=a+1,e=a-a+1;this.escolherNumerosAleatorios(this.B,r,e),r=2*a+1,e=2*a-a+1,this.escolherNumerosAleatorios(this.I,r,e),r=3*a+1,e=3*a-a+1,this.escolherNumerosAleatorios(this.N,r,e),this.espacoEmBranco(this.N),r=4*a+1,e=4*a-a+1,this.escolherNumerosAleatorios(this.G,r,e),r=5*a+1,e=5*a-a+1,this.escolherNumerosAleatorios(this.O,r,e)}}escolherNumerosAleatorios(t,a,r){for(let e=0;e<5;e++){let s=Math.floor(Math.random()*(a-r)+r);t.indexOf(s)>=0?e--:t.push(s)}}espacoEmBranco(t){t[2]=null}}class u{constructor(t,a){u.ID++,this.qtdCartelas=a,this.id=u.ID,this.nome=t,this.cartelas=[]}comprarCartela(){this.cartelas.push(new h)}inicializarCartelas(t){for(let a=0;a<t;a++){let t=new h(_.qtdNumerosTotal);t.criarCartela(),this.cartelas.push(t)}}}(0,n.Z)(u,"ID",0);class c{constructor(){this.numerosSorteados=[],this.temGanhador=!1,this.numerosGanhadores=[]}conferirCartelasDoJogador(t,a){this.numerosSorteados.indexOf(t)<0&&this.numerosSorteados.push(t);let r=a.cartelas;this.conferirCartelas(r)}conferirCartelas(t){for(let a=0;a<t.length;a++)0==this.temGanhador&&this.regrasParaGanharPorColuna(t[a].B),!1===this.temGanhador&&this.regrasParaGanharPorColuna(t[a].I),!1===this.temGanhador&&this.regrasParaGanharPorColuna(t[a].N),0==this.temGanhador&&this.regrasParaGanharPorColuna(t[a].G),0==this.temGanhador&&this.regrasParaGanharPorColuna(t[a].O);if(!1===this.temGanhador)for(let a=0;a<t.length;a++)this.regrasParaGanharPorLinha(t[a].B,t[a].I,t[a].N,t[a].G,t[a].O);if(!1===this.temGanhador)for(let a=0;a<t.length;a++)this.regrasParaGanharDeCimaParaBaixo(t[a].B,t[a].I,t[a].G,t[a].O);if(!1===this.temGanhador)for(let a=0;a<t.length;a++)this.regrasParaGanharDeBaixoParaCima(t[a].B,t[a].I,t[a].G,t[a].O);return!0===this.temGanhador}regrasParaGanharPorColuna(t){this.numerosGanhadores=[];for(let a=0;a<t.length;a++){if(this.numerosSorteados.indexOf(t[a])<0&&""!=t[a])return;this.numerosGanhadores.push(t[a])}this.temGanhador=!0}regrasParaGanharPorLinha(t,a,r,e,s){for(let o=0;o<t.length;o++){if(this.temGanhador)return;if(this.numerosGanhadores=[],this.numerosSorteados.indexOf(t[o])>=0&&this.numerosSorteados.indexOf(a[o])>=0&&(this.numerosSorteados.indexOf(r[o])>=0||""==this.numerosSorteados.indexOf(r[o]))&&this.numerosSorteados.indexOf(e[o])>=0&&this.numerosSorteados.indexOf(s[o])>=0)return this.numerosGanhadores.push(t[o]),this.numerosGanhadores.push(a[o]),this.numerosGanhadores.push(r[o]),this.numerosGanhadores.push(e[o]),this.numerosGanhadores.push(s[o]),void(this.temGanhador=!0)}}regrasParaGanharDeCimaParaBaixo(t,a,r,e){if(this.numerosGanhadores=[],this.numerosSorteados.indexOf(t[0])>=0&&this.numerosSorteados.indexOf(a[1])>=0&&this.numerosSorteados.indexOf(r[3])>=0&&this.numerosSorteados.indexOf(e[4])>=0)return this.numerosGanhadores.push(t[0]),this.numerosGanhadores.push(a[1]),this.numerosGanhadores.push(r[3]),this.numerosGanhadores.push(e[4]),void(this.temGanhador=!0)}regrasParaGanharDeBaixoParaCima(t,a,r,e){if(this.numerosGanhadores=[],this.numerosSorteados.indexOf(t[4])>=0&&this.numerosSorteados.indexOf(a[3])>=0&&this.numerosSorteados.indexOf(r[1])>=0&&this.numerosSorteados.indexOf(e[0])>=0)return this.numerosGanhadores.push(t[4]),this.numerosGanhadores.push(a[3]),this.numerosGanhadores.push(r[1]),this.numerosGanhadores.push(e[0]),void(this.temGanhador=!0)}}class m{constructor(t,a){this.nome=t,this.numerosGanhadores=a}}class _{constructor(){this.jogadores=[],this.placar=null,this.regras=null,this.ganhador=null}static comecar(){const t=new _;return t.regras=new c,t}instanciarPlacar(){let t=new l;t.inicializarPlacar(),this.placar=t}cadastrarJogador(t,a){let r=new u(t,a);r.inicializarCartelas(a),this.jogador.push(r)}conferirVencedor(t){for(let a=0;a<this.jogadores.length;a++)this.regras.conferirCartelasDoJogador(t,this.jogadores[a]),!0===this.regras.temGanhador&&(this.ganhador=new m(this.jogadores[a].nome,this.regras.numerosGanhadores),a=this.jogadores.length)}}(0,n.Z)(_,"qtdNumerosTotal",75);var v=function(){var t=this,a=t.$createElement,r=t._self._c||a;return null!=t.placar?r("div",{staticClass:"principal"},[null==t.letras[0]?r("div",[t._v(t._s(t.instanciarPlacar()))]):t._e(),r("button",{staticClass:"submit-btn",on:{click:[this.sortearNumero,t.enviarNumeroSorteado]}},[t._v("Sortear Numero")]),r("div",{staticClass:"teste"},[""!=t.letraSorteada?r("div",{staticClass:"anel"}):t._e(),null!=t.letraSorteada?r("span",{staticClass:"sorteadosLetra"},[t._v(t._s(t.letraSorteada))]):t._e(),null!=t.ultimoNumeroSorteado?r("span",{staticClass:"sorteados numero"},[t._v(t._s(t.ultimoNumeroSorteado))]):t._e()]),r("div",[r("table",{staticClass:"tabela"},[r("tr",[r("th",{attrs:{id:"B"}},[t._v(t._s(t.letras[0]))]),r("th",{attrs:{id:"I"}},[t._v(t._s(t.letras[1]))]),r("th",{attrs:{id:"N"}},[t._v(t._s(t.letras[2]))]),r("th",{attrs:{id:"G"}},[t._v(t._s(t.letras[3]))]),r("th",{attrs:{id:"O"}},[t._v(t._s(t.letras[4]))])])]),r("table",[r("tr",[r("td",{attrs:{id:"1"}},[t._v(t._s(t.B[0]))]),r("td",{attrs:{id:"8"}},[t._v(t._s(t.B[7]))]),r("td",{attrs:{id:"16"}},[t._v(t._s(t.I[0]))]),r("td",{attrs:{id:"23"}},[t._v(t._s(t.I[7]))]),r("td",{attrs:{id:"31"}},[t._v(t._s(t.N[0]))]),r("td",{attrs:{id:"38"}},[t._v(t._s(t.N[7]))]),r("td",{attrs:{id:"46"}},[t._v(t._s(t.G[0]))]),r("td",{attrs:{id:"53"}},[t._v(t._s(t.G[7]))]),r("td",{attrs:{id:"61"}},[t._v(t._s(t.O[0]))]),r("td",{attrs:{id:"68"}},[t._v(t._s(t.O[7]))])]),r("tr",[r("td",{attrs:{id:"2"}},[t._v(t._s(t.B[1]))]),r("td",{attrs:{id:"9"}},[t._v(t._s(t.B[8]))]),r("td",{attrs:{id:"17"}},[t._v(t._s(t.I[1]))]),r("td",{attrs:{id:"24"}},[t._v(t._s(t.I[8]))]),r("td",{attrs:{id:"32"}},[t._v(t._s(t.N[1]))]),r("td",{attrs:{id:"39"}},[t._v(t._s(t.N[8]))]),r("td",{attrs:{id:"47"}},[t._v(t._s(t.G[1]))]),r("td",{attrs:{id:"54"}},[t._v(t._s(t.G[8]))]),r("td",{attrs:{id:"62"}},[t._v(t._s(t.O[1]))]),r("td",{attrs:{id:"69"}},[t._v(t._s(t.O[8]))])]),r("tr",[r("td",{attrs:{id:"3"}},[t._v(t._s(t.B[2]))]),r("td",{attrs:{id:"10"}},[t._v(t._s(t.B[9]))]),r("td",{attrs:{id:"18"}},[t._v(t._s(t.I[2]))]),r("td",{attrs:{id:"25"}},[t._v(t._s(t.I[9]))]),r("td",{attrs:{id:"33"}},[t._v(t._s(t.N[2]))]),r("td",{attrs:{id:"40"}},[t._v(t._s(t.N[9]))]),r("td",{attrs:{id:"48"}},[t._v(t._s(t.G[2]))]),r("td",{attrs:{id:"55"}},[t._v(t._s(t.G[9]))]),r("td",{attrs:{id:"63"}},[t._v(t._s(t.O[2]))]),r("td",{attrs:{id:"70"}},[t._v(t._s(t.O[9]))])]),r("tr",[r("td",{attrs:{id:"4"}},[t._v(t._s(t.B[3]))]),r("td",{attrs:{id:"11"}},[t._v(t._s(t.B[10]))]),r("td",{attrs:{id:"19"}},[t._v(t._s(t.I[3]))]),r("td",{attrs:{id:"26"}},[t._v(t._s(t.I[10]))]),r("td",{attrs:{id:"34"}},[t._v(t._s(t.N[3]))]),r("td",{attrs:{id:"41"}},[t._v(t._s(t.N[10]))]),r("td",{attrs:{id:"49"}},[t._v(t._s(t.G[3]))]),r("td",{attrs:{id:"56"}},[t._v(t._s(t.G[10]))]),r("td",{attrs:{id:"64"}},[t._v(t._s(t.O[3]))]),r("td",{attrs:{id:"71"}},[t._v(t._s(t.O[10]))])]),r("tr",[r("td",{attrs:{id:"5"}},[t._v(t._s(t.B[4]))]),r("td",{attrs:{id:"12"}},[t._v(t._s(t.B[11]))]),r("td",{attrs:{id:"20"}},[t._v(t._s(t.I[4]))]),r("td",{attrs:{id:"27"}},[t._v(t._s(t.I[11]))]),r("td",{attrs:{id:"35"}},[t._v(t._s(t.N[4]))]),r("td",{attrs:{id:"42"}},[t._v(t._s(t.N[11]))]),r("td",{attrs:{id:"50"}},[t._v(t._s(t.G[4]))]),r("td",{attrs:{id:"57"}},[t._v(t._s(t.G[11]))]),r("td",{attrs:{id:"65"}},[t._v(t._s(t.O[4]))]),r("td",{attrs:{id:"72"}},[t._v(t._s(t.O[11]))])]),r("tr",[r("td",{attrs:{id:"6"}},[t._v(t._s(t.B[5]))]),r("td",{attrs:{id:"13"}},[t._v(t._s(t.B[12]))]),r("td",{attrs:{id:"21"}},[t._v(t._s(t.I[5]))]),r("td",{attrs:{id:"28"}},[t._v(t._s(t.I[12]))]),r("td",{attrs:{id:"36"}},[t._v(t._s(t.N[5]))]),r("td",{attrs:{id:"43"}},[t._v(t._s(t.N[12]))]),r("td",{attrs:{id:"51"}},[t._v(t._s(t.G[5]))]),r("td",{attrs:{id:"58"}},[t._v(t._s(t.G[12]))]),r("td",{attrs:{id:"66"}},[t._v(t._s(t.O[5]))]),r("td",{attrs:{id:"73"}},[t._v(t._s(t.O[12]))])]),r("tr",[r("td",{attrs:{id:"7"}},[t._v(t._s(t.B[6]))]),r("td",{attrs:{id:"14"}},[t._v(t._s(t.B[13]))]),r("td",{attrs:{id:"22"}},[t._v(t._s(t.I[6]))]),r("td",{attrs:{id:"29"}},[t._v(t._s(t.I[13]))]),r("td",{attrs:{id:"37"}},[t._v(t._s(t.N[6]))]),r("td",{attrs:{id:"44"}},[t._v(t._s(t.N[13]))]),r("td",{attrs:{id:"52"}},[t._v(t._s(t.G[6]))]),r("td",{attrs:{id:"59"}},[t._v(t._s(t.G[13]))]),r("td",{attrs:{id:"67"}},[t._v(t._s(t.O[6]))]),r("td",{attrs:{id:"74"}},[t._v(t._s(t.O[13]))])])]),r("table",{staticClass:"tabela"},[r("tr",[r("th",{attrs:{id:"15"}},[t._v(t._s(t.B[14]))]),r("th",{attrs:{id:"30"}},[t._v(t._s(t.I[14]))]),r("th",{attrs:{id:"45"}},[t._v(t._s(t.N[14]))]),r("th",{attrs:{id:"60"}},[t._v(t._s(t.G[14]))]),r("th",{attrs:{id:"75"}},[t._v(t._s(t.O[14]))])])])])]):t._e()},g=[],f={name:"PlacarManage",props:{placar:null},emits:["enviarUltimoNumeroSorteado"],data(){return{nomeJogador:"",qtdCartelasJogador:"",letras:[],B:[],I:[],N:[],G:[],O:[],letraSorteada:"",ultimoNumeroSorteado:"",penultimoNumeroSorteado:""}},watch:{placar(){this.instanciarPlacar()},letraSorteada(){this.corDaLetra()}},components:{},methods:{enviarNumeroSorteado(){this.$emit("enviar-ultimo-numero-sorteado",this.ultimoNumeroSorteado,this.letraSorteada)},instanciarPlacar(){this.letraSorteada="",this.ultimoNumeroSorteado="",this.letras=this.placar.letras,this.B=this.placar.B,this.I=this.placar.I,this.N=this.placar.N,this.G=this.placar.G,this.O=this.placar.O},sortearNumero(){this.placar.sortearNumero(),this.penultimoNumeroSorteado=this.ultimoNumeroSorteado,this.ultimoNumeroSorteado=this.placar.ultimoNumeroSorteado+"",this.letraSorteada=this.placar.letraSorteada,this.enviarUltimoNumeroSorteado=this.ultimoNumeroSorteado,this.marcaPlacar()},corDaLetra(){if(console.log(this.letraSorteada),"B"===this.letraSorteada){let t=document.querySelector(".sorteadosLetra");t.style.color="#e61d1d"}else if("I"===this.letraSorteada){let t=document.querySelector(".sorteadosLetra");t.style.color="#272ae6"}else if("N"===this.letraSorteada){let t=document.querySelector(".sorteadosLetra");t.style.color="#a6a809"}else if("G"===this.letraSorteada){let t=document.querySelector(".sorteadosLetra");t.style.color="#06832b"}else if("O"===this.letraSorteada){let t=document.querySelector(".sorteadosLetra");t.style.color="#da1bd0"}},marcaPlacar(){if(""!=this.ultimoNumeroSorteado){let t;""!=this.penultimoNumeroSorteado&&(t=document.getElementById(this.penultimoNumeroSorteado),t.style.background="mediumseagreen"),t=document.getElementById(this.ultimoNumeroSorteado),t.style.background="cyan"}}}},p=f,N=r(1001),S=(0,N.Z)(p,v,g,!1,null,"ecbb77ce",null),G=S.exports,O=function(){var t=this,a=t.$createElement,r=t._self._c||a;return this.jogadores.length>0?r("div",{staticClass:"principal"},t._l(t.jogadores,(function(a,e){return r("div",{key:e},[r("b-card",{staticClass:"mb-3",attrs:{"img-src":"https://pickaface.net/gallery/avatar/unr_profesorgenerico1_170329_1619_9pmc8o.png","img-alt":"Card image","img-left":""}},[r("b-card-text",[r("h1",{staticClass:"nome-jogador"},[t._v(t._s(a.nome))]),t._l(a.cartelas,(function(a,e){return r("div",{key:e,staticClass:"alinhar-cartelas"},[r("cartela-manage",{attrs:{cartela:a,ultimoNumeroSorteado:t.ultimoNumeroSorteado,letraSorteada:t.letraSorteada}})],1)}))],2)],1)],1)})),0):t._e()},b=[],C=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",[r("div",{staticClass:"alinhar-cartelas"},[r("table",{staticClass:"cartela"},[t._m(0),r("tr",[r("td",{attrs:{id:"1"}},[t._v(t._s(t.cartela.B[0]))]),r("td",{attrs:{id:"6"}},[t._v(t._s(t.cartela.I[0]))]),r("td",{attrs:{id:"11"}},[t._v(t._s(t.cartela.N[0]))]),r("td",{attrs:{id:"16"}},[t._v(t._s(t.cartela.G[0]))]),r("td",{attrs:{id:"21"}},[t._v(t._s(t.cartela.O[0]))])]),r("tr",[r("td",{attrs:{id:"2"}},[t._v(t._s(t.cartela.B[1]))]),r("td",{attrs:{id:"7"}},[t._v(t._s(t.cartela.I[1]))]),r("td",{attrs:{id:"12"}},[t._v(t._s(t.cartela.N[1]))]),r("td",{attrs:{id:"17"}},[t._v(t._s(t.cartela.G[1]))]),r("td",{attrs:{id:"22"}},[t._v(t._s(t.cartela.O[1]))])]),r("tr",[r("td",{attrs:{id:"3"}},[t._v(t._s(t.cartela.B[2]))]),r("td",{attrs:{id:"8"}},[t._v(t._s(t.cartela.I[2]))]),r("td",{attrs:{id:"13"}},[t._v("FREE")]),r("td",{attrs:{id:"18"}},[t._v(t._s(t.cartela.G[2]))]),r("td",{attrs:{id:"23"}},[t._v(t._s(t.cartela.O[2]))])]),r("tr",[r("td",{attrs:{id:"4"}},[t._v(t._s(t.cartela.B[3]))]),r("td",{attrs:{id:"9"}},[t._v(t._s(t.cartela.I[3]))]),r("td",{attrs:{id:"14"}},[t._v(t._s(t.cartela.N[3]))]),r("td",{attrs:{id:"19"}},[t._v(t._s(t.cartela.G[3]))]),r("td",{attrs:{id:"24"}},[t._v(t._s(t.cartela.O[3]))])]),r("tr",[r("td",{attrs:{id:"5"}},[t._v(t._s(t.cartela.B[4]))]),r("td",{attrs:{id:"10"}},[t._v(t._s(t.cartela.I[4]))]),r("td",{attrs:{id:"15"}},[t._v(t._s(t.cartela.N[4]))]),r("td",{attrs:{id:"20"}},[t._v(t._s(t.cartela.G[4]))]),r("td",{attrs:{id:"25"}},[t._v(t._s(t.cartela.O[4]))])])])])])},B=[function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("tr",[r("th",{staticClass:"thBingo"},[t._v("B")]),r("th",{staticClass:"thBingo"},[t._v("I")]),r("th",{staticClass:"thBingo"},[t._v("N")]),r("th",{staticClass:"thBingo"},[t._v("G")]),r("th",{staticClass:"thBingo"},[t._v("O")])])}],I={name:"CartelaManage",props:{cartela:h,ultimoNumeroSorteado:String,letraSorteada:String},data(){return{}},watch:{ultimoNumeroSorteado(){""!=this.ultimoNumeroSorteado&&this.marcaNumeroSorteado()}},methods:{marcaNumeroSorteado(){switch(this.letraSorteada){case"B":if(console.log(this.cartela.B.indexOf(parseInt(this.ultimoNumeroSorteado))),this.cartela.B.indexOf(parseInt(this.ultimoNumeroSorteado))>=0){console.log(this.ultimoNumeroSorteado),console.log(this.letraSorteada);let t=document.getElementById(this.cartela.B.indexOf(parseInt(this.ultimoNumeroSorteado))+1);console.log(t),console.log(),t.style.background="#f3f3f3",console.log(t)}break;case"I":break;case"N":break;case"G":break;case"O":break;default:console.log("No case")}}}},P=I,x=(0,N.Z)(P,C,B,!1,null,null,null),y=x.exports,q={props:{jogadores:[],ultimoNumeroSorteado:String,letraSorteada:String},data(){return{}},watch:{cartelas(){}},components:{CartelaManage:y},methods:{instanciarJogadores(){this.nomeJogador=this.jogadores}}},j=q,J=(0,N.Z)(j,O,b,!1,null,"4fd3d374",null),w=J.exports,T=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",[r("h1",[t._v("Nome do Ganhador: "+t._s(this.ganhador.nome))]),r("h3",[t._v("Numeros sorteados: "+t._s(this.ganhador.numerosGanhadores))])])},k=[],M={name:"ResultadoManager",props:{ganhador:m}},E=M,D=(0,N.Z)(E,T,k,!1,null,"501dd076",null),L=D.exports,$={data(){return{bingo:null,placar:null,jogadores:[],nomeJogador:"",qtdCartelasJogador:"",ganhador:null,ultimoNumeroSorteado:"",letraSorteada:""}},components:{PlacarManage:G,JogadorManage:w,ResultadoManager:L},methods:{conferirCartela(t,a){this.ultimoNumeroSorteado=t,this.letraSorteada=a,this.bingo.conferirVencedor(t),null!=this.bingo.ganhador&&(this.ganhador=this.bingo.ganhador)},comecar(){let t=_.comecar();this.ganhador=null,t.instanciarPlacar(),this.placar=t.placar,this.jogadores=t.jogadores,this.bingo=t,this.placar=this.bingo.placar},cadastrarJogador(){if(""!=this.nomeJogador){let t=new u(this.nomeJogador,this.qtdCartelasJogador);t.inicializarCartelas(this.qtdCartelasJogador),this.jogadores.push(t)}else alert("Jogador precisa de um nome")}}},A=$,Z=(0,N.Z)(A,i,d,!1,null,null,null),z=Z.exports,R={name:"App",components:{BingoManager:z}},V=R,F=(0,N.Z)(V,s,o,!1,null,null,null),Q=F.exports,U=r(8262),X=r(3266);r(44);e["default"].use(U.XG7),e["default"].use(X.A7),e["default"].config.productionTip=!1,new e["default"]({render:t=>t(Q)}).$mount("#app")},5844:function(t,a,r){t.exports=r.p+"img/bingo.3815d158.png"}},a={};function r(e){var s=a[e];if(void 0!==s)return s.exports;var o=a[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,function(){var t=[];r.O=function(a,e,s,o){if(!e){var i=1/0;for(h=0;h<t.length;h++){e=t[h][0],s=t[h][1],o=t[h][2];for(var d=!0,n=0;n<e.length;n++)(!1&o||i>=o)&&Object.keys(r.O).every((function(t){return r.O[t](e[n])}))?e.splice(n--,1):(d=!1,o<i&&(i=o));if(d){t.splice(h--,1);var l=s();void 0!==l&&(a=l)}}return a}o=o||0;for(var h=t.length;h>0&&t[h-1][2]>o;h--)t[h]=t[h-1];t[h]=[e,s,o]}}(),function(){r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,{a:a}),a}}(),function(){r.d=function(t,a){for(var e in a)r.o(a,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:a[e]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="/teste/"}(),function(){var t={143:0};r.O.j=function(a){return 0===t[a]};var a=function(a,e){var s,o,i=e[0],d=e[1],n=e[2],l=0;if(i.some((function(a){return 0!==t[a]}))){for(s in d)r.o(d,s)&&(r.m[s]=d[s]);if(n)var h=n(r)}for(a&&a(e);l<i.length;l++)o=i[l],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(h)},e=self["webpackChunkhello_world"]=self["webpackChunkhello_world"]||[];e.forEach(a.bind(null,0)),e.push=a.bind(null,e.push.bind(e))}();var e=r.O(void 0,[998],(function(){return r(2480)}));e=r.O(e)})();
//# sourceMappingURL=app.fa4c839f.js.map