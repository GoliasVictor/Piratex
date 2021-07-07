require('dotenv/config')
import mysql, { FieldPacket , Connection} from 'mysql2/promise';
import {Categoria, Episodio, ISerie as RowSerie, RowCategoria, RowEpisodio, Serie} from './classes';

export  async function connect(){
    const connect = await mysql.createConnection({
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        port: 3306
    })
    return connect;
}
export async function selectCategoriasSerie(conn: Connection, ID : number){
	const ScriptSerieCategoria =`
	SELECT C.NM_CATEGORIA
	FROM SERIE_CATEGORIA AS SC
	JOIN CATEGORIA AS C
		ON C.ID_CATEGORIA = SC.ID_CATEGORIA
	WHERE SC.ID_SERIE = ?;
	`;
	const [RowsCategorias] : [RowCategoria[],FieldPacket[]] =   await conn.query(ScriptSerieCategoria, [ID]);
	return RowsCategorias.map((RC) => new Categoria(RC).NomeCategoria);
}

export async function selectInfoBasicaSerie(conn: Connection)  {
	const ScriptSerie = `
	SELECT
		ID_SERIE,
		NM_SERIE,
		NM_ORIGINAL_SERIE,
		AA_SERIE
	FROM SERIE;
	`;

   const [rowsSerie] : [RowSerie[], FieldPacket[]] =   await conn.query(ScriptSerie);
	const Series = rowsSerie.map((S) => new Serie(S));
	for(var S of Series)
		S.Categorias =  await selectCategoriasSerie(conn,S.ID);

	return Series;
}
export async function selectSerie(conn: Connection,ID : number)  {

    const [RowsSerie] : [RowSerie[],FieldPacket[]] =   await conn.query('SELECT * FROM SERIE WHERE ID_SERIE = ?;',[ID]);
	 const serie  = new Serie(RowsSerie[0]);
	 serie.Categorias =  await selectCategoriasSerie(conn, serie.ID);
    return  serie;
}
export async function selectEpisodios(conn: Connection, IDSerie: number, Temporada : number  ){
	const ScriptEpisodios = `
	SELECT
		ID_EPISODIO,
		ID_TEMPORADA,
		NM_EPISODIO,
		NM_ORIGINAL_EPISODIO,
		DT_EXIBICAO,
		QT_DURACAO,
		DS_EPISODIO,
		DS_OBSERVACAO_EPISODIO
	FROM EPISODIO
	WHERE ID_SERIE = ? AND ID_TEMPORADA = ?;
	`
	const [RowsEpisodio] : [RowEpisodio[],FieldPacket[]] =   await conn.query(ScriptEpisodios,[IDSerie, Temporada]);
	return RowsEpisodio.map((RE) => new Episodio(RE));
}
