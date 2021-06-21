<template>
	<div class="DesEpisodio">
		<h4>T{{DoisDigitos(episodio.Temporada)}} E{{DoisDigitos(episodio.Numero)}} {{episodio.Nome}}</h4>
		<small>{{episodio.NomeOriginal}} - Exbição: {{episodio.DataExibicao}} - {{episodio.Duracao}}min</small>
		<p class="Descricao">{{episodio.Descricao}}</p>
		<p class="Observacao">Observacao:</p>
		<p>{{episodio.Observacao || "Nenhuma Observacao"}}</p>
	</div>
</template>
<script> 

export default {
	props: ['episodio'],
	methods:{
		DoisDigitos:function(n){
			return (n < 10 ? '0' : '') + n;
		} 
	}
}
</script>