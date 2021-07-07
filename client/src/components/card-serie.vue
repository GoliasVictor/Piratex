<template>
	<article class="CardSerie">
		<router-link :to="URL"><figure><img v-bind:src="serie | URLBanner" alt=""></figure></router-link>
		<div class="Descricao">
			<div class="Titulo">
				<router-link :to="URL"><h3>{{serie.Nome}}</h3></router-link>
				<router-link :to="URL"><h5>{{serie.Ano}}</h5></router-link>
			</div>
			<router-link :to="URL"><h5>{{serie.NomeOriginal}}</h5></router-link>
			<div class="Categorias">
				<span v-for="C in serie.Categorias" :key="C">{{C}}</span>
			</div>
		</div>
	</article>
</template>
<script>
import {URLSerie,  URLBanner} from "../filters";

export default {
	props: ['serie'],
	computed:{
		URL : function(){
			return URLSerie(this.serie);
		}
	},
	filters:{
		URLSerie,
        URLBanner
	}
}
</script> 