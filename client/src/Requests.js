import axios from "axios";

function httpGet(theUrl)
{
    console.log(theUrl);
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );

    return xmlHttp.responseText;
}
export function GetSeries(){
    var responseText = httpGet("http://localhost:3000/Series");
    return JSON.parse(responseText);
}
export function GetSerie(ID){
    var responseText = httpGet("http://localhost:3000/Serie/"+ID);
    return JSON.parse(responseText);
}
export function ProcurarSeries(Nome, Categoria){

    var responseText = httpGet(`http://localhost:3000/Series?nome=${Nome || ""}&categoria=${Categoria || ""}`);
   
   return JSON.parse(responseText);
}
export function GetCategorias(){
    //var responseText = httpGet("http://localhost:3000/Categorias");
   // return JSON.parse(responseText);
   return ["Ficção", "científica", "Sátira", "Thriller", "psicológico", "Antologia", "Antologia", "gore", "Cyberpunk", "Adulto", "Animacao", "Samurai", "Magica", "Meccha", "Historico", "Anime", "Baseado em quadrinhos", "Vigilante", "DC Comics", "Super Herois", "Investigação", "Viagem no Tempo", "Surrealismo", "Policial", "Misterio", "sobrenatural", "Horror", "1980s", "Mundo Paralelo", "thriller psicológico"]
}
export function GetEpisodios(ID,Temporada){
    var responseText = httpGet(`http://localhost:3000/Serie/${ID}/Episodios?Temporada=${Temporada}`);
    const Episodios = JSON.parse(responseText);
    Episodios.forEach((E)=> E.DataExibicao = new Date(E.DataExibicao));
    return Episodios;
}