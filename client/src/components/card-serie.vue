<template>
	<article class="CardSerie">
		<router-link :to="URL" class="banner-serie"><figure><img v-bind:src="serie | URLBanner" alt=""></figure></router-link>
		<div class="Descricao">
			<div class="Titulo">
				<router-link :to="URL"><h3>{{serie.Nome}}</h3></router-link>
				<router-link :to="URL"><h5>{{serie.Ano}}</h5></router-link>
			</div>
			<router-link :to="URL"><h5>{{serie.NomeOriginal}}</h5></router-link>
			<div class="Categorias">
				<router-link :to="'/pesquisa?nome=&categoria='+C" class="chip-categoria"   v-for="C in serie.Categorias" :key="C" >{{C}}</router-link>
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
<style lang="scss">

.CardSerie{  
	border-radius: 10px  ;
	display: flex;
    overflow: hidden;  
    position: relative; 
    width: 100%;
	flex-direction: column;
	max-width: 300px;
	
    margin: 6px;
    figure,img{
        width: inherit;
        height: 200px;
    }
	.banner-serie{
		width: inherit;
	}
    img{
        object-fit: cover; 
        &:hover{
            opacity: 0.7;
        }
    }
    .Descricao{  
		height: 100%;
        padding: 10px;
        background-color: var(--Dark);
		h5{
			display: inline;
		}
    }
    .Titulo{
        display: flex;
        align-items: baseline;
        justify-content: space-between;
    } 
    .Categorias{
        display: flex;
        margin: 9px 0 ; 
        font-size: 0.9em;
        flex-wrap: wrap;
    }
} 
@media screen  and (min-width: 600px){
	[mode="list"] .CardSerie,.CardSerie[mode="list"]  {
		max-width: none;
		flex-direction: row;
		margin: 6px 0px;

		.banner-serie{
			max-width: 300px;
		}
		.Descricao{
			width: 100%;
		}
	}
}
.chip-categoria{
    font-size: 1em;
    background: var(--Primary);
	color: var(--PrimaryContrast);
    border-radius: 20px; 
    padding: 0.1em 0.5em; 
    display: inline-block;
    margin: 5px 6px;
    &:hover{
        opacity: 0.8;
        cursor: pointer;
    }
}
	
[mode="block"] .CardSerie , .CardSerie[mode="block"]  {
	flex-direction: column;
	max-width: 300px;
	.Descricao{
		width: inherit;
	}
}

</style>