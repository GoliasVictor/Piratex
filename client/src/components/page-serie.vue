<template>
	<div  id="Serie">
		<section id="CapaSerie">
			<figure>
				<img v-bind:src="serie | URLBanner"  id="ImgBanner" alt="">
			</figure>
			<div class="Descricao">
				<h1>{{serie.Nome}}</h1>
				<p>Título original:{{serie.NomeOriginal}}</p>
				<p>Ano de Estréia: {{serie.Ano}}</p>
				<p>Categorias: {{serie.Categorias.join(", ")}}</p>
				<p>Temporada: {{serie.QtTemporada}} | Episodios:  {{serie.QtEpisodio}}</p>
			</div>
		</section> 
		<section id="NavMenu">
			<a href="#TituloSinpse">Sinopse</a>
			<a href="#TituloEpisodios">Temporadas e Episodios</a>
		</section>
		<section>
			<h2 id="TituloSinpse">Sinopse</h2>
			<p id="Sinopse">{{serie.Sinopse}}</p>
		</section>
		<section id="ContainerTemporada">
			<h2 id="TituloEpisodios">Temporada</h2>
			<select name="example" id="SelecTemporada" v-model="Temporada">
				<option v-for="i in Temporadas" :key="i" v-bind:value="i">{{i}}º Tempoarada</option>
			</select>
			<div id="ContainerEpisodios">  
				<card-episodio v-for="E in Episodios" :key="E.Nome+E.Numero" v-bind:episodio="E" ></card-episodio>
			</div>
		</section>
	</div>
</template>
<script>
import {URLBanner} from "../filters";
import CardEpisodio from "./card-episodio.vue";
export default {
	props:["serie"],
	data () {
		return {
			Temporada:this.serie.QtTemporada,
		}
	},
	computed:{	
		Temporadas:function(){
			var Temporadas =[];
			for( let i = 1 ; i <= this.serie.QtTemporada; i++)
				Temporadas.push(i);
			return Temporadas;
		},
		Episodios:function(){
			return this.serie.Episodios.filter((e) => e.Temporada  == this.Temporada);
		}
	},
	components:{
		"card-episodio":CardEpisodio
	},
	filters:{
		URLBanner
	},
}
</script>
