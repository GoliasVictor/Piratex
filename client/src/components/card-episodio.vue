<template>
	<div class="DesEpisodio">
		<h4>T{{DoisDigitos(episodio.IdTemporada)}} E{{DoisDigitos(episodio.IdEpisodio)}} {{episodio.Nome}}</h4>
		<small>{{episodio.NomeOriginal}} - Exbição: {{DateToString(episodio.DataExibicao)}} - {{episodio.Duracao}}min</small>
		<p class="Descricao">{{episodio.Descricao}}</p>
		<p class="Observacao">Observacao:</p>
		<p>{{episodio.Observacao || "Nenhuma Observacao"}}</p>
	</div>
</template>
<script>
import {DateToString} from "../filters";
export default {
	props: ['episodio'],
	methods:{
		DoisDigitos:function(n){
			return (n < 10 ? '0' : '') + n;
		},
        DateToString
	},
}
</script>
