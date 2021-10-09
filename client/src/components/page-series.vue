<template>
	<section id="SecSeries" class="CardsContainer" mode="block">
		<card-serie v-for="S in series" :key="S.nome" v-bind:serie="S"></Card-Serie>
	</section>
</template>
<script> 
import CardSerie from "./card-serie.vue" ;
export default {
	props:["series"],
	components:{
		"card-serie":CardSerie
	}
}
</script>