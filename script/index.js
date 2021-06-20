const SecSeries = document.getElementById("SecSeries"); 
 
Vue.component('card-serie', {
	props: ['serie'],
	computed:{
		URL : function(){
			return URLSerie(this.serie);
		}
	}, 
	template: `
		<article class="CardSerie"> 
			<a v-bind:href="URL"><figure><img v-bind:src="serie | URLBanner" alt=""></figure></a>
			<div class="Descricao"> 
				<div class="Titulo">    
					<a v-bind:href="URL"><h3>{{serie.Nome}}</h3></a>
					<a v-bind:href="URL"><h5>{{serie.Ano}}</h5></a>
				</div> 
				<a v-bind:href="URL"><h5>{{serie.NomeOriginal}}</h5></a>
				<div class="Categorias">
					<span v-for="C in serie.Categorias">{{C}}</span>
				</div> 
			</div> 
		</article> `,
	 
})
var app = new Vue({
	el: '#index',
	data: {
		Series:Series
	}
})
