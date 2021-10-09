import { RowDataPacket } from "mysql2";


export interface RowCategoria extends RowDataPacket{
	ID_CATEGORIA : number
	NM_CATEGORIA : string,
};
export class Categoria{
	IdCategoria	 : number | undefined;
	NomeCategoria: string;
	constructor(RowCategoria : RowCategoria){
		this.IdCategoria   = RowCategoria.ID_CATEGORIA;
		this.NomeCategoria = RowCategoria.NM_CATEGORIA;
	}
};
export interface ISerie extends RowDataPacket {
	ID_SERIE			:number,
	NM_SERIE			:string,
	NM_ORIGINAL_SERIE	:string,
	AA_SERIE			:number,
	QT_TEMPORADAS		:number | undefined,
	QT_EPISODIOS		:number | undefined,
	DS_SINOPSE_SERIE	:string | undefined,
};
export class Serie{
	ID 			: number;
	Nome			: string;
	NomeOriginal: string;
	Ano		: number;
	QtTemporadas: number	  | undefined;
	QtEpisodios	: number	  | undefined;
	Sinopse		: string 	  | undefined;
	Categorias  : Categoria[] | string[] | undefined;
	constructor (Iserie: ISerie){
		this.ID  = Iserie.ID_SERIE;
		this.Nome			= Iserie.NM_SERIE;
		this.NomeOriginal	= Iserie.NM_ORIGINAL_SERIE;
		this.Ano				= Iserie.AA_SERIE;
		this.QtTemporadas	= Iserie.QT_TEMPORADAS;
		this.QtEpisodios	= Iserie.QT_TEMPORADAS;
		this.Sinopse		= Iserie.DS_SINOPSE_SERIE;
	}
}


export interface RowEpisodio extends RowDataPacket {
	ID_SERIE 	 				:number | undefined,
	ID_TEMPORADA 				:number | undefined,
	ID_EPISODIO  				:number | undefined,
	NM_EPISODIO  				:string | undefined,
	NM_ORIGINAL_EPISODIO 	:string | undefined,
	DT_EXIBICAO  				:Date	  | undefined,
	QT_DURACAO 	 				:number | undefined,
	DS_EPISODIO  				:string | undefined,
	DS_OBSERVACAO_EPISODIO	:string | undefined
};
export class Episodio {
	IdSerie		:number | undefined;
	IdTemporada :number | undefined;
	IdEpisodio  :number | undefined;
	Nome			:string | undefined;
	NomeOriginal:string | undefined;
	DataExibicao:Date   | undefined;
	Duracao		:number | undefined;
	Descricao	:string | undefined;
	Observacao	:string | undefined;
	constructor(rowEpisodio: RowEpisodio){
		this.IdSerie		= rowEpisodio.ID_SERIE;
		this.IdTemporada	= rowEpisodio.ID_TEMPORADA;
		this.IdEpisodio	= Number(rowEpisodio.ID_EPISODIO);
		this.Nome			= rowEpisodio.NM_EPISODIO;
		this.NomeOriginal	= rowEpisodio.NM_ORIGINAL_EPISODIO ;
		this.DataExibicao	= rowEpisodio.DT_EXIBICAO;
		this.Duracao		= rowEpisodio.QT_DURACAO;
		this.Descricao		= rowEpisodio.DS_EPISODIO;
		this.Observacao	= rowEpisodio.DS_OBSERVACAO_EPISODIO;
	}
};



