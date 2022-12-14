<template>
<div :mode="mode">
	<div id="Search">
        <input type="search" v-model="nomeSerie">
        <span class="material-icons" v-on:click="Procurar">search</span>
    </div>
	<div id="options">
		<div id="filtro-categoria">
			<input type="text" list="lista-categorias" placeholder="Categoria" v-model="categoriaSerie">
			<button v-on:click="Procurar">Filtrar</button>
		</div>
	<datalist id="lista-categorias">
		<option v-for="(C,i ) in Categorias" :key="i" v-bind:value="C"></option>
	</datalist>
		<div id="view-option">
			<button class="material-icons-sharp" v-on:click="mode='block'">grid_view</button>
			<button class="material-icons-sharp" v-on:click="mode='list'">view_agenda</button>
		</div>
	</div>
	<div id="container-pesquisa">
		<card-serie v-for="S in Series" :key="S.nome" v-bind:serie="S" :mode="mode"  ></Card-Serie>
	</div>
	
</div>
</template>
<script>
import {  GetCategorias, ProcurarSeries } from "../Requests";
import CardSerie from './card-serie.vue';

export default {
	data:function (){
		const data = {
			mode:"block",
			nomeSerie:this.$route.query.nome ,
			categoriaSerie:this.$route.query.categoria,
			Categorias: GetCategorias()
		}
		data.Series =  ProcurarSeries(data.nomeSerie,data.categoriaSerie);
		return data;
	}, 
	mounted(){
	},

	components:{
		"card-serie":CardSerie
	},
	methods:{ 
		Procurar(){		
			this.$router.push({
				path: "/pesquisa", 
				query:{
					nome:this.nomeSerie,
					categoria:this.categoriaSerie
				}
			});			
		}
	}
}
</script>
<style lang="scss">

#container-pesquisa{
	
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
#filtro-categoria{
	overflow: hidden;
	display: flex;
	justify-content: stretch;
	input[type="text"]{
		border-right: 0;
		border-end-end-radius: 0;
		border-start-end-radius: 0;
	}
	button{
		height: 100%;
		border: 2px solid var(--Primary);
		border-left: 0;
		border-end-start-radius: 0;
		border-start-start-radius: 0;
	}
}
#options{
	height: 30px;
	align-items: stretch;
	margin: 0.5em 0 0.5em 0;
	display: grid;
	width: 100%;
	grid-template-columns: min-content  auto;

}

#view-option{
	justify-self: end;
	width: min-content;
	border-radius: 3em;
	position: relative;
	display: flex;
	overflow: hidden;
	button{
		padding: 0.1em 0.2em;
		border-radius: 0;
		margin: 0;
		display: block;
		&:first-child{
			padding-left: 0.3em;
		}
		&:last-child{
			padding-right: 0.3em;
		}
	}
	&::before{
		content:"";
		position: absolute;
		height: 100%;
		border-left : 1px solid var(--SoftDark);
		left:50%;
	}

}

#Search {
	display: flex;
	border: var(--Primary) solid;
	border-radius: 2em;
	font-size: 1.3em;
	input[type="search"] {
		text-align: center;
		color: var(--SoftDarkContrast);
		box-sizing: content-box; 
        width: 100%;
        margin: 0.4em 0.5em;
		margin-right: 0;
        font-size: 1em;
		border: none;
        transition: width 0.2s linear;
		&::-webkit-search-cancel-button {
			display: none;
		} 
	} 
  
	.material-icons {
		align-self: center;
		font-size: 1.2em;
		margin: 0.2em; 
		padding: 0.3em; 
        cursor: pointer;
        background: transparent;    
        border: none;
		border-radius: 3em;
		&:hover{
			background: rgb(0,0, 0.5);
		}
	}
}
@media screen  and (max-width: 600px)
{
	#view-option{
		display: none;
	}
}
</style>