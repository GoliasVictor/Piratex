const Descricao	= 			document.querySelector("#CapaSerie>.Descricao");
const ImgBanner	= 			document.querySelector("#ImgBanner");
const Sinopse 	= 			document.querySelector("#Sinopse"); 
const SelecTemporada =		document.querySelector("#SelecTemporada"); 
const ContainerEpisodios = 	document.querySelector("#ContainerEpisodios"); 
const urlParams = new URLSearchParams(window.location.search);
const ID = urlParams.get('ID');
const Serie = Series.find((S) => S.ID == ID);
if(Serie == undefined)
	window.location.href = "./Index.html";
const QtTemporada =  parseInt(Serie.QtTemporada);



function CriarDecricao(Serie){
	return `
		<h1>${Serie.Nome}</h1>
		<p>Título original:${Serie.NomeOriginal}</p>
		<p>Ano de Estréia: ${Serie.Ano}</p>
		<p>Categorias: ${Serie.Categorias.join(", ")}</p>
		<p>Temporada: 5 | Episodios: 22</p>
	`;
}
function DoisDigitos(n) {
	return (n < 10 ? '0' : '') + n;
}
function CriarCardEpisodio(Episodio){
	return `
	<div class="DesEpisodio">
		<h4>T${DoisDigitos(Episodio.Temporada)} E${DoisDigitos(Episodio.Numero)} ${Episodio.Nome}</h4>
		<small>${Episodio.NomeOriginal} - Exbição: ${Episodio.DataExibicao} - ${Episodio.Duracao}min</small>
		<p class="Descricao">${Episodio.Descricao}</p>
		<p class="Observacao">Observacao:</p>
		<p>${Episodio.Observacao || "Nenhuma Observacao"}</p>
	</div>
	`
}
function ImprimirEpisodios(){
	ContainerEpisodios.innerHTML = "";
	const EpisodiosTemporada = Serie.Episodios.filter((E) => E.Temporada == SelecTemporada.value);
	for(let Episodio of EpisodiosTemporada)
		ContainerEpisodios.innerHTML += CriarCardEpisodio(Episodio);
}
 

Descricao.innerHTML = CriarDecricao(Serie);
ImgBanner.src = URLBanner(Serie)
Sinopse.innerText = Serie.Sinopse;
SelecTemporada.addEventListener("change",ImprimirEpisodios );
for (let i = QtTemporada; i > 0; i--) 
    SelecTemporada.innerHTML += `<option value="${i}">${i}º Tempoarada</option>\n`
ImprimirEpisodios()