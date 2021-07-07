function httpGet(theUrl)
{
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
export function GetEpisodios(ID,Temporada){
    var responseText = httpGet(`http://localhost:3000/Serie/${ID}/Episodios?Temporada=${Temporada}`);
    const Episodios = JSON.parse(responseText);
    Episodios.forEach((E)=> E.DataExibicao = new Date(E.DataExibicao));
    return Episodios;
}
