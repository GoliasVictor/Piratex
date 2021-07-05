<template>
	<section id="SecSeries" class="CardsContainer">
		<card-serie v-for="S in series" :key="S.nome" v-bind:serie="S"  v-on:abrir-serie="abrirSerie" ></Card-Serie>
	</section>
</template>
<script> 
import CardSerie from "./card-serie.vue" ;
export default {
	props:["series"],
	components:{
    	"card-serie":CardSerie
	}, 
	methods:{
		abrirSerie(ID){
			this.$emit("abrir-serie",ID)
		}
	}
}
</script>