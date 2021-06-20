const SecSeries = document.getElementById("SecSeries"); 
Series.forEach(S => {
	const URL = "./serie.html?ID="+S.ID;
	SecSeries.innerHTML += `
	<article class="CardSerie"> 
		<a href="${URL}"><figure><img src="${URLBanner(S)}" alt=""></figure></a>
		<div class="Descricao">
			<div class="Titulo">    
				<a href="${URL}"><h3>${S.Nome}</h3></a>
				<a href="${URL}"><h5>${S.Ano}</h5></a>
			</div>
			<a href="${URL}"><h5>${S.NomeOriginal}</h5></a>
			<div class="Categorias">${S.Categorias.map( C => `<span>${C}</span>`).join("")}</div> 
		</div> 
	</article>
	`
}); 
