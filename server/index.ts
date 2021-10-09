import { Response, Request, query } from "express";
import {connect,selectCategoriasSerie,selectEpisodios, selectSerie, selectSeries } from "./BancoDeDados";
import { Connection } from "mysql2/promise";
let conn : Connection;

import express from "express";
import cors from 'cors';
import qs from "qs";
var parseUrl = require('parseurl');
const app = express();
app.use(cors());

app.get("/Series",async function (req : Request,res : Response){
	let query = qs.parse(parseUrl(req).query);
	let nome  = undefined;
	let categoria = undefined;
	if(typeof query.nome  === "string")
		nome = query.nome;
	if(typeof query.categoria  === "string")
		categoria = query.categoria;
	console.log(typeof nome + " - " + typeof categoria);
	var Series = await selectSeries(conn,nome , categoria);
	res.json(Series);
});
app.get("/Serie/:ID", async function (req : Request,res : Response){
	const ID = Number(req.params.ID);
	if(isNaN(ID))
		return res.sendStatus(400);

	const serie = await selectSerie(conn,ID);
	res.json(serie);
})
app.get("/Serie/:ID/Episodios", async function (req : Request,res : Response){
	const ID = Number(req.params.ID);
	const Temp = Number(req.query.Temporada);
	if(isNaN(ID) || isNaN(Temp))
		return res.sendStatus(400);
	const Episodios = await selectEpisodios(conn,ID, Temp);
	res.json(Episodios);
})
app.listen(3000,async function () {
	console.log("SERVIDOR LEVANTADO CAMBADA")
	conn = await connect();
});
