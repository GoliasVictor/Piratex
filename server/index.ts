import { Response, Request } from "express";
import {connect,selectEpisodios, selectSerie, selectInfoBasicaSerie} from "./BancoDeDados";
import { Connection } from "mysql2/promise";
let conn : Connection;

import express from "express";
import cors from 'cors';
const app = express();
app.use(cors());

app.get("/Series",async function (req : Request,res : Response){
	var Series;
	if(req.query.Info == "Basica")
		Series = await selectInfoBasicaSerie(conn);
	else
		Series = await selectInfoBasicaSerie(conn);
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
