 
const urlParams = new URLSearchParams(window.location.search);
const ID = urlParams.get('ID');
const Serie = Series.find((S) => S.ID == ID);

if(Serie == undefined)
	window.location.href = "./Index.html"; 
	
Vue.component('banner', {
	props: ['Serie'], 
	template: `
	<section id="CapaSerie">
		<figure>
			<img v-bind:src="Serie | URLBanner"  id="ImgBanner" alt="">
		</figure>
		<div class="Descricao">
			<h1>{{Serie.Nome}}</h1>
			<p>Título original:{{Serie.NomeOriginal}}</p>
			<p>Ano de Estréia: {{Serie.Ano}}</p>
			<p>Categorias: {{Serie.Categorias.join(", ")}}</p>
			<p>Temporada: {{Serie.QtTemporada}} | Episodios:  {{Serie.QtEpisodio}}</p>
		</div>
	</section> 
	`	 
});

Vue.component('card-episodio', {
	props: ['episodio'], 
	methods:{
		 DoisDigitos:function(n){
			return (n < 10 ? '0' : '') + n;
		} 
	},
	template: `
	<div class="DesEpisodio">
		<h4>T{{DoisDigitos(episodio.Temporada)}} E{{DoisDigitos(episodio.Numero)}} {{episodio.Nome}}</h4>
		<small>{{episodio.NomeOriginal}} - Exbição: {{episodio.DataExibicao}} - {{episodio.Duracao}}min</small>
		<p class="Descricao">{{episodio.Descricao}}</p>
		<p class="Observacao">Observacao:</p>
		<p>{{episodio.Observacao || "Nenhuma Observacao"}}</p>
	</div>
	`	 
});
var app = new Vue({
	el: '#Serie',
	computed:{	
		Temporadas:function(){
			var Temporadas =[];
			for( let i = 1 ; i <= this.Serie.QtTemporada; i++)
				Temporadas.push(i);
			return Temporadas;
		}
	},
	data: { 
		Temporada:Serie.QtTemporada,
		Serie:Serie
	}
})