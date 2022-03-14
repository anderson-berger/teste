(function(){"use strict";var t={3112:function(t,a,r){var s=r(8935),o=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("img",{attrs:{alt:"Vue logo",src:r(5844)}}),s("bingoManager")],1)},e=[],i=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("b-container",{attrs:{fluid:""}},[r("b-row",[r("b-col",{attrs:{md:"4"}},[t.bingo&&t.jogadores.length>0?r("div",[r("placar-manage",{attrs:{placar:t.placar},on:{"enviar-ultimo-numero-sorteado":t.conferirCartela}})],1):t._e()]),r("b-col",{attrs:{md:"4"}},[r("div",[r("button",{staticClass:"submit-btn",on:{click:function(a){return t.comecar()}}},[t._v("Comerçar")]),t.bingo?r("div",{attrs:{id:"jogador-form"}},[r("div",{staticClass:"imput-container"},[r("label",{attrs:{for:"nome"}},[t._v("Nome do jogador:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.nomeJogador,expression:"nomeJogador"}],attrs:{type:"text",id:"nome",name:"name",min:"3",placeholder:"Digite o nome do jogador"},domProps:{value:t.nomeJogador},on:{input:function(a){a.target.composing||(t.nomeJogador=a.target.value)}}}),t._v(" "+t._s(this.nomeJogador)+" ")]),r("div",{staticClass:"imput-container"},[r("label",{attrs:{for:"nome"}},[t._v("Quantidade de cartelas:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.qtdCartelasJogador,expression:"qtdCartelasJogador"}],attrs:{type:"number",id:"cartela",name:"cartela",min:"0",max:"6",placeholder:"Quantas cartelas ele comprou?"},domProps:{value:t.qtdCartelasJogador},on:{input:function(a){a.target.composing||(t.qtdCartelasJogador=a.target.value)}}}),t._v(" "+t._s(t.qtdCartelasJogador)+" ")]),r("button",{staticClass:"submit-btn",on:{click:function(a){return t.cadastrarJogador()}}},[t._v(" Criar Jogador ")])]):t._e()])]),null!=this.ganhador?r("b-col",{attrs:{md:"4"}},[r("resultado-manager",{attrs:{ganhador:this.ganhador}})],1):t._e()],1),r("b-row",[r("jogador-manage",{attrs:{jogadores:t.jogadores}})],1)],1)},n=[],d=r(3796);class l{constructor(){this.letras=["B","I","N","G","O"],this.B=[],this.I=[],this.N=[],this.G=[],this.O=[],this.numeroSorteado=[],this.letraSorteada=null,this.ultimoNumeroSorteado=null}inicializarPlacar(){if(c.qtdNumerosTotal%5===0)for(let t=1;t<c.qtdNumerosTotal+1;t++)this.B.length<c.qtdNumerosTotal/5?(this.B.push(t),this.numeroSorteado.push(t)):this.I.length<c.qtdNumerosTotal/5?(this.I.push(t),this.numeroSorteado.push(t)):this.N.length<c.qtdNumerosTotal/5?(this.N.push(t),this.numeroSorteado.push(t)):this.G.length<c.qtdNumerosTotal/5?(this.G.push(t),this.numeroSorteado.push(t)):this.O.length<c.qtdNumerosTotal/5&&(this.O.push(t),this.numeroSorteado.push(t))}sortearNumero(){if(this.numeroSorteado.length>0){let t=Math.floor(Math.random()*this.numeroSorteado.length);t<0&&(t=0),this.ultimoNumeroSorteado=this.numeroSorteado[t],this.letraDoNumero(this.ultimoNumeroSorteado),this.numeroSorteado.splice(this.numeroSorteado.indexOf(this.ultimoNumeroSorteado),1)}}letraDoNumero(t){t<=c.qtdNumerosTotal/5?this.letraSorteada="B":t>c.qtdNumerosTotal/5&&t<=c.qtdNumerosTotal/5*2?this.letraSorteada="I":t>c.qtdNumerosTotal/5*2&&t<=c.qtdNumerosTotal/5*3?this.letraSorteada="N":t>c.qtdNumerosTotal/5*3&&t<=c.qtdNumerosTotal/5*4?this.letraSorteada="G":t>c.qtdNumerosTotal/5*4&&t<=c.qtdNumerosTotal&&(this.letraSorteada="O")}}class h{constructor(){this.B=[],this.I=[],this.N=[],this.G=[],this.O=[]}criarCartela(){let t=5;if(c.qtdNumerosTotal%t===0){let a=c.qtdNumerosTotal/t,r=a+1,s=a-a+1;this.escolherNumerosAleatorios(this.B,r,s),r=2*a+1,s=2*a-a+1,this.escolherNumerosAleatorios(this.I,r,s),r=3*a+1,s=3*a-a+1,this.escolherNumerosAleatorios(this.N,r,s),this.espacoEmBranco(this.N),r=4*a+1,s=4*a-a+1,this.escolherNumerosAleatorios(this.G,r,s),r=5*a+1,s=5*a-a+1,this.escolherNumerosAleatorios(this.O,r,s)}}escolherNumerosAleatorios(t,a,r){for(let s=0;s<5;s++){let o=Math.floor(Math.random()*(a-r)+r);t.indexOf(o)>=0?s--:t.push(o)}}espacoEmBranco(t){t[2]=null}}class u{constructor(t,a){u.ID++,this.qtdCartelas=a,this.id=u.ID,this.nome=t,this.cartelas=[]}comprarCartela(){this.cartelas.push(new h)}inicializarCartelas(t){for(let a=0;a<t;a++){let t=new h(c.qtdNumerosTotal);t.criarCartela(),this.cartelas.push(t)}}}(0,d.Z)(u,"ID",0);class _{constructor(){this.numerosSorteados=[],this.temGanhador=!1,this.numerosGanhadores=[]}conferirCartelasDoJogador(t,a){this.numerosSorteados.indexOf(t)<0&&this.numerosSorteados.push(t);let r=a.cartelas;this.conferirCartelas(r)}conferirCartelas(t){for(let a=0;a<t.length;a++)0==this.temGanhador&&this.regrasParaGanharPorColuna(t[a].B),!1===this.temGanhador&&this.regrasParaGanharPorColuna(t[a].I),!1===this.temGanhador&&this.regrasParaGanharPorColuna(t[a].N),0==this.temGanhador&&this.regrasParaGanharPorColuna(t[a].G),0==this.temGanhador&&this.regrasParaGanharPorColuna(t[a].O);if(!1===this.temGanhador)for(let a=0;a<t.length;a++)this.regrasParaGanharPorLinha(t[a].B,t[a].I,t[a].N,t[a].G,t[a].O);if(!1===this.temGanhador)for(let a=0;a<t.length;a++)this.regrasParaGanharDeCimaParaBaixo(t[a].B,t[a].I,t[a].G,t[a].O);if(!1===this.temGanhador)for(let a=0;a<t.length;a++)this.regrasParaGanharDeBaixoParaCima(t[a].B,t[a].I,t[a].G,t[a].O);return!0===this.temGanhador}regrasParaGanharPorColuna(t){this.numerosGanhadores=[];for(let a=0;a<t.length;a++){if(this.numerosSorteados.indexOf(t[a])<0&&""!=t[a])return;this.numerosGanhadores.push(t[a])}this.temGanhador=!0}regrasParaGanharPorLinha(t,a,r,s,o){for(let e=0;e<t.length;e++){if(this.temGanhador)return;if(this.numerosGanhadores=[],this.numerosSorteados.indexOf(t[e])>=0&&this.numerosSorteados.indexOf(a[e])>=0&&(this.numerosSorteados.indexOf(r[e])>=0||""==this.numerosSorteados.indexOf(r[e]))&&this.numerosSorteados.indexOf(s[e])>=0&&this.numerosSorteados.indexOf(o[e])>=0)return this.numerosGanhadores.push(t[e]),this.numerosGanhadores.push(a[e]),this.numerosGanhadores.push(r[e]),this.numerosGanhadores.push(s[e]),this.numerosGanhadores.push(o[e]),void(this.temGanhador=!0)}}regrasParaGanharDeCimaParaBaixo(t,a,r,s){if(this.numerosGanhadores=[],this.numerosSorteados.indexOf(t[0])>=0&&this.numerosSorteados.indexOf(a[1])>=0&&this.numerosSorteados.indexOf(r[3])>=0&&this.numerosSorteados.indexOf(s[4])>=0)return this.numerosGanhadores.push(t[0]),this.numerosGanhadores.push(a[1]),this.numerosGanhadores.push(r[3]),this.numerosGanhadores.push(s[4]),void(this.temGanhador=!0)}regrasParaGanharDeBaixoParaCima(t,a,r,s){if(this.numerosGanhadores=[],this.numerosSorteados.indexOf(t[4])>=0&&this.numerosSorteados.indexOf(a[3])>=0&&this.numerosSorteados.indexOf(r[1])>=0&&this.numerosSorteados.indexOf(s[0])>=0)return this.numerosGanhadores.push(t[4]),this.numerosGanhadores.push(a[3]),this.numerosGanhadores.push(r[1]),this.numerosGanhadores.push(s[0]),void(this.temGanhador=!0)}}class m{constructor(t,a){this.nome=t,this.numerosGanhadores=a}}class c{constructor(){this.jogadores=[],this.placar=null,this.regras=null,this.ganhador=null}static comecar(){const t=new c;return t.regras=new _,t}instanciarPlacar(){let t=new l;t.inicializarPlacar(),this.placar=t}cadastrarJogador(t,a){let r=new u(t,a);r.inicializarCartelas(a),this.jogador.push(r)}conferirVencedor(t){for(let a=0;a<this.jogadores.length;a++)this.regras.conferirCartelasDoJogador(t,this.jogadores[a]),!0===this.regras.temGanhador&&(this.ganhador=new m(this.jogadores[a].nome,this.regras.numerosGanhadores),a=this.jogadores.length)}}(0,d.Z)(c,"qtdNumerosTotal",75);var v=function(){var t=this,a=t.$createElement,r=t._self._c||a;return null!=t.placar?r("div",{staticClass:"mb-4 placar"},[null==t.letras[0]?r("div",[t._v(t._s(t.instanciarPlacar()))]):t._e(),r("button",{staticClass:"submit-btn",on:{click:[this.sortearNumero,t.enviarNumeroSorteado]}},[t._v(" Sortear Numero ")]),""!=t.letraSorteada?r("div",{staticClass:"teste"},[r("div",{staticClass:"anel"}),""!=t.letraSorteada?r("span",{staticClass:"sorteados letra"},[t._v(t._s(t.letraSorteada))]):t._e(),null!=t.ultimoNumeroSorteado?r("span",{staticClass:"sorteados numero"},[t._v(t._s(t.ultimoNumeroSorteado))]):t._e()]):t._e(),r("table",{staticClass:"tabela"},[r("tr",[r("th",[t._v(t._s(t.letras[0]))]),r("th",[t._v(t._s(t.letras[1]))]),r("th",[t._v(t._s(t.letras[2]))]),r("th",[t._v(t._s(t.letras[3]))]),r("th",[t._v(t._s(t.letras[4]))])])]),r("table",[r("tr",[r("td",[t._v(t._s(t.B[0]))]),r("td",[t._v(t._s(t.B[7]))]),r("td",[t._v(t._s(t.I[0]))]),r("td",[t._v(t._s(t.I[7]))]),r("td",[t._v(t._s(t.N[0]))]),r("td",[t._v(t._s(t.N[7]))]),r("td",[t._v(t._s(t.G[0]))]),r("td",[t._v(t._s(t.G[7]))]),r("td",[t._v(t._s(t.O[0]))]),r("td",[t._v(t._s(t.O[7]))])]),r("tr",[r("td",[t._v(t._s(t.B[1]))]),r("td",[t._v(t._s(t.B[8]))]),r("td",[t._v(t._s(t.I[1]))]),r("td",[t._v(t._s(t.I[8]))]),r("td",[t._v(t._s(t.N[1]))]),r("td",[t._v(t._s(t.N[8]))]),r("td",[t._v(t._s(t.G[1]))]),r("td",[t._v(t._s(t.G[8]))]),r("td",[t._v(t._s(t.O[1]))]),r("td",[t._v(t._s(t.O[8]))])]),r("tr",[r("td",[t._v(t._s(t.B[2]))]),r("td",[t._v(t._s(t.B[9]))]),r("td",[t._v(t._s(t.I[2]))]),r("td",[t._v(t._s(t.I[9]))]),r("td",[t._v(t._s(t.N[2]))]),r("td",[t._v(t._s(t.N[9]))]),r("td",[t._v(t._s(t.G[2]))]),r("td",[t._v(t._s(t.G[9]))]),r("td",[t._v(t._s(t.O[2]))]),r("td",[t._v(t._s(t.O[9]))])]),r("tr",[r("td",[t._v(t._s(t.B[3]))]),r("td",[t._v(t._s(t.B[10]))]),r("td",[t._v(t._s(t.I[3]))]),r("td",[t._v(t._s(t.I[10]))]),r("td",[t._v(t._s(t.N[3]))]),r("td",[t._v(t._s(t.N[10]))]),r("td",[t._v(t._s(t.G[3]))]),r("td",[t._v(t._s(t.G[10]))]),r("td",[t._v(t._s(t.O[3]))]),r("td",[t._v(t._s(t.O[10]))])]),r("tr",[r("td",[t._v(t._s(t.B[4]))]),r("td",[t._v(t._s(t.B[11]))]),r("td",[t._v(t._s(t.I[4]))]),r("td",[t._v(t._s(t.I[11]))]),r("td",[t._v(t._s(t.N[4]))]),r("td",[t._v(t._s(t.N[11]))]),r("td",[t._v(t._s(t.G[4]))]),r("td",[t._v(t._s(t.G[11]))]),r("td",[t._v(t._s(t.O[4]))]),r("td",[t._v(t._s(t.O[11]))])]),r("tr",[r("td",[t._v(t._s(t.B[5]))]),r("td",[t._v(t._s(t.B[12]))]),r("td",[t._v(t._s(t.I[5]))]),r("td",[t._v(t._s(t.I[12]))]),r("td",[t._v(t._s(t.N[5]))]),r("td",[t._v(t._s(t.N[12]))]),r("td",[t._v(t._s(t.G[5]))]),r("td",[t._v(t._s(t.G[12]))]),r("td",[t._v(t._s(t.O[5]))]),r("td",[t._v(t._s(t.O[12]))])]),r("tr",[r("td",[t._v(t._s(t.B[6]))]),r("td",[t._v(t._s(t.B[13]))]),r("td",[t._v(t._s(t.I[6]))]),r("td",[t._v(t._s(t.I[13]))]),r("td",[t._v(t._s(t.N[6]))]),r("td",[t._v(t._s(t.N[13]))]),r("td",[t._v(t._s(t.G[6]))]),r("td",[t._v(t._s(t.G[13]))]),r("td",[t._v(t._s(t.O[6]))]),r("td",[t._v(t._s(t.O[13]))])])]),r("table",{staticClass:"tabela"},[r("tr",[r("th",[t._v(t._s(t.B[14]))]),r("th",[t._v(t._s(t.I[14]))]),r("th",[t._v(t._s(t.N[14]))]),r("th",[t._v(t._s(t.G[14]))]),r("th",[t._v(t._s(t.O[14]))])])])]):t._e()},g=[],p={name:"PlacarManage",props:{placar:null},emits:["enviarUltimoNumeroSorteado"],data(){return{nomeJogador:"",qtdCartelasJogador:"",letras:[],B:[],I:[],N:[],G:[],O:[],letraSorteada:"",ultimoNumeroSorteado:""}},watch:{placar(){this.instanciarPlacar()}},components:{},methods:{enviarNumeroSorteado(){this.$emit("enviar-ultimo-numero-sorteado",this.ultimoNumeroSorteado)},instanciarPlacar(){this.letraSorteada="",this.ultimoNumeroSorteado="",this.letras=this.placar.letras,this.B=this.placar.B,this.I=this.placar.I,this.N=this.placar.N,this.G=this.placar.G,this.O=this.placar.O},sortearNumero(){this.placar.sortearNumero(),this.letraSorteada=this.placar.letraSorteada,this.ultimoNumeroSorteado=this.placar.ultimoNumeroSorteado,this.enviarUltimoNumeroSorteado=this.ultimoNumeroSorteado}}},f=p,G=r(1001),N=(0,G.Z)(f,v,g,!1,null,"61883ade",null),B=N.exports,O=function(){var t=this,a=t.$createElement,r=t._self._c||a;return this.jogadores.length>0?r("div",{staticClass:"principal"},t._l(t.jogadores,(function(a,s){return r("div",{key:s},[r("b-card",{staticClass:"mb-3",attrs:{"img-src":"https://pickaface.net/gallery/avatar/unr_profesorgenerico1_170329_1619_9pmc8o.png","img-alt":"Card image","img-left":""}},[r("b-card-text",[r("h1",{staticClass:"nome-jogador"},[t._v(t._s(a.nome))]),r("cartela-manage",{attrs:{cartelas:a.cartelas}})],1)],1)],1)})),0):t._e()},S=[],C=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",t._l(t.cartelas,(function(a,s){return r("div",{key:s,staticClass:"alinhar-cartelas"},[r("table",{staticClass:"cartela"},[t._m(0,!0),r("tr",[r("td",{attrs:{id:"B"}},[t._v(t._s(a.B[0]))]),r("td",{attrs:{id:"B"}},[t._v(t._s(a.I[0]))]),r("td",{attrs:{id:"B"}},[t._v(t._s(a.N[0]))]),r("td",{attrs:{id:"B"}},[t._v(t._s(a.G[0]))]),r("td",{attrs:{id:"B"}},[t._v(t._s(a.O[0]))])]),r("tr",[r("td",{attrs:{id:"B"}},[t._v(t._s(a.B[1]))]),r("td",{attrs:{id:"B"}},[t._v(t._s(a.I[1]))]),r("td",{attrs:{id:"B"}},[t._v(t._s(a.N[1]))]),r("td",{attrs:{id:"B"}},[t._v(t._s(a.G[1]))]),r("td",{attrs:{id:"B"}},[t._v(t._s(a.O[1]))])]),r("tr",[r("td",{attrs:{id:"B"}},[t._v(t._s(a.B[2]))]),r("td",{attrs:{id:"B"}},[t._v(t._s(a.I[2]))]),r("td",{attrs:{id:"B"}},[t._v("FREE")]),r("td",{attrs:{id:"B"}},[t._v(t._s(a.G[2]))]),r("td",{attrs:{id:"B"}},[t._v(t._s(a.O[2]))])]),r("tr",[r("td",{attrs:{id:"B"}},[t._v(t._s(a.B[3]))]),r("td",{attrs:{id:"B"}},[t._v(t._s(a.I[3]))]),r("td",{attrs:{id:"B"}},[t._v(t._s(a.N[3]))]),r("td",{attrs:{id:"B"}},[t._v(t._s(a.G[3]))]),r("td",{attrs:{id:"B"}},[t._v(t._s(a.O[3]))])]),r("tr",[r("td",{attrs:{id:"B"}},[t._v(t._s(a.B[4]))]),r("td",{attrs:{id:"B"}},[t._v(t._s(a.I[4]))]),r("td",{attrs:{id:"B"}},[t._v(t._s(a.N[4]))]),r("td",{attrs:{id:"B"}},[t._v(t._s(a.G[4]))]),r("td",{attrs:{id:"B"}},[t._v(t._s(a.O[4]))])])])])})),0)},b=[function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("tr",[r("th",{staticClass:"thBingo"},[t._v("B")]),r("th",{staticClass:"thBingo"},[t._v("I")]),r("th",{staticClass:"thBingo"},[t._v("N")]),r("th",{staticClass:"thBingo"},[t._v("G")]),r("th",{staticClass:"thBingo"},[t._v("O")])])}],P={name:"CartelaManage",props:{cartelas:[]}},x=P,I=(0,G.Z)(x,C,b,!1,null,null,null),q=I.exports,j={props:{jogadores:[]},data(){return{nomeJogador:"",qtdCartelasJogador:"",cartelas:[]}},watch:{cartelas(){}},components:{CartelaManage:q},methods:{instanciarJogadores(){this.nomeJogador=this.jogadores}}},J=j,w=(0,G.Z)(J,O,S,!1,null,"45b26bd3",null),T=w.exports,y=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",[r("h1",[t._v("Nome do Ganhador: "+t._s(this.ganhador.nome))]),r("h3",[t._v("Numeros sorteados: "+t._s(this.ganhador.numerosGanhadores))])])},M=[],D={name:"ResultadoManager",props:{ganhador:m}},E=D,k=(0,G.Z)(E,y,M,!1,null,"501dd076",null),$=k.exports,A={data(){return{bingo:null,placar:null,jogadores:[],nomeJogador:"",qtdCartelasJogador:"",ganhador:null}},components:{PlacarManage:B,JogadorManage:T,ResultadoManager:$},methods:{conferirCartela(t){this.bingo.conferirVencedor(t),null!=this.bingo.ganhador&&(this.ganhador=this.bingo.ganhador)},comecar(){let t=c.comecar();this.ganhador=null,t.instanciarPlacar(),this.placar=t.placar,this.jogadores=t.jogadores,this.bingo=t,this.placar=this.bingo.placar},cadastrarJogador(){if(""!=this.nomeJogador){let t=new u(this.nomeJogador,this.qtdCartelasJogador);t.inicializarCartelas(this.qtdCartelasJogador),this.jogadores.push(t)}else alert("Jogador precisa de um nome")}}},Z=A,z=(0,G.Z)(Z,i,n,!1,null,null,null),R=z.exports,V={name:"App",components:{BingoManager:R}},F=V,L=(0,G.Z)(F,o,e,!1,null,null,null),Q=L.exports,U=r(8262),X=r(3266);r(44);s["default"].use(U.XG7),s["default"].use(X.A7),s["default"].config.productionTip=!1,new s["default"]({render:t=>t(Q)}).$mount("#app")},5844:function(t,a,r){t.exports=r.p+"img/bingo.3815d158.png"}},a={};function r(s){var o=a[s];if(void 0!==o)return o.exports;var e=a[s]={exports:{}};return t[s](e,e.exports,r),e.exports}r.m=t,function(){var t=[];r.O=function(a,s,o,e){if(!s){var i=1/0;for(h=0;h<t.length;h++){s=t[h][0],o=t[h][1],e=t[h][2];for(var n=!0,d=0;d<s.length;d++)(!1&e||i>=e)&&Object.keys(r.O).every((function(t){return r.O[t](s[d])}))?s.splice(d--,1):(n=!1,e<i&&(i=e));if(n){t.splice(h--,1);var l=o();void 0!==l&&(a=l)}}return a}e=e||0;for(var h=t.length;h>0&&t[h-1][2]>e;h--)t[h]=t[h-1];t[h]=[s,o,e]}}(),function(){r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,{a:a}),a}}(),function(){r.d=function(t,a){for(var s in a)r.o(a,s)&&!r.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:a[s]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="/teste/"}(),function(){var t={143:0};r.O.j=function(a){return 0===t[a]};var a=function(a,s){var o,e,i=s[0],n=s[1],d=s[2],l=0;if(i.some((function(a){return 0!==t[a]}))){for(o in n)r.o(n,o)&&(r.m[o]=n[o]);if(d)var h=d(r)}for(a&&a(s);l<i.length;l++)e=i[l],r.o(t,e)&&t[e]&&t[e][0](),t[e]=0;return r.O(h)},s=self["webpackChunkhello_world"]=self["webpackChunkhello_world"]||[];s.forEach(a.bind(null,0)),s.push=a.bind(null,s.push.bind(s))}();var s=r.O(void 0,[998],(function(){return r(3112)}));s=r.O(s)})();
//# sourceMappingURL=app.f4e13dde.js.map